import React from "react";
import CustomCarousel from "./CustomCarousel";
import NextIcon from "./icons/NextIcon";
import TypescriptIcon from "./icons/TypescriptIcon";
import TailwindIcon from "./icons/TailwindIcon";
import PostgresIcon from "./icons/PostgresIcon";

const authenticImages: string[] = [
  require("../assets/authentic.png"),
  require("../assets/authentic-2.png"),
];

export default function Authentic() {
  return (
    <div className="w-full sm:w-3/4 lg:w-1/2 border-t border-b border-gray-900 mt-12 py-10">
      <h2 className="text-3xl text-center">Senior Software Engineer</h2>
      <div className="flex justify-center w-full mt-5">
        <CustomCarousel images={authenticImages} />
      </div>
      <div className="flex justify-between mt-5">
        <a
          href="https://heyauthentic.com"
          target="_blank"
          className="underline"
        >
          Authentic Wallet, Inc.
        </a>
        <span className="italic">January 2023 - Present</span>
      </div>
      <p className="mt-3 text-gray-900 text-sm">
        As the sole Engineer at Authentic, I developed a web application that
        allows brands to issue Certificates of Authenticity using customized
        ERC-721 contracts (NFTs). I migrated their existing contracts to save on
        gas fees and fixed critical security concerns with their contract
        architecture and database structure. Using a blend of on-chain analytics
        and PostgreSQL database queries, I built a dashboard that allows brands
        to view the status of their NFTs and the activity of their customers.
      </p>
      <p className="mt-3 text-gray-900 text-sm">
        After running into stagnant sales leads, I architected a consumer-facing
        web application to link physical products with digital counterparts
        using NFC & QR code technologies. This application allows brands to
        create a unique digital identity for each of their products, and allows
        customers to view the history of their product and verify its
        authenticity.
      </p>
      <div className="flex justify-center h-6 mt-3">
        <NextIcon />
        <span className="px-2 text-gray-500">x</span>
        <TypescriptIcon />
        <span className="px-2 text-gray-500">x</span>
        <TailwindIcon />
        <span className="px-2 text-gray-500">x</span>
        <PostgresIcon />
      </div>
    </div>
  );
}
