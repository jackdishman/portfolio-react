import TailwindIcon from "./icons/TailwindIcon";
import TypescriptIcon from "./icons/TypescriptIcon";
import VueIcon from "./icons/VueIcon";

export const Blogchain = () => {
  return (
    <div className="w-full sm:w-3/4 lg:w-1/2 mt-12">
      {/* Capsule Social x Blogchain */}
      <div className="">
        <h2 className="text-3xl text-center">Lead Frontend Engineer</h2>
        <div className="flex justify-between mt-5">
          <a
            href="https://capsule.social"
            target="_blank"
            className="underline"
          >
            Capsule Social
          </a>
          <span className="italic">April 2021 - January 2023</span>
        </div>
        {/* Logo */}
        <div className="flex justify-center h-12 mt-5">
          <img src={require(`../assets/blogchain/logo.jpeg`)} />
        </div>
        {/* Video */}
        <div className="py-5">
          <video
            className="rounded-lg shadow-lg"
            autoPlay={true}
            loop={true}
            controls={false}
            playsInline
            muted
          >
            <source
              src={require(`../assets/blogchain/slide1.webm`)}
              type="video/webm"
            />
          </video>
          <div className="text-center mt-2">
            <a
              href="https://blogchain.app/id/dish"
              target="_blank"
              className="text-gray-500 text-sm"
            >
              View my Profile
            </a>
            <span className="px-2 text-gray-500"> | </span>
            <a
              href="https://github.com/capsulesocial"
              target="_blank"
              className="text-gray-500 text-sm"
            >
              View source code
            </a>
          </div>
        </div>
        {/* Job Description */}
        <div>
          <p className="text-sm mt-2 text-gray-900">
            As the first full-time employee, I was responsible for building out
            the Engineering team, setting company culture, and acted as the
            Technical Expert on investment calls with Venture Capitalists.
          </p>
          <p className="text-sm mt-2 text-gray-900">
            We built Blogchain.app, a social media blogging platform, where
            authors and independent journalists could post articles for free and
            earn revenue via monthly subscriptions from readers. All content is
            stored on peer-to-peer technolgies, including IPFS and OrbitDB,
            whereas account data and delisting content is all transparently
            recorded via Smart Contracts on NEAR Protcol.
          </p>
          <p className="text-sm mt-2 text-gray-900">
            I architected and developed the frontend web application while
            delegating tasks to our Frontend team of 4+ employees.
          </p>
          <p className="text-sm mt-2 text-gray-900">
            The complex web app consisted of a shared NPM package for code
            reusability, two separate repositiories for the social media app and
            author analytics dashboard.
          </p>
          <p className="text-sm mt-2 text-gray-900">
            I was responsible for the product roadmap and organizing team
            meetings for our international team that worked asynchronously.
          </p>
        </div>
        {/* Technologies */}
        <div className="flex justify-center h-6 mt-3">
          <VueIcon />
          <span className="px-2 text-gray-500">x</span>
          <TypescriptIcon />
          <span className="px-2 text-gray-500">x</span>
          <TailwindIcon />
        </div>
        {/* Press */}
        <div>
          <h4 className="text-xl my-5">Press:</h4>
          <div className="flex flex-col sm:flex-row">
            {/* Podcast */}
            <div className="items-center mt-3 sm:w-96">
              <p className="text-gray-500 tex-sm text-center italic">
                Podcast Guest
              </p>
              <a
                className="flex justify-center"
                href="https://podcasts.apple.com/us/podcast/blogchain-decentralized-blogging-platform-built-on/id1607956235?i=1000583154222"
                target="_blank"
              >
                <img
                  src={require(`../assets/blogchain/ready-layer-one.jpeg`)}
                  className="w-full rounded-lg shadow-lg"
                />
              </a>
            </div>
            {/* Speaker at NEARCON 2022 */}
            <div className="items-center mt-3 sm:w-96 sm:mx-4">
              <p className="text-gray-500 tex-sm text-center italic">
                Speaker @ NEARCON 2022
              </p>
              <iframe
                className="w-full"
                src="https://www.youtube-nocookie.com/embed/Khn7zX7ZtqI?start=3194"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
              ></iframe>
            </div>
            {/* NEAR twitter spaces */}
            <div className="items-center sm:w-96 mt-3">
              <a
                href="https://twitter.com/NEARProtocol/status/1567212597514063890"
                target="_blank"
              >
                <p className="text-gray-500 tex-sm text-center italic">
                  Twitter Space with NEAR
                </p>
                <img
                  src={require(`../assets/blogchain/twitter-space.jpeg`)}
                  className="w-full rounded-lg shadow-lg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogchain;
