import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "../components/layout/Container";
import PageLayout from "../components/layout/PageLayout";

const Account = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-sand pt-32 pb-20">
        <Container>
          <h1 className="text-4xl font-display mb-0 text-center">
            YOUR KAI ACCOUNT
          </h1>
          <div className="max-w-2xl mx-auto">
            <iframe
              src="https://kailagreestudio.marianaiframes.com/iframe/account"
              width="100%"
              height="800"
              frameBorder="0"
              allowFullScreen
              title="Account"
            ></iframe>
          </div>
        </Container>
      </div>
    </PageLayout>
  );
};

export default Account;
