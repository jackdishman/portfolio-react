import CalendarIcon from "./icons/CalendarIcon";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import TwitterIcon from "./icons/TwitterIcon";

function Socials () {
	return (
		<div className="flex flex-row justify-center">
		<a href="https://github.com/jackdishman" target="_blank" className="mr-4">
			<GithubIcon />
		</a>
		<a href="https://linkedin.com/in/jackdishman" target="_blank" className="mr-4">
			<LinkedinIcon />
		</a>
		<a href="https://twitter.com/jackdishman" target="_blank" className="mr-4">
			<TwitterIcon />
		</a>
		<a href="https://cal.com/jdish/15min" target="_blank">
			<CalendarIcon />
		</a>
	</div>	
	)
}

export default Socials;