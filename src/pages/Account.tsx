import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "../components/layout/Container";
import PageLayout from "../components/layout/PageLayout";

const Account = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;

    // Function to initialize Mariana Tek scripts
    const initializeMarianaTek = () => {
      if (!isMounted) return;

      // Prevent duplicate script loading
      if (document.querySelector('script[src*="marianaiframes"]')) {
        setIsLoading(false);
        return;
      }

      window.MarianaIntegrations = undefined;

      const loadScript = (src: string) => {
        return new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = `https://kailagreestudio.marianaiframes.com/${src}?t=${new Date().getTime()}`;
          script.async = true;

          script.onload = () => resolve(true);
          script.onerror = () =>
            reject(new Error(`Failed to load script: ${src}`));

          document.body.appendChild(script);
        });
      };

      const loadScripts = async () => {
        try {
          if (!isMounted) return;

          await loadScript("polyfills");
          await loadScript("js");

          if (isMounted) {
            setIsLoading(false);
          }
        } catch (error) {
          console.error("Error loading Mariana Tek scripts:", error);
          if (isMounted) {
            setIsLoading(false);
          }
        }
      };

      setIsLoading(true);
      loadScripts();
    };

    initializeMarianaTek();

    return () => {
      isMounted = false;
      document
        .querySelectorAll('script[src*="marianaiframes"]')
        .forEach((script) => script.remove());
      window.MarianaIntegrations = undefined;
    };
  }, [location.key]); // Run effect when route changes

  return (
    <PageLayout>
      <div className="min-h-screen bg-sand pt-32 pb-20">
        <Container>
          <h1 className="text-4xl font-display mb-0 text-center">
            YOUR KAI ACCOUNT
          </h1>
          <div className="max-w-2xl mx-auto">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading account...</p>
              </div>
            ) : (
              <div data-mariana-integrations="/account"></div>
            )}

            <noscript>
              Please enable JavaScript to view the{" "}
              <a href="https://marianatek.com/?ref_noscript" rel="nofollow">
                Web Integrations by Mariana Tek
              </a>
            </noscript>
          </div>
        </Container>
      </div>
    </PageLayout>
  );
};

export default Account;
