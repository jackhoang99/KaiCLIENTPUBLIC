import React, { useState, useEffect } from "react";

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    document.cookie = "mtech_session=enabled; path=/; max-age=31536000"; // 1 year
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
    window.location.reload();
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white p-4 flex justify-between items-center">
      <p className="text-sm">
        We use cookies to enhance your experience. By clicking "Accept," you
        agree to our use of cookies.
      </p>
      <button
        onClick={acceptCookies}
        className="bg-white text-black px-4 py-2 rounded"
      >
        Accept Cookies
      </button>
    </div>
  );
};

export default CookieBanner;
