import React from "react";
import CustomCarousel from "./CustomCarousel";
import ReactIcon from "./icons/ReactIcon";
import TailwindIcon from "./icons/TailwindIcon";
import PostgresIcon from "./icons/PostgresIcon";

// const tokensoftImages: string[] = [
//   require("../assets/tokensoft-1.png").default,
//   require("../assets/tokensoft-2.png").default,
// ];

export default function Tokensoft() {
  return (
    <div className="w-full sm:w-3/4 lg:w-1/2 border-b border-gray-900 mt-12 pb-10">
      <h2 className="text-3xl text-center">Software Engineer</h2>
      <div className="flex justify-between mt-5">
        <a
          href="https://www.tokensoft.io"
          target="_blank"
          className="underline"
        >
          Tokensoft Inc.
        </a>
        <span className="italic">January 2024 - July 2024</span>
      </div>
      {/* <div className="flex justify-center w-full mt-5">
        <CustomCarousel images={tokensoftImages} />
      </div> */}
      <div className="py-5">
        <ul className="list-disc list-inside mt-3 text-gray-900 text-sm">
          <li>
            Enhanced Identity Screening: Implemented user verification levels by
            integrating third-party KYC frameworks for clients, bolstering
            defenses against AI-generated documents and enhanced customization.
          </li>
          <li>
            Customized Token Vesting: Extended token distribution contracts to
            support individual vesting schedules, using in-memory bytes to
            represent tranches of token unlocks.
          </li>
          <li>
            Blockchain Contract Deployments: Deployed subgraphs and contracts to
            track sale purchases and owner events on major EVM-compatible L1 &
            L2 blockchains.
          </li>
          <li>
            Efficient Issue Resolution: Managed and resolved over 50 bugs and
            high-priority issues in the production system with speed and
            efficiency.
          </li>
          <li>
            Sales Reporting: Developed in-app sales reports, providing clients
            with critical information about purchasers and their KYC status.
          </li>
          <li>
            Team Integration: Joined during the offboarding of the previous
            engineering team and successfully onboarded two new developers.
          </li>
        </ul>
        <div className="flex justify-center h-6 mt-3">
          <ReactIcon />
          <span className="px-2 text-gray-500">x</span>
          <TailwindIcon />
          <span className="px-2 text-gray-500">x</span>
          <PostgresIcon />
          <span className="px-2 text-gray-500">x</span>
          {/* <SolidityIcon />
          <span className="px-2 text-gray-500">x</span>
          <GraphQLIcon />
          <span className="px-2 text-gray-500">x</span>
          <HardhatIcon />
          <span className="px-2 text-gray-500">x</span>
          <AWSIcon /> */}
        </div>
      </div>
    </div>
  );
}
