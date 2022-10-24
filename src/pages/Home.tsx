import BlockIcon from "../components/icons/BlockIcon";
import CodeIcon from "../components/icons/CodeIcon";
import Socials from "../components/Socials"

function Home() {
  return (
      <div className="flex flex-col justify-center items-center h-screen bg-gradient bg-gradient-to-r from-slate-500 lg:via-slate-500 to-zinc-500 pt-12">
        <img src={require(`../assets/face.webp`)} className="w-48 rounded-lg border-slate-900 border drop-shadow-xl" />
        {/* Intro card */}
        <div className="bg-slate-100 p-5 rounded-lg m-5 opacity-75 border-slate-900 border drop-shadow-xl">
          <h1 className="text-4xl text-center">Jack Dishman</h1>
          <h2 className="text-xl text-center font-semibold pt-2">Frontend Engineer</h2>
          <div className="flex mt-2">
            <span className="mr-2"><CodeIcon /></span>
            <p className="text-slate-900">5+ years of professional experience developing web applications for Startups and Fortune 500 companies.</p>
          </div>
          <div className="flex mt-2 mb-4">
            <span className="mr-2"><BlockIcon /></span>
            <p className="text-slate-900">Subject matter expert in blockchain & peer-to-peer technologies.</p>
          </div>
          <Socials />
        </div>
      </div>
  );
}

export default Home;
