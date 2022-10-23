import { Link } from "react-router-dom"

const HeaderDropdown = () => {
	return (
		<div className="bg-black text-zinc-200 flex flex-col rounded-bl-xl shadow-lg">
			<Link to="/" className="px-5 py-2 border-b border-zinc-200 border-l">Welcome</Link>
			<Link to="/dev" className="px-5 py-2 border-b border-zinc-200 border-l">Experience</Link>
			<Link to="/about" className="rounded-bl-xl border-l border-b border-zinc-200 p-2">last item</Link>
		</div>
	)
}

export default HeaderDropdown;