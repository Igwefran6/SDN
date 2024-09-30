import Icon from "@mdi/react";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";

const About = () => {
  return (
    <div className="flex flex-col bg-[url('/images/sdn.png')] bg-cover no-copy ">
      <Header />
      <div className="mx-auto p-6  shadow-2xl bg-slate-800 text-gray-200 lg:pr-64 lg:px-24">
        {/* <div className="p-2 border-2 mt-2 mb-4 bg-blue-500 dark:bg-gray-900 hover:bg-gray-700 w-24">
          <Link to="/">
            <Icon className="text-white" path={mdiArrowLeft} size="24px" />
          </Link>
        </div> */}
        <div className="container mx-auto p-4 pt-6 mt-10 rounded ">
          <h1 className="text-3xl font-bold  mb-4">
            Welcome to SecuredigiNaija (SDN)
          </h1>

          <p className="text-lg mb-8">
            Empowering You to Stay Safe in a Digital World
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className=" p-6 rounded shadow-2xl">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg ">
                To bridge the knowledge gap in digital security and privacy,
                Securediginaija (SDN) aims to foster a culture of responsible
                innovation while safeguarding Nigeria's digital landscape. In
                today's interconnected world, understanding the intricacies of
                digital security is essential for protecting personal and
                organizational assets against evolving threats.
              </p>
              <br />
              <p>
                At SDN, we believe that education is the cornerstone of a secure
                digital environment.
              </p>
            </div>

            <div className="p-6 rounded shadow-2xl">
              <h2 className="text-2xl font-bold  mb-4">What We Offer</h2>
              <ul className="list-disc pl-4 text-lg ">
                <li>
                  Interactive Courses: Engaging tutorials on digital security,
                  privacy, and cryptocurrency best practices
                </li>
                <li>
                  Expert Insights: Regular updates from renowned security
                  experts and researchers
                </li>
                <li>
                  Resource Library: Access to relevant research papers,
                  articles, and industry reports
                </li>
                <li>
                  Community Forum: Connect with peers, ask questions, and share
                  experiences
                </li>
                <li>
                  News and Updates: Stay informed on the latest digital security
                  and privacy developments in Nigeria
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Who Should Join</h2>
            <ul className="list-disc pl-4 text-lg ">
              <li>Individuals concerned about digital privacy and security</li>
              <li>Businesses handling sensitive customer data</li>
              <li>Developers and innovators in the digital currency space</li>
              <li>Policy makers and regulators</li>
              <li>Anyone interested in staying safe online</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
