import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "./icons/MenuIcon";
import CloseIcon from "./icons/CloseIcon";
import HeaderDropdown from "./HeaderDropdown";

const Header = () => {
	const [showDropdown, setShowDropdown] = useState(false);

	const handleClick = () => {
		setShowDropdown(!showDropdown);
	};

	window.addEventListener(`click`, (e: Event) => {
		if (!showDropdown) return;
		const target = e.target as HTMLElement | null;
		const parent = target?.parentNode as HTMLElement | null;
		if (
			target?.classList.contains(`menu`) ||
			parent?.classList.contains(`menu`)
		) {
			return;
		}
		handleClick();
	});

	return (
		<div className="relative z-10">
			<header className="w-full px-5 h-12 flex justify-between items-center fixed top-0 bg-gray-900 text-white border-b border-zinc-200 shadow-lg">
				<div className="flex justify-between w-full">
					<div className="flex items-center flex-shrink-0">
						<img
							src={require(`../assets/icon.jpeg`)}
							className="w-6 h-6 rounded-full"
						/>
						<span className="text-zinc-200">Jack's Portfolio</span>
					</div>
					{/* Desktop header */}
					<div className="hidden sm:flex items-center w-full justify-end text-zinc-200">
						<Link to="/" className={`mr-4`}>
							Intro
						</Link>
						<Link to="/dev" className="mr-4">
							Experience
						</Link>
						<Link to="/education" className="">
							Education
						</Link>
					</div>
				</div>
				<div className="text-zinc-200 sm:hidden">
					<button
						className="header-button border rounded"
						onClick={handleClick}>
						{showDropdown ? <CloseIcon /> : <MenuIcon />}
					</button>
				</div>
				<div className="absolute top-12 right-0 sm:hidden">
					{showDropdown && <HeaderDropdown />}
				</div>
			</header>
		</div>
	);
};

export default Header;
