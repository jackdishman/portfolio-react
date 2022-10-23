import Blogchain from "../components/Blogchain";
import Extole from "../components/Extole";
import Sapient from "../components/Sapient";
import Socials from "../components/Socials";
import Web3 from "../components/Web3";
import Whatsgoodly from "../components/Whatsgoodly";

export default function Work() {
	return (
		<div className="p-5">
			<Blogchain />
			<Web3 />
			<Extole />
			<Sapient />
			<Whatsgoodly />
			<div className="pt-5 mt-10 border-t border-slate-900">
				<Socials />
			</div>
		</div>
	)
}
