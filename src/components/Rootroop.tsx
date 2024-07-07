import React from "react";
import CustomCarousel from "./CustomCarousel";
import TailwindIcon from "./icons/TailwindIcon";
import VueIcon from "./icons/VueIcon";

const rootroopImages: string[] = [
  require("../assets/rootroop.png"),
  require("../assets/rootroop-2.png"),
];

export default function Rootroop() {
  return (
    <div className="w-full sm:w-3/4 lg:w-1/2 mt-12">
      <div className="border-t border-gray-900 pt-10">
        <h2 className="text-3xl text-center">Website Developer</h2>
        <div className="flex justify-between mt-5">
          <a href="https://ethboston.xyz" target="_blank" className="underline">
            Roo Troop Website & Job Marketplace
          </a>
          <span className="italic">Fall 2022</span>
        </div>
        <div className="flex justify-center w-full mt-5">
          <CustomCarousel images={rootroopImages} />
        </div>
        <div className="py-5">
          <div className="text-center mt-2">
            <a
              href="https://rootroop.com/"
              target="_blank"
              className="text-gray-500 text-sm"
            >
              View Website
            </a>
            <span className="px-2 text-gray-500"> | </span>
            <a
              href="https://github.com/jackdishman/rootroop"
              target="_blank"
              className="text-gray-500 text-sm"
            >
              View source code
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm mt-2 text-gray-900">
            Developed website for Roo Troop, an NFT project on the Ethereum
            network that has traded over 1,000 ETH volume on OpenSea. Website
            included wallet login, interactions for token-gated access, and
            handling transaction signatures using Ethers.js
          </p>
        </div>
        <div className="flex justify-center h-6 mt-3">
          <VueIcon />
          <span className="px-2 text-gray-500">x</span>
          <TailwindIcon />
        </div>
      </div>
    </div>
  );
}
