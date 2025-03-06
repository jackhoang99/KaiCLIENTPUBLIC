import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../components/layout/Container";
import PageLayout from "../components/layout/PageLayout";

const TENANT_NAME = "kailagreestudio";

const Buy = () => {
  const location = useLocation();
  const [integrationKey, setIntegrationKey] = useState(0);
  const [loading, setLoading] = useState(true);

  const params = new URLSearchParams(location.search);
  const marianaPath = params.get("_mt") || "/buy";

  useEffect(() => {
    const existingIntegration = document.querySelector(
      "[data-mariana-integrations]"
    );
    if (existingIntegration) existingIntegration.innerHTML = "";

    window.MarianaIntegrations = undefined;

    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src*="${src}"]`)) {
          resolve(true);
          return;
        }

        const script = document.createElement("script");
        script.src = `https://${TENANT_NAME}.marianaiframes.com/${src}?t=${new Date().getTime()}`;
        script.async = true;
        script.onload = () => resolve(true);
        script.onerror = () =>
          reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
      });
    };

    loadScript("polyfills")
      .then(() => loadScript("js"))
      .then(() => {
        console.log("✅ Mariana Tek scripts loaded!");
        setIntegrationKey((prevKey) => prevKey + 1);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [location.search]);

  useEffect(() => {
    const checkMarianaLoaded = setInterval(() => {
      if (window.MarianaIntegrations) {
        clearInterval(checkMarianaLoaded);
        console.log("✅ Mariana Integrations initialized!");
      }
    }, 500);
  }, []);

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
            </motion.div>

            <div className="mt-20 max-w-4xl mx-auto">
              {loading ? (
                <div className="flex justify-center items-center">
                  <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
                </div>
              ) : (
                <div
                  key={integrationKey}
                  data-mariana-integrations={marianaPath}
                />
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
