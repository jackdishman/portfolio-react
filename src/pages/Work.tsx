import Authentic from "../components/Authentic";
import Blogchain from "../components/Blogchain";
import Captains from "../components/Captains";
import EthBoston from "../components/EthBoston";
import Extole from "../components/Extole";
import Portfolio from "../components/Portfolio";
import Rootroop from "../components/Rootroop";
import Sapient from "../components/Sapient";
import Socials from "../components/Socials";
import Tokensoft from "../components/Tokensoft";
import Web3 from "../components/Web3";
import Whatsgoodly from "../components/Whatsgoodly";

export default function Work() {
  return (
    <div className="p-5 z-0 relative">
      <div className="flex justify-center">
        <Portfolio />
      </div>
      <div className="flex justify-center">
        <Captains />
      </div>
      <div className="flex justify-center">
        <Tokensoft />
      </div>
      <div className="flex justify-center">
        <EthBoston />
      </div>
      <div className="flex justify-center">
        <Authentic />
      </div>
      <div className="flex justify-center">
        <Blogchain />
      </div>
      <div className="flex justify-center">
        <Rootroop />
      </div>
      <div className="flex justify-center">
        <Web3 />
      </div>
      <div className="flex justify-center">
        <Extole />
      </div>
      <div className="flex justify-center">
        <Sapient />
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
