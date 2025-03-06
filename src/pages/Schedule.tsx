import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "../components/layout/Container";
import PageLayout from "../components/layout/PageLayout";

const TENANT_NAME = "kailagreestudio";

const Schedule = () => {
  const location = useLocation();
  const [integrationKey, setIntegrationKey] = useState(0);
  const [loading, setLoading] = useState(true);

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
  }, [location.search]); // Detects query string changes like `_mt`

  // Debugging: Check if Mariana Tek actually loads
  useEffect(() => {
    const checkMarianaLoaded = setInterval(() => {
      if (window.MarianaIntegrations) {
        clearInterval(checkMarianaLoaded);
        console.log("✅ Mariana Integrations initialized!");
      }
    }, 500);
  }, []);

  // Extract `_mt=` correctly
  const params = new URLSearchParams(location.search);
  const marianaPath = params.get("_mt") || "/schedule/daily";

  return (
    <PageLayout>
      <div className="min-h-screen bg-sand">
        <div className="relative h-[250px] md:h-[400px] w-full">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src="https://static.wixstatic.com/media/8c7d69_35e0e42e65954df7a4e29eea84f728bb~mv2.jpg/v1/fill/w_1202,h_918,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AdobeStock_227531282.jpg"
            alt="Schedule Header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <h1 className="font-display text-5xl md:text-8xl text-white tracking-wider">
              SCHEDULE
            </h1>
          </div>
        </div>

        <div className="py-8 md:py-20">
          <Container>
            <div className="max-w-4xl mx-auto">
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
            </div>
          </Container>
        </div>
      </div>
    </PageLayout>
  );
};

export default Schedule;
