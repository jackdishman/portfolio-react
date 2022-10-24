import Blogchain from "../components/Blogchain";
import Extole from "../components/Extole";
import Portfolio from "../components/Portfolio";
import Sapient from "../components/Sapient";
import Socials from "../components/Socials";
import Web3 from "../components/Web3";
import Whatsgoodly from "../components/Whatsgoodly";

export default function Work() {
	return (
		<div className="p-5">
			<div className="flex justify-center">
				<Portfolio />
			</div>
			<div className="flex justify-center">
				<Blogchain />
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
				<div className="w-full sm:w-3/4 lg:w-1/2 pt-5 mt-10 border-t border-slate-900">
					<Socials />
				</div>
			</div>
		</div>
	)
}
