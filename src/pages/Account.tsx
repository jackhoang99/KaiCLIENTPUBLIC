import React from "react";
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
          <div className="max-w-2xl mx-auto py-8 flex justify-center">
            {/* Embed account.html inside an iframe */}
            <iframe
              src="/account.html" // Ensure this file is inside the public/ folder
              className="w-full max-w-4xl h-[800px] border-none"
              title="Account"
            />
          </div>
        </Container>
      </div>
    </PageLayout>
  );
};

export default Account;
