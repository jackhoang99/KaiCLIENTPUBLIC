import React from 'react';
import { colors } from '../../constants/colors';

const MissionHeading = () => {
  return (
    <h2 
      className="text-3xl sm:text-4xl md:text-8xl font-display mb-12 md:mb-20 leading-tight tracking-wider px-4 md:px-0 mt-12 md:mt-20"
      style={{ color: colors.darkBrown }}
    >
      "REDEFINE<br />
      YOUR<br />
      LIFESTYLE"
    </h2>
  );
};

export default MissionHeading;