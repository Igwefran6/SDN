import React, { useState, useEffect, useRef } from "react";
import LearningStage from "./LearningStage";
import Footer from "./Footer";
import Header from "./Header";
import Lesson from "./Lesson";
import Icon from "@mdi/react";
import { mdiClose, mdiCog } from "@mdi/js";

const stages = [
  {
    title: "1. Introduction to Digital Security and Privacy",
    description:
      "Learn the fundamental concepts of digital security and privacy in the context of personal and organizational data.",
    steps: [
      "Understand the basics of cybersecurity: threats, vulnerabilities, and risk management.",
      "Explore key concepts of privacy, including data protection and confidentiality.",
      "Learn about common security practices such as encryption, firewalls, and antivirus software.",
    ],
  },
  {
    title: "2. Digital Currency and Its Security Concerns",
    description:
      "Discover the security challenges related to digital currencies and how to address them.",
    steps: [
      "Learn the basics of digital currencies (cryptocurrency, central bank digital currency).",
      "Understand the security issues specific to digital transactions and blockchain technology.",
      "Examine real-world case studies of breaches in digital currency systems.",
    ],
  },
  {
    title: "3. Security and Privacy in Nigeria's Digital Ecosystem",
    description:
      "Understand the unique digital security and privacy challenges within Nigeria's technological landscape.",
    steps: [
      "Explore the current digital security infrastructure in Nigeria.",
      "Learn about Nigeria's data protection laws and regulations (such as NDPR).",
      "Analyze local risks and challenges such as cybercrime and data breaches.",
    ],
  },
  {
    title:
      "4. Analysis and Design of Security and Privacy Issues in Digital Currency",
    description:
      "Delve into the technical aspects of designing secure digital currency systems, specifically in Nigeria.",
    steps: [
      "Analyze the design of Nigeria's central bank digital currency (CBDC) and its security framework.",
      "Explore privacy-preserving technologies for digital currencies.",
      "Evaluate existing solutions and propose improvements to ensure stronger security and privacy protections in digital currencies.",
    ],
  },
];

const LearningPath = () => {
  const pageRef = useRef(null);
  const [resetBtn, setResetBtn] = useState(false);
  const cogOrClose = !resetBtn ? mdiCog : mdiClose;
  const [currentStage, setCurrentStage] = useState(() => {
    const savedStage = localStorage.getItem("currentStage");
    return savedStage !== null ? JSON.parse(savedStage) : 0;
  });

  const [completedStages, setCompletedStages] = useState(() => {
    const savedCompletedStages = localStorage.getItem("completedStages");
    return savedCompletedStages !== null
      ? JSON.parse(savedCompletedStages)
      : [];
  });

  useEffect(() => {
    localStorage.setItem("currentStage", JSON.stringify(currentStage));
  }, [currentStage]);

  useEffect(() => {
    localStorage.setItem("completedStages", JSON.stringify(completedStages));
  }, [completedStages]);

  const markAsComplete = () => {
    setCompletedStages((prev) => {
      if (!prev.includes(currentStage)) {
        return [...prev, currentStage];
      }
      return prev;
    });
  };

  const nextStage = () => {
    if (currentStage < stages.length - 1) {
      setCurrentStage(currentStage + 1);
      scrollToTop();
    }
  };

  const prevStage = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
      scrollToTop();
    }
  };
  const scrollToTop = () => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView();
    }
  };

  return (
    <>
      <Header />
      <div
        className="container mx-auto p-6 min-h-[80svh] relative"
        ref={pageRef}
      >
        <div className="absolute flex no-copy">
          <Icon
            className="cursor-pointer active:scale-75 transition-all"
            path={cogOrClose}
            size="24px"
            onClick={() => setResetBtn((prev) => !prev)}
          />
          {resetBtn && (
            <button
              className="px-4 py-2 bg-green-600 rounded-lg font-semibold text-white m-2 active:scale-95 transition-all"
              onClick={() => {
                if (confirm("Do you really want to reset progress?")) {
                  localStorage.clear();
                  setResetBtn((prev) => !prev);
                } else {
                  setResetBtn((prev) => !prev);
                }
              }}
            >
              Reset progress
            </button>
          )}
        </div>
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Learning Path
        </h1>
        <LearningStage
          title={stages[currentStage].title}
          description={stages[currentStage].description}
          steps={stages[currentStage].steps}
        />{" "}
        <div className="flex justify-between mt-4">
          <button
            onClick={prevStage}
            disabled={currentStage === 0}
            className={`px-4 mb-4 py-2 bg-gray-300 rounded-lg ${
              currentStage === 0 ? "opacity-50" : "hover:bg-gray-400"
            }`}
          >
            Previous
          </button>

          <button
            onClick={nextStage}
            disabled={currentStage === stages.length - 1}
            className={`px-4 mb-4 py-2 bg-blue-500 text-white rounded-lg ${
              currentStage === stages.length - 1
                ? "opacity-50"
                : "hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>
        <Lesson currentStage={currentStage} />
        <div className="flex justify-between mt-4">
          <button
            onClick={prevStage}
            disabled={currentStage === 0}
            className={`px-4 py-2 bg-gray-300 rounded-lg ${
              currentStage === 0 ? "opacity-50" : "hover:bg-gray-400"
            }`}
          >
            Previous
          </button>

          <button
            onClick={nextStage}
            disabled={currentStage === stages.length - 1}
            className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${
              currentStage === stages.length - 1
                ? "opacity-50"
                : "hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>
        <button
          onClick={markAsComplete}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Mark as Complete
        </button>
        <div className="mt-4">
          {completedStages.includes(currentStage) ? (
            <p className="text-green-600">You have completed this stage!</p>
          ) : (
            <p className="text-red-600">This stage is not completed yet.</p>
          )}
        </div>
        <div className="mt-4">
          <p>
            Progress: {completedStages.length}/{stages.length} stages completed
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{
                width: `${(completedStages.length / stages.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LearningPath;
