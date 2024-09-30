import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const CourseContent = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-6 min-h-[80svh]">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Get Started
        </h1>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            What You'll Learn
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              Fundamentals of digital security and privacy, including common
              threats and vulnerabilities.
            </li>
            <li>
              How to protect personal and organizational data using key
              cybersecurity practices like encryption and firewalls.
            </li>
            <li>
              Explore the security challenges surrounding digital currencies,
              such as blockchain and transaction security.
            </li>
            <li>
              Gain insights into Nigeria’s digital ecosystem, focusing on local
              laws, data protection regulations, and risks.
            </li>
            <li>
              Analyze the security design of digital currency systems,
              specifically Nigeria’s central bank digital currency (CBDC).
            </li>
            <li>
              Learn how to design privacy-preserving solutions for digital
              currency systems while mitigating security risks.
            </li>
          </ul>
        </div>

        <div className="text-center">
          {/* Link to the Learning Path */}
          <Link
            to="/learning-path"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Start Course
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseContent;
