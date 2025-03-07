import React from "react";
import { motion } from "framer-motion";
import Container from "../components/layout/Container";
import PageLayout from "../components/layout/PageLayout";

const Buy = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-sand">
        <div className="pt-32 pb-20">
          <Container>
            <motion.div
              className="mb-16 relative text-center md:text-left md:pl-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-4xl md:text-8xl tracking-wider mb-6">
                BOOK YOUR
                <br />
                EXPERIENCE
              </h1>
              <p className="text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto md:mx-0">
                Transform your fitness journey with our signature Lagree method
                classes. Choose the package that best fits your lifestyle.
              </p>
              {/* Background Decorations */}
              <div className="absolute -right-20 top-0 w-40 h-40 bg-black/5 rounded-full blur-3xl -z-10" />
              <div className="absolute -left-20 bottom-0 w-40 h-40 bg-black/5 rounded-full blur-3xl -z-10" />
            </motion.div>

            {/* Embed buy.html inside an iframe */}
            <div className="mt-20 max-w-4xl mx-auto">
              <iframe
                src="/buy.html" // Ensure this file is inside the public/ folder
                className="w-full max-w-4xl h-[800px] border-none"
                title="Buy"
              />
            </div>
          </Container>
        </div>
      </div>
    </PageLayout>
  );
};

export default Buy;
