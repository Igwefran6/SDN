import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-[100svh] flex flex-col bg-[url('/images/sdn.png')] bg-cover">
      <Header backgroundColor="bg-transparent" />
      <div className="flex flex-col gap-2 flex-1 p-6">
        <h2 className="text-white text-6xl max-md:text-4xl max-w-96 font-bold drop-shadow-xl">
          Empowering You to Stay Safe in a Digital World
        </h2>
        <h3 className="text-slate-950 max-md:text-2xl max-lg:text-xl max-sm:text-base max-w-96 font-semibold drop-shadow-2xl">
          Your ultimate guide to protecting your digital identity and securing
          your online transactions in Nigeria.
        </h3>
        <Link className="text-white text-3xl max-md:text-2xl max-sm:text-xl font-bold bg-slate-800 w-fit p-4 rounded-2xl hover:bg-slate-700 active:scale-105 transition-all">
          Get Started
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
