import React from "react";
import PageLayout from "../components/layout/PageLayout";

const Schedule = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-sand">
        {/* Header Section */}
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

        {/* Embedded schedule.html using an iframe */}
        <div className="py-8 md:py-20 flex justify-center">
          <iframe
            src="/schedule.html" // Ensure schedule.html is in public/
            className="w-full max-w-4xl h-[800px] border-none"
            title="Schedule"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Schedule;
