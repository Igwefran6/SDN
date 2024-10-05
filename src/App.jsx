import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiLock } from "@mdi/js";

function Tip({ fadeOut, tip, i }) {
  const x = i + "px";
  const y = i + "px";

  return (
    <div
      style={{
        transform: `translate(${x}, ${y})`,
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.5s",
      }}
      className="fixed lg:right-24 lg:bottom-16 p-6 w-72 h-36 bg-white rounded-lg shadow-lg border"
    >
      <h2 className="text-lg font-bold text-gray-800 mb-2">Security Tip</h2>
      <p className="text-gray-600 text-sm">{tip}</p>
    </div>
  );
}

function Home() {
  const [tips, setTips] = useState([]);

  // List of digital security tips
  const securityTips = [
    "Use a password manager to generate and store unique passwords.",
    "Always enable two-factor authentication (2FA).",
    "Don't share personal information on unsecured websites.",
    "Be cautious of phishing emails and messages.",
    "Keep your software and devices up-to-date.",
    "Avoid using public Wi-Fi for sensitive transactions.",
    "Use strong, unique passwords for all accounts.",
    "Monitor your account activity regularly.",
    "Set up account alerts for suspicious transactions.",
    "Use a VPN (Virtual Private Network) on public Wi-Fi.",
    "Disable location services for sensitive apps.",
    "Use encryption for sensitive files and communications.",
    "Regularly back up important data.",
    "Use secure payment methods online (e.g., PayPal).",
    "Verify the authenticity of websites and emails.",
    "Avoid clicking suspicious links or downloads.",
    "Use antivirus software and scan regularly.",
    "Set screen lock timeouts on devices.",
    "Use a firewall to block unauthorized access.",
    "Limit social media sharing to minimize identity theft.",
    "Update your browser and plugins regularly.",
    "Use secure protocols (HTTPS) for online transactions.",
    "Use a reputable security suite for comprehensive protection.",
    "Dispose of sensitive documents securely (shredding).",
    "Be wary of public computer usage for sensitive tasks.",
  ];

  const addRandomTip = () => {
    if (tips.length > 6) return;
    const randomTip =
      securityTips[Math.floor(Math.random() * securityTips.length)];

    // Add the new tip
    setTips((prevTips) => [...prevTips, { tip: randomTip, fadeOut: false }]);

    // Set a timeout to trigger fade-out for the first tip
    const timer = setTimeout(() => {
      setTips((prevTips) => {
        if (prevTips.length > 0) {
          const updatedTips = [...prevTips];
          updatedTips[0].fadeOut = true; // Fade out the oldest tip
          return updatedTips;
        }
        return prevTips;
      });

      // Remove the tip after the fade-out transition (500ms)
      setTimeout(() => {
        setTips((prevTips) => prevTips.slice(1)); // Remove the first tip
      }, 500); // This matches the duration in the fade-out transition
    }, 4000); // Wait 3 seconds before starting the fade-out

    // Cleanup the timer
    return () => clearTimeout(timer);
  };

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
            onClick={addRandomTip}
          >
            <span className="absolute bottom-0 right-1/2 translate-x-1/2 text-sm">
              Click me
            </span>
            <Icon path={mdiLock} size="256px" />
          </div>

          {/* Popup for Security Tips */}
          {tips.map((t, i) => (
            <Tip fadeOut={t.fadeOut} key={i} tip={t.tip} i={i} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
