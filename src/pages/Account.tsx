import React, { useEffect } from "react";
import Container from "../components/layout/Container";
import PageLayout from "../components/layout/PageLayout";

const Account = () => {
  useEffect(() => {
    const TENANT_NAME = 'kailagreestudio.sandbox';
    const scripts = ['polyfills', 'js'];
    
    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = `https://${TENANT_NAME}.marianaiframes.com/${src}`;
      script.setAttribute('data-timestamp', String(new Date().getTime()));
      document.body.appendChild(script);
    });

    return () => {
      const scripts = document.querySelectorAll('script[src*="marianaiframes.com"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <PageLayout>
      <div className="min-h-screen bg-sand pt-32 pb-20">
        <Container>
          <h1 className="text-4xl font-display mb-0 text-center">
            YOUR KAI ACCOUNT
          </h1>
          <div className="max-w-2xl mx-auto py-8 flex justify-center">
            <div 
              data-mariana-integrations="/account"
              className="w-full max-w-4xl h-[800px]"
            />
          </div>
        </Container>
      </div>
    </PageLayout>
  );
};

export default Account;
