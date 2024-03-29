import BlockIcon from "../components/icons/BlockIcon";
import CodeIcon from "../components/icons/CodeIcon";
import Socials from "../components/Socials";

function Home() {
	return (
		<div className="flex flex-col justify-center items-center h-screen pt-12">
			<img
				src={require(`../assets/face.webp`)}
				className="w-48 rounded-lg border-gray-900 border-2 drop-shadow-xl"
			/>
			{/* Intro card */}
			<div className="bg-gray-300 p-5 rounded-lg m-5 opacity-75 border-gray-900 border-2 drop-shadow-xl">
				<h1 className="text-4xl text-center">Jack Dishman</h1>
				<h2 className="text-xl text-center font-semibold pt-2">
					Full Stack Engineer
				</h2>
				<div className="flex mt-2">
					<span className="mr-2">
						<CodeIcon />
					</span>
					<p className="text-gray-900">
						5+ years of professional experience developing web applications for
						Startups and Fortune 500 companies.
					</p>
				</div>
				<div className="flex mt-2 mb-4">
					<span className="mr-2">
						<BlockIcon />
					</span>
					<p className="text-gray-900">
						Subject matter expert in blockchain & peer-to-peer technologies.
					</p>
				</div>
				<Socials />
			</div>
		</div>
	);
}

export default Home;
