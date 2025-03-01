import React from 'react';
import { colors } from '../../constants/colors';

const MissionContent = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-20 mb-12 md:mb-20 max-w-4xl px-4 md:px-0" style={{ color: colors.darkBrown }}>
      <p className="text-base md:text-lg leading-relaxed mb-8 md:mb-0">
        At KAI, we're redefining everyday living through transformative fitness. Our mission is to create spaces that inspire everyone, from beginners to seasoned athletes to challenge themselves and reach their fullest potential. With a focus on inclusivity and innovation, each KAI studio is designed to make fitness accessible, enjoyable, and impactful for all.
      </p>
      <p className="text-base md:text-lg leading-relaxed">
        Our first concept, KAI Lagree Studio, embodies this vision. Specializing in the Lagree method, we offer a workout that seamlessly integrates strength and endurance. Join us to experience a unique approach to fitness that supports your journey toward a stronger, healthier self.
      </p>
    </div>
  );
};

export default MissionContent;