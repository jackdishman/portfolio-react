import CalendarIcon from "./icons/CalendarIcon";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import TwitterIcon from "./icons/TwitterIcon";
import SpotifyIcon from "./icons/SpotifyIcon";

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
		<a href="https://open.spotify.com/playlist/2b9uetMT4cgwOoIIOvsX0w?si=c7e88e8545cc4959" target="_blank" className="mr-4">
			<SpotifyIcon />
		</a>
		<a href="https://cal.com/jdish/15min" target="_blank">
			<CalendarIcon />
		</a>
	</div>	
	)
}

export default Socials;