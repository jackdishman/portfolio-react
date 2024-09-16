import React from "react";
import Experience from "../components/Experience";
import AWS from "../components/icons/AWS";
import Ethereum from "../components/icons/Ethereum";
import GraphQL from "../components/icons/GraphQL";
import Handlebars from "../components/icons/Handlebars";
import Javascript from "../components/icons/Javascript";
import NextIcon from "../components/icons/NextIcon";
import PostgresIcon from "../components/icons/PostgresIcon";
import Postman from "../components/icons/Postman";
import Python from "../components/icons/Python";
import ReactIcon from "../components/icons/ReactIcon";
import TailwindIcon from "../components/icons/TailwindIcon";
import TypescriptIcon from "../components/icons/TypescriptIcon";
import VueIcon from "../components/icons/VueIcon";
import Portfolio from "../components/Portfolio";
import Socials from "../components/Socials";
import Web3 from "../components/Web3";
import Whatsgoodly from "../components/Whatsgoodly";

export default function Work() {
  const ethBostonImages: string[] = [
    require("../assets/ethboston.webp"),
    require("../assets/ethboston-stats.png"),
  ];
  const authenticImages: string[] = [
    require("../assets/authentic.png"),
    require("../assets/authentic-2.png"),
  ];

  const rootroopImages: string[] = [
    require("../assets/rootroop.png"),
    require("../assets/rootroop-2.png"),
  ];

  return (
    <div className="p-5 z-0 relative">
      <div className="flex justify-center">
        <Portfolio />
      </div>

      <div className="flex justify-center">
        <Experience
          title="Mobile Application Developer"
          company="iOS Mobile Application"
          link="" // No link provided for this project
          dateRange="Side Project"
          employmentType="Side Project"
          description={[
            "Developed an iOS mobile application with a login and image storage system using React Native and Expo framework with Supabase Postgres databases.",
          ]}
          technologies={
            <>
              <ReactIcon />
              <span className="px-2 text-gray-500">x</span>
              <TypescriptIcon />
              <span className="px-2 text-gray-500">x</span>
              <PostgresIcon />
            </>
          }
        />
      </div>
      <div className="flex justify-center">
        <Experience
          title="Full-Stack Developer"
          company="Real-Estate Application"
          link="https://checkpercentage.com"
          dateRange="Side Project"
          employmentType="Side Project"
          description={[
            "Developed a real-estate application to store MLS agency fee percentages for brokers using Stripe SDK for payments and full-stack Next.js application.",
          ]}
          technologies={
            <>
              <NextIcon />
              <span className="px-2 text-gray-500">x</span>
              <TypescriptIcon />
            </>
          }
        />
      </div>

      <div className="flex justify-center">
        <Experience
          title="Software Engineer"
          company="Tokensoft Inc."
          employmentType="Full-Time"
          link="https://www.tokensoft.io"
          dateRange="January 2024 - July 2024"
          description={[
            "Extended token distribution Solidity contracts to support individual vesting schedules, using in-memory bytes to represent tranches of token unlocks.",
            "Deployed contract subgraphs, GraphQL queries, and Solidity contracts on EVM-compatible blockchains using Foundry/Forge.",
            "Implemented user verification levels by integrating third-party KYC Node.js frameworks for clients to audit identity verification, bolstering defense against AI-generated documents.",
            "Developed client-facing sales reports using React TypeScript components, and resolved 50+ bugs and high-priority issues.",
            "Ran performance diagnostics and benchmark tests using Amazon AWS CloudWatch monitoring. Applied optimizations to increase network performance for high-volume events by configuring AWS Serverless Lambdas rules and warming Lambdas.",
            "Implemented Cloudflare waiting rooms for high-volume events and server-side caching.",
          ]}
          technologies={
            <>
              <ReactIcon />
              <span className="px-2 text-gray-500">x</span>
              <TailwindIcon />
              <span className="px-2 text-gray-500">x</span>
              <PostgresIcon />
              <span className="px-2 text-gray-500">x</span>
              <TypescriptIcon />
              <span className="px-2 text-gray-500">x</span>
              <GraphQL />
              <span className="px-2 text-gray-500">x</span>
              <AWS />
              <span className="px-2 text-gray-500">x</span>
              <Ethereum />
            </>
          }
        />
      </div>

      <div className="flex justify-center">
        <Experience
          title="Full-Stack Developer"
          company="Farcaster Quiz Application & Ethereum Account Explorer"
          link="https://dish.codes"
          dateRange="Side Project"
          employmentType="Side Project"
          description={[
            "Created a comprehensive quiz application and Ethereum account explorer using the Farcaster protocol social graph.",
            "Launched Farcaster Actions and Frames.",
          ]}
          technologies={
            <>
              <Ethereum />
              <span className="px-2 text-gray-500">x</span>
              <NextIcon />
              <span className="px-2 text-gray-500">x</span>
              <TypescriptIcon />
            </>
          }
        />
      </div>

      <div className="flex justify-center">
        <Experience
          title="Founder & Engineer"
          company="Captain's Yacht Club"
          employmentType="Side Project"
          link="https://captainsyacht.club"
          dateRange="January 2024 - Present"
          description={[
            "Captain's Yacht Club is a Boat Registry and Harbor Explorer, built to help boaters find and connect with each other, get inspiration for their vessels, and share their experiences with their boats.",
            "Built an on-chain boat registry using Next.js, TailwindCSS, Supabase, and Solidity contracts deployed on the Base network.",
            "Users can upload boat images to the on-chain registry, query boats registered with the United States Coast Guard, and explore boats around the world.",
          ]}
          images={[require("../assets/captains.png")]}
          technologies={
            <>
              <NextIcon />
              <span className="px-2 text-gray-500">x</span>
              <TypescriptIcon />
              <span className="px-2 text-gray-500">x</span>
              <TailwindIcon />
              <span className="px-2 text-gray-500">x</span>
              <Ethereum />
            </>
          }
        />
      </div>
      <div className="flex justify-center">
        <Experience
          title="Website Developer"
          company="ETHBoston Conference & Hackathon"
          link="https://ethboston.xyz"
          dateRange="Spring 2023"
          employmentType="Side Project"
          description={[
            "Developed the website for ETHBoston, a 3-day hackathon and conference that brings together the Ethereum community to build decentralized applications. The event took place at the Boston Convention Center and was sponsored by the Ethereum Foundation, Consensys, and many other blockchain companies.",
            "The website surpassed 1 million requests and nearly 40,000 unique visitors during the three-day span of the convention.",
            "The website acted as a speaker directory, event schedule, registration portal, sponsor showcase, and ticket purchasing portal.",
          ]}
          images={ethBostonImages}
          technologies={
            <>
              <ReactIcon />
              <span className="px-2 text-gray-500">x</span>
              <TailwindIcon />
            </>
          }
        />
      </div>
      <div className="flex justify-center">
        <Experience
          title="Senior Software Engineer"
          company="Authentic Wallet, Inc."
          link="https://heyauthentic.com"
          dateRange="January 2023 - January 2024"
          employmentType="Full-Time"
          description={[
            "Developed a customer service AI chatbot for Sears, servicing 4+ million homes under warranty using Python, OpenAI, and Weaviate Vector Databases, with integration for SMS text and embedded website applications.",
            "Integrated customer messages with client Snowflake and Microsoft Azure databases, parsing data to match their schemas.",
            "Built infrastructure and custom ERC-721 Solidity contracts for retail brands to deploy, mint, and transfer Certificates of Authenticity for their physical items using React.js, Next.js, TypeScript, TailwindCSS, and PostgreSQL.",
          ]}
          images={authenticImages}
          technologies={
            <>
              <NextIcon />
              <span className="px-2 text-gray-500">x</span>
              <TypescriptIcon />
              <span className="px-2 text-gray-500">x</span>
              <TailwindIcon />
              <span className="px-2 text-gray-500">x</span>
              <PostgresIcon />
              <span className="px-2 text-gray-500">x</span>
              <Python />
            </>
          }
        />
      </div>
      <div className="flex justify-center">
        <Experience
          title="Lead Frontend Engineer"
          company="Capsule Social"
          link="https://capsule.social"
          dateRange="April 2021 - January 2023"
          employmentType="Full-Time"
          description={[
            "Architected and developed the frontend of an open-source, decentralized social media web application and author analytics dashboard using Vue.js, TypeScript, and TailwindCSS.",
            "Managed and hired a global team of 4 developers and designers to produce a robust frontend codebase consisting of 3 repositories and built NPM packages for code reusability.",
            "Handled state management using Vuex, API fetching, authentication, and security audits.",
            "Assembled end-to-end unit tests using Playwright for QA deployment pipelines.",
            "Coordinated with the Lead Backend Engineer to implement decentralized technologies including IPFS, OrbitDB, libp2p, and NEAR Protocol.",
          ]}
          videoSrc={require(`../assets/blogchain/slide1.webm`)} // Optional video
          technologies={
            <>
              <VueIcon />
              <span className="px-2 text-gray-500">x</span>
              <TypescriptIcon />
              <span className="px-2 text-gray-500">x</span>
              <TailwindIcon />
            </>
          }
        />
      </div>
      <div className="flex justify-center">
        <Experience
          title="Website Developer"
          company="Roo Troop Website & Job Marketplace"
          link="https://rootroop.com/"
          dateRange="Fall 2022"
          employmentType="Side Project"
          description={[
            "Developed a website for Roo Troop, an NFT project on the Ethereum network that has traded over 1,000 ETH volume on OpenSea.",
            "Implemented wallet login and interactions for token-gated access, handling transaction signatures using Ethers.js.",
          ]}
          images={rootroopImages}
          technologies={
            <>
              <VueIcon />
              <span className="px-2 text-gray-500">x</span>
              <TailwindIcon />
            </>
          }
        />
      </div>
      <div className="flex justify-center">
        <Web3 />
      </div>
      <div className="flex justify-center">
        <Experience
          title="Sales / Solutions Engineer"
          company="Extole, Inc."
          link="https://extole.com"
          dateRange="September 2020 - April 2021"
          employmentType="Full-Time"
          description={[
            "Prepared custom integration guides and documentation for prospective clients using Postman and JavaScript code.",
            "Advocated for customers' requests for new product features by documenting use cases and missing functionalities.",
            "Created extensions and modifications to internal source code for client customizations using JavaScript.",
            "Presented technical demos to over 30 prospective clients and partners, as well as led implementation sessions.",
          ]}
          technologies={
            <>
              <Javascript />
              <span className="px-2 text-gray-500">x</span>
              <Postman />
            </>
          }
        />
      </div>
      <div className="flex justify-center">
        <Experience
          title="Associate Software Development Engineer"
          company="Publicis Sapient"
          link="https://www.publicissapient.com"
          dateRange="Summer 2018, July 2019 - September 2020"
          employmentType="Full-Time"
          description={[
            "Transformed creative visual mockups into Vue.js components with dynamic TailwindCSS styling and Handlebars.js templates for design teams.",
            "Worked directly with designers and stakeholders to maintain consumer loyalty programs for Altria (Marlboro) with 100,000+ enrolled accounts using Adobe Target and Adobe AEM.",
            "Performed accessibility testing using Mocha.js and Chai.js, bug fixes, and performance enhancements with Node.js, jQuery, and Grunt.js.",
            "Collaborated with client and creatives to finalize project scope and feasibility in an Agile Development Workflow using Scrum principles to maximize business value.",
            "Developed a Component Visualization Tool to improve the efficiency of pre-production testing for style guide and component updates using Vue.js, Vuex, Axios, and TailwindCSS.",
            "Built an office navigation tool using React, Redux, and Contentful to improve culture and communication within the NYC office.",
          ]}
          technologies={
            <>
              <VueIcon />
              <span className="px-2 text-gray-500">x</span>
              <TailwindIcon />
              <span className="px-2 text-gray-500">x</span>
              <ReactIcon />
              <span className="px-2 text-gray-500">x</span>
              <Handlebars />
            </>
          }
        />
      </div>
      <div className="flex justify-center">
        <Whatsgoodly />
      </div>
      <div className="flex justify-center">
        <div className="w-full sm:w-3/4 lg:w-1/2 pt-5 mt-10 border-t border-gray-900">
          <Socials />
        </div>
      </div>
    </div>
  );
}
