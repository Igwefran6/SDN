import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiLock } from "@mdi/js";

function Home() {
  const [showPopup, setShowPopup] = useState(false); // State for showing the popup
  const [tip, setTip] = useState(""); // State for the current tip
  const [fadeOut, setFadeOut] = useState(false); // State for fade-out animation

  // List of digital security tips
  const securityTips = [
    "Use a password manager to generate and store unique passwords.",
    "Always enable two-factor authentication (2FA).",
    "Don't share personal information on unsecured websites.",
    "Be cautious of phishing emails and messages.",
    "Keep your software and devices up-to-date.",
    "Avoid using public Wi-Fi for sensitive transactions.",
  ];

  // Function to display a random security tip
  const showRandomTip = () => {
    const randomTip =
      securityTips[Math.floor(Math.random() * securityTips.length)];
    setTip(randomTip); // Set new random tip
    setFadeOut(false); // Reset fade-out effect
    setShowPopup(true); // Show the popup

    // Set a timer to fade out the popup after 5 seconds
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out effect
      setTimeout(() => setShowPopup(false), 500); // Remove popup after fade-out
    }, 5000);

    // Clear the timer when the component is unmounted or popup is shown again
    return () => clearTimeout(timer);
  };

  // Trigger tip popup on lock icon click
  useEffect(() => {
    if (showPopup) {
      const cleanup = showRandomTip(); // Call the function
      return cleanup; // Ensure timer cleanup happens
    }
  }, [showPopup]);

  return (
    <div className="h-[100svh] flex flex-col bg-[url('/images/sdn.png')] bg-cover no-copy ">
      <Header backgroundColor="bg-transparent" />
      <div className="flex flex-col gap-2 flex-1 p-6 lg:px-24">
        <h2 className="text-white text-6xl max-md:text-4xl max-w-96 font-bold drop-shadow-xl">
          Empowering You to Stay Safe in a Digital World
        </h2>
        <h3 className="text-slate-950 max-md:text-2xl max-lg:text-xl max-sm:text-base max-w-96 font-semibold drop-shadow-2xl">
          Your ultimate guide to protecting your digital identity and securing
          your online transactions in Nigeria.
        </h3>
        <Link
          to="/get-started"
          className="text-white text-3xl max-md:text-2xl max-sm:text-xl font-bold bg-slate-800 w-fit p-4 rounded-2xl hover:bg-slate-700 active:scale-105 transition-all"
        >
          Get Started
        </Link>
        <div>
          {/* Lock Icon */}
          <div
            className="fixed right-24 bottom-1/2 max-md:bottom-72 max-md:-right-24 translate-y-1/2 shake cursor-pointer active:scale-90 transition-all"
            onClick={() => setShowPopup(true)}
          >
            <Icon path={mdiLock} size="256px" />
          </div>

          {/* Popup for Security Tips */}
          {showPopup && (
            <div
              className={`fixed lg:right-24 lg:bottom-16 p-6 w-72 bg-white rounded-lg shadow-lg transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              }`}
            >
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                Security Tip
              </h2>
              <p className="text-gray-600">{tip}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
