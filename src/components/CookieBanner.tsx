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
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div
        className="bg-white text-black p-4 md:p-6 rounded-lg shadow-lg text-center 
                      w-11/12 md:max-w-md md:w-auto"
      >
        {" "}
        {/* Mobile: Smaller width, Desktop: Auto */}
        <p className="text-sm md:text-lg font-medium">
          {" "}
          {/* Smaller text on mobile */}
          We use cookies to enhance your experience. By clicking "Accept," you
          agree to our use of cookies.
        </p>
        <button
          onClick={acceptCookies}
          className="mt-3 md:mt-4 bg-black text-white px-4 py-2 md:px-6 md:py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Accept Cookies
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
