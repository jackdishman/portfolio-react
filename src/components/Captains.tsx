import NextIcon from "./icons/NextIcon";
import TypescriptIcon from "./icons/TypescriptIcon";
import TailwindIcon from "./icons/TailwindIcon";

export default function Captains() {
  return (
    <div className="w-full sm:w-3/4 lg:w-1/2 border-b border-gray-900 mt-12 pb-10">
      <h2 className="text-3xl text-center">Captain&apos;s Yacht Club</h2>
      <p className="mt-3 text-gray-900 text-sm">
        <a
          href="https://captainsyacht.club"
          target="_blank"
          className="underline"
        >
          Captain's Yacht Club
        </a>{" "}
        is a Boat Registry and Harbor Explorer, built to help boaters find and
        connect with each other, get inspiration for their vessels, and share
        their experiences with their boat.
      </p>
      <img
        src={require(`../assets/captains.png`)}
        alt="website image"
        className="my-4"
      />
      <p>Key Features:</p>
      <ul className="list-disc list-inside mt-3 text-gray-900 text-sm">
        <li>
          Upload boat images to an on-chain boat registry{" "}
          <a href="https://basescan.org/address/0x558d8186a2091e9870bac811d5b6a835e59dff3c#readContract">
            Base Contract
          </a>
        </li>
        <li>Query boats registered with the United States Coast Guard</li>
        <li>Explore boats around the world</li>
      </ul>
      <div className="flex justify-center h-6 mt-3">
        <NextIcon />
        <span className="px-2 text-gray-500">x</span>
        <TypescriptIcon />
        <span className="px-2 text-gray-500">x</span>
        <TailwindIcon />
      </div>
    </div>
  );
}
