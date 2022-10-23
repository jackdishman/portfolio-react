import { Link } from "react-router-dom"

const HeaderDropdown = () => {
	return (
		<div className="bg-black text-zinc-200 flex flex-col rounded-bl-xl shadow-lg">
			<Link to="/" className="px-5 py-2 border-b border-zinc-200 border-l">Intro</Link>
			<Link to="/dev" className="px-5 py-2 border-b border-zinc-200 border-l">Experience</Link>
			<Link to="/education" className="rounded-bl-xl border-l border-b border-zinc-200 p-2">Education</Link>
		</div>
	)
}

export default HeaderDropdown;