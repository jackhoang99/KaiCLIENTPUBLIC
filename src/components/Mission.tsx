import React from 'react';
import Container from './layout/Container';
import MissionHeading from './mission/MissionHeading';
import MissionContent from './mission/MissionContent';
import InstructorButton from './mission/InstructorButton';

const Mission = () => {
  return (
    <div className="bg-sand py-4">
      <Container>
        <MissionHeading />
        <MissionContent />
        <InstructorButton />
      </Container>
    </div>
  );
};

export default Mission;