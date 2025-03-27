import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

interface HeroImage {
  id: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export const useHero = () => {
  const [desktopImage, setDesktopImage] = useState<HeroImage | null>(null);
  const [mobileImage, setMobileImage] = useState<HeroImage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeroImages = async () => {
      try {
        // Fetch both desktop and mobile images in parallel
        const [desktopResponse, mobileResponse] = await Promise.all([
          supabase.from("hero").select("*").limit(1).maybeSingle(),
          supabase.from("hero_mobile").select("*").limit(1).maybeSingle(),
        ]);

        if (desktopResponse.error) throw desktopResponse.error;
        if (mobileResponse.error) throw mobileResponse.error;

        setDesktopImage(desktopResponse.data);
        setMobileImage(mobileResponse.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching hero images:", err);
        setError("Failed to load hero images");
      } finally {
        setLoading(false);
      }
    };

    fetchHeroImages();

    // Subscribe to changes
    const desktopChannel = supabase
      .channel("hero_changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "hero" },
        () => fetchHeroImages()
      )
      .subscribe();

    const mobileChannel = supabase
      .channel("hero_mobile_changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "hero_mobile" },
        () => fetchHeroImages()
      )
      .subscribe();

    return () => {
      desktopChannel.unsubscribe();
      mobileChannel.unsubscribe();
    };
  }, []);

  return { desktopImage, mobileImage, loading, error };
};
