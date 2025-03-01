import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Container from "../components/layout/Container";
import PageLayout from "../components/layout/PageLayout";
import { useAbout } from "../hooks/useAbout";
import LoadingSpinner from "../components/ui/LoadingSpinner";

declare global {
  interface Window {
    initMap: () => void;
    google: any;
  }
}

const About = () => {
  const { images, loading, error } = useAbout();
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const loadGoogleMaps = () => {
      if (window.google) {
        initMap();
        return;
      }

      window.initMap = initMap;
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${
        import.meta.env.VITE_GOOGLE_MAPS_API_KEY
      }&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    const initMap = () => {
      if (!mapRef.current || !window.google) return;

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 37.38090673637761, lng: -122.03739692362071 },
        zoom: 14,
        styles: [
          {
            elementType: "geometry",
            stylers: [{ color: "#212121" }],
          },
          {
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            elementType: "labels.text.fill",
            stylers: [{ color: "#757575" }],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#212121" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#383838" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
          },
        ],
      });

      mapInstanceRef.current = map;

      const heartSVG = {
        path: "M256 464l-16.56-16.41C106.56 322.4 16 242.81 16 150.4 16 78.44 78.4 16 150.4 16c44.18 0 86.13 21.61 112.6 56.1C289.47 37.61 331.42 16 375.6 16 447.6 16 510 78.44 510 150.4c0 92.41-90.56 171.99-223.44 297.19L256 464z",
        fillColor: "white",
        fillOpacity: 1,
        scale: 0.05,
        strokeWeight: 0,
        anchor: new window.google.maps.Point(250, 500),
      };

      const marker = new window.google.maps.Marker({
        position: { lat: 37.38090673637761, lng: -122.03739692362071 },
        map,
        icon: heartSVG,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="text-align: center; font-family: Arial, sans-serif; padding: 0; margin: 0;">
            <h4 style="margin: 0; font-size: 16px; font-weight: bold; line-height: 1.2;">Kai Lagree Studio</h4>
            <a href="https://www.google.com/maps/place/415+N+Mary+Ave+%23110,+Sunnyvale,+CA+94085/@37.3901215,-122.042211,17z/data=!3m1!4b1!4m6!3m5!1s0x808fb701dca940ad:0x2e99c69c8353677f!8m2!3d37.3901215!4d-122.042211!16s%2Fg%2F11tn0msfpr?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              style="color: #007BFF; text-decoration: underline; font-size: 14px; margin: 0;">
              Directions
            </a>
          </div>
        `,
      });

      infoWindow.open(map, marker);

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    };

    loadGoogleMaps();

    return () => {
      mapInstanceRef.current = null;
      delete window.initMap;
    };
  }, []);

  return (
    <PageLayout>
      <div className="min-h-screen bg-sand pt-32 pb-20">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <p className="text-lg leading-relaxed">
                  As women navigating the journey of life, motherhood, and
                  careers, we've learned that self-care is not just
                  important—it's transformative. Yet, finding a space that truly
                  supports growth and balance hasn't always been easy.
                </p>
                <p className="text-lg leading-relaxed">
                  This studio was born from a simple but powerful vision: to
                  create a space where everyone—regardless of age, gender, or
                  experience—feels welcome and inspired. A place where physical
                  strength and mental clarity come together, because we believe
                  true health is rooted in the harmony of mind and body.
                </p>
                <p className="text-lg leading-relaxed">
                  Here, it's not just about working out—it's about showing up
                  for yourself, embracing your potential, and becoming stronger
                  in every way. Together, we're building a community that
                  uplifts, empowers, and reminds us all that when we are
                  investing in our health, we are investing in our future.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-2 gap-4"
              >
                {loading ? (
                  <div className="col-span-2 flex justify-center items-center h-64">
                    <LoadingSpinner size="large" />
                  </div>
                ) : error ? (
                  <div className="col-span-2 text-center text-red-600 h-64 flex items-center justify-center">
                    {error}
                  </div>
                ) : (
                  images.map((image, index) => (
                    <motion.img
                      key={image.id}
                      src={image.image_url}
                      alt={`Studio Image ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  ))
                )}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative"
            >
              <div
                ref={mapRef}
                className="w-full h-[400px] bg-gray-300 rounded-lg overflow-hidden"
              ></div>
              <div className="text-center mt-4 text-lg">
                415 N Mary Ave Suite 110, Sunnyvale, CA 94085
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </PageLayout>
  );
};

export default About;
