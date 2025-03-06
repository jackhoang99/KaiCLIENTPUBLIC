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

      if (document.querySelector('script[src*="marianaiframes"]')) {
        setIsLoading(false);
        return;
      }

      window.MarianaIntegrations = undefined;

      const loadScript = (src) => {
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
  }, [location.key]);

  return (
    <PageLayout>
      <div className="min-h-screen bg-sand">
        <div className="relative h-[250px] md:h-[400px] w-full">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src="https://static.wixstatic.com/media/8c7d69_35e0e42e65954df7a4e29eea84f728bb~mv2.jpg/v1/fill/w_1202,h_918,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AdobeStock_227531282.jpg"
            alt="Buy Header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <h1 className="font-display text-5xl md:text-8xl text-white tracking-wider">
              BUY
            </h1>
          </div>
        </div>

        <div className="py-8 md:py-20">
          <Container>
            <div className="max-w-4xl mx-auto">
              <iframe
                src="https://kailagreestudio.marianaiframes.com/iframe/buy/48717"
                width="100%"
                height="800"
                frameBorder="0"
                allowFullScreen
                title="Buy"
              ></iframe>
            </div>
          </Container>
        </div>
      </div>
    </PageLayout>
  );
};

export default Buy;
