import { Carousel } from "@material-tailwind/react";
import TailwindIcon from "./icons/TailwindIcon";
import VueIcon from "./icons/VueIcon";

export default function Rootroop() {
	return (
		<div className="w-full sm:w-3/4 lg:w-1/2">
			<div className="pt-5 mt-10 border-t border-gray-900">
				<h2 className="text-3xl text-center">Website Developer</h2>
				<div className="flex justify-between mt-5">
					<a href="https://ethboston.xyz" target="_blank" className="underline">
						Roo Troop Website & Job Marketplace
					</a>
					<span className="italic">Fall 2022</span>
				</div>
				{/* Logo */}
				<div className="flex justify-center w-full mt-5">
					<Carousel
						transition={{ duration: 2 }}
						className="rounded-xl"
						nonce={undefined}
						onResize={undefined}
						onResizeCapture={undefined}>
						<img
							src={require(`../assets/rootroop.png`)}
							className="h-full w-full object-cover"
						/>
						<img
							src={require(`../assets/rootroop-2.png`)}
							className="h-full w-full object-cover"
						/>
					</Carousel>
				</div>
				<div className="py-5">
					<div className="text-center mt-2">
						<a
							href="https://rootroop.com/"
							target="_blank"
							className="text-gray-500 text-sm">
							View Website
						</a>
						<span className="px-2 text-gray-500"> | </span>
						<a
							href="https://github.com/jackdishman/rootroop"
							target="_blank"
							className="text-gray-500 text-sm">
							View source code
						</a>
					</div>
				</div>
				{/* Job Description */}
				<div>
					<p className="text-sm mt-2 text-gray-900">
						Developed website for Roo Troop, an NFT project on the Ethereum
						network that has traded over 1,000 ETH volume on OpenSea. Website
						included wallet login, interactions for token-gated access, and
						handling transaction signatures using Ethers.js
					</p>
				</div>
				{/* Technologies */}
				<div className="flex justify-center h-6 mt-3">
					<VueIcon />
					<span className="px-2 text-gray-500">x</span>
					<TailwindIcon />
				</div>
			</div>
		</div>
	);
}
