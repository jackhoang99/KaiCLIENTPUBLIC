import React from 'react';
import Container from './layout/Container';
import MissionHeading from './mission/MissionHeading';
import MissionContent from './mission/MissionContent';
import InstructorButton from './mission/InstructorButton';
import PageLayout from './layout/PageLayout';

const Mission = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-sand py-20">
        <Container>
          <MissionHeading />
          <MissionContent />
          <InstructorButton />
        </Container>
      </div>
    </PageLayout>
  );
};

export default Mission;