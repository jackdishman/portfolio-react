import ReactIcon from "./icons/ReactIcon"
import TailwindIcon from "./icons/TailwindIcon";
import TypescriptIcon from "./icons/TypescriptIcon";

const Portfolio = () => {
	return (
		<div className="w-full sm:w-3/4 lg:w-1/2 border-b border-slate-900 mt-12 pb-10">
			<p className="text-slate-900 text-sm text-center">This website is made with React.js and deployed using GitHub Pages. Source code can be viewed <a href="https://github.com/jackdishman/portfolio-react" target="_blank" className="underline text-slate-500">here</a>.</p>
			<div className="flex justify-center h-6 mt-3">
				<ReactIcon />
				<span className="px-2 text-slate-500">x</span>
				<TypescriptIcon />
				<span className="px-2 text-slate-500">x</span>
				<TailwindIcon />
			</div>
		</div>
	)
}

export default Portfolio;