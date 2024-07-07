import React from "react";
import CustomCarousel from "./CustomCarousel";
import ReactIcon from "./icons/ReactIcon";
import TailwindIcon from "./icons/TailwindIcon";

const ethBostonImages: string[] = [
  require("../assets/ethboston.webp"),
  require("../assets/ethboston-stats.png"),
];

export default function EthBoston() {
  return (
    <div className="w-full sm:w-3/4 lg:w-1/2 mt-12">
      <div className="">
        <h2 className="text-3xl text-center">Website Developer</h2>
        <div className="flex justify-between mt-5">
          <a href="https://ethboston.xyz" target="_blank" className="underline">
            ETHBoston Conference & Hackathon
          </a>
          <span className="italic">Spring 2023</span>
        </div>
        <div className="flex justify-center w-full mt-5">
          <CustomCarousel images={ethBostonImages} />
        </div>
        <div className="py-5">
          <div className="text-center mt-2">
            <a
              href="https://www.ethboston.xyz/"
              target="_blank"
              className="text-gray-500 text-sm"
            >
              View Website
            </a>
            <span className="px-2 text-gray-500"> | </span>
            <a
              href="https://github.com/bostondao/ethboston.xyz"
              target="_blank"
              className="text-gray-500 text-sm"
            >
              View source code
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm mt-2 text-gray-900">
            Developed the website for ETHBoston, a 3-day hackathon and
            conference that brings together the Ethereum community to build
            decentralized applications. The event took place at the Boston
            Convention Center and was sponsored by the Ethereum Foundation,
            Consensys, and many other blockchain companies.
          </p>
          <p className="text-sm mt-2 text-gray-900">
            The website surpassed 1 million requests and nearly 40,000 unique
            visitors during the three-day span of the convention.
          </p>
          <p className="text-sm mt-2 text-gray-900">
            The website acted as a speaker directory, event schedule,
            registration portal, sponsor showcase, and ticket purchasing portal.
          </p>
        </div>
        <div className="flex justify-center h-6 mt-3">
          <ReactIcon />
          <span className="px-2 text-gray-500">x</span>
          <TailwindIcon />
        </div>
      </div>
    </div>
  );
}
