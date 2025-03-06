import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../components/layout/Container";
import PageLayout from "../components/layout/PageLayout";

const Buy = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;

    const initializeMarianaTek = () => {
      if (!isMounted) return;

      // Avoid duplicate script loading
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
  }, [location.key]); // Reload when location changes

  return (
    <PageLayout>
      <div className="min-h-screen bg-sand">
        <div className="pt-32 pb-20">
          <Container>
            <motion.div
              className="mb-16 relative text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-6xl md:text-[120px] tracking-wider mb-6">
                BOOK YOUR
                <br />
                EXPERIENCE
              </h1>
              <p className="text-xl md:text-2xl font-light tracking-wide max-w-2xl">
                Transform your fitness journey with our signature Lagree method
                classes. Choose the package that best fits your lifestyle.
              </p>
              {/* Background Decorations */}
              <div className="absolute -right-20 top-0 w-40 h-40 bg-black/5 rounded-full blur-3xl -z-10" />
              <div className="absolute -left-20 bottom-0 w-40 h-40 bg-black/5 rounded-full blur-3xl -z-10" />
            </motion.div>

            {/* Mariana Tek Integration */}
            <div className="mt-20 max-w-4xl mx-auto">
              {isLoading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto"></div>
                  <p className="mt-4 text-gray-600">Loading packages...</p>
                </div>
              ) : (
                <div data-mariana-integrations="/buy/48717"></div>
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
      </div>
    </PageLayout>
  );
};

export default Buy;
