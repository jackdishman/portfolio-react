import { Component } from "react";
import MenuIcon from "./icons/MenuIcon";
import CloseIcon from "./icons/CloseIcon"
import HeaderDropdown from './HeaderDropdown'
import { Link } from "react-router-dom"
interface HeaderProps {
	title: string
}

interface HeaderState {
	showDropdown: boolean
}

class Header extends Component<HeaderProps, HeaderState> {
	constructor(props: HeaderProps){
		super(props)
		this.state = {
			showDropdown: false,
		}
    this.handleClick = this.handleClick.bind(this);
		window.addEventListener(`click`, (e: Event) => {
			if(!this.state.showDropdown) return
			const target = e.target as HTMLElement | null
			const parent = target?.parentNode as HTMLElement | null
			if(target?.classList.contains(`menu`) || parent?.classList.contains(`menu`)){
				return
			}
			this.handleClick()
		})
	}
  public static defaultProps = {
    title: `Jack's Portfolio`,
  }

	handleClick(){
		this.setState((previousState, props) => ({
			showDropdown: !previousState.showDropdown
		}))
	}

	render() {
		const showDropdown = this.state.showDropdown
		let button;
		if(showDropdown) {
			button = <CloseIcon />
		} else {
			button = <MenuIcon />
		}
		return (
			<div className="relative z-10">
				<header className="w-full px-5 h-12 flex justify-between items-center fixed top-0 bg-black border-b border-zinc-200 shadow-lg">
					<div className="flex justify-between w-full">
						<div className="flex items-center flex-shrink-0">
							<img src={require(`../assets/icon.jpeg`)} className="w-6 h-6 rounded-full" />
							<span className="text-zinc-200">{this.props.title}</span>
						</div>
						{/* Desktop header */}
						<div className="hidden sm:flex items-center w-full justify-end text-zinc-200">
							<Link to="/" className={`mr-4`}>Intro</Link>
							<Link to="/dev" className="mr-4">Experience</Link>
							<Link to="/education" className="">Education</Link>
						</div>
					</div>
					<div className="text-zinc-200 sm:hidden">
						<button className="header-button border rounded" onClick={this.handleClick}>
							{button}
						</button>
					</div>
					<div className="absolute top-12 right-0 sm:hidden">
						{showDropdown ? <HeaderDropdown /> : <div></div>}
					</div>
				</header>
			</div>
		);
	}
}

export default Header;
