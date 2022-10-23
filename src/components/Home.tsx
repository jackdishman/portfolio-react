function Home() {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center h-screen bg-gradient bg-gradient-to-r from-slate-500 lg:via-slate-500 to-zinc-500 ">
        <img src={require(`../assets/face.png`)} className="w-48 rounded-lg border-slate-900 border drop-shadow-xl" />
        <div className="bg-slate-100 p-5 rounded-lg m-5 opacity-75 border-slate-900 border drop-shadow-xl">
          <h1 className="text-4xl text-center">Jack Dishman</h1>
          <h2 className="text-xl text-center font-semibold pt-2">Frontend Engineer</h2>
          <p className="text-center pt-2">Experience working with Startups, Fortune 500 companies, and Web3 (blockchain / peer-to-peer) technologies.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
