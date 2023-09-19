import NextIcon from "./icons/NextIcon";
import TypescriptIcon from "./icons/TypescriptIcon";
import TailwindIcon from "./icons/TailwindIcon";

export default function Captains() {
	return (
		<div className="w-full sm:w-3/4 lg:w-1/2 border-b border-slate-900 mt-12 pb-10">
			<h2 className="text-3xl text-center">Captain&apos;s Yacht Club</h2>
			<p className="mt-3 text-slate-900 text-sm">
				<a
					href="https://captainsyacht.club"
					target="_blank"
					className="underline">
					Captain's Yacht Club
				</a>{" "}
				is a Boat Registry and Harbor Explorer, built to help boaters find and
				connect with each other, get inspiration for their vessels, and share
				their experiences with their boat.
			</p>
			<div className="flex justify-center h-6 mt-3">
				<NextIcon />
				<span className="px-2 text-slate-500">x</span>
				<TypescriptIcon />
				<span className="px-2 text-slate-500">x</span>
				<TailwindIcon />
			</div>
		</div>
	);
}
