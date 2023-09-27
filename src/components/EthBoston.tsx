import ReactIcon from "./icons/ReactIcon";
import TailwindIcon from "./icons/TailwindIcon";
import { Carousel } from "@material-tailwind/react";

export default function EthBoston() {
	return (
		<div className="w-full sm:w-3/4 lg:w-1/2">
			<div className="pt-5">
				<h2 className="text-3xl text-center">Website Developer</h2>
				<div className="flex justify-between mt-5">
					<a href="https://ethboston.xyz" target="_blank" className="underline">
						ETHBoston Conference & Hackathon
					</a>
					<span className="italic">Spring 2023</span>
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
							src={require(`../assets/ethboston.webp`)}
							className="h-full w-full object-cover"
						/>
						<img
							src={require(`../assets/ethboston-stats.png`)}
							className="h-full w-full object-cover"
						/>
					</Carousel>
				</div>
				<div className="py-5">
					<div className="text-center mt-2">
						<a
							href="https://www.ethboston.xyz/"
							target="_blank"
							className="text-gray-500 text-sm">
							View Website
						</a>
						<span className="px-2 text-gray-500"> | </span>
						<a
							href="https://github.com/bostondao/ethboston.xyz"
							target="_blank"
							className="text-gray-500 text-sm">
							View source code
						</a>
					</div>
				</div>
				{/* Job Description */}
				<div>
					<p className="text-sm mt-2 text-gray-900">
						Developed the website for ETHBoston, a 3-day hackathon and
						conference that brings together the Ethereum community to build
						decentralized applications. The event took place at the Boston
						Convention Center and was sponsored by the Ethereum Foundation,
						Consensys, and many other blockchain companies.
					</p>
					<p className="text-sm mt-2 text-gray-900">
						The website surpassed 1 million requests and nearly 40,000 unique
						visitors during the three-day span of the convention.
					</p>
					<p className="text-sm mt-2 text-gray-900">
						The website acted as a speaker directory, event schedule,
						registration portal, sponsor showcase, and ticket purchasing portal.
					</p>
				</div>
				{/* Technologies */}
				<div className="flex justify-center h-6 mt-3">
					<ReactIcon />
					<span className="px-2 text-gray-500">x</span>
					<TailwindIcon />
				</div>
			</div>
		</div>
	);
}
