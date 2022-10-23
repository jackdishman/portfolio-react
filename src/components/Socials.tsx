import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import TwitterIcon from "./icons/TwitterIcon";

function Socials () {
	return (
		<div className="flex flex-row justify-center">
		<a href="https://github.com/jackdishman" target="_blank">
			<GithubIcon />
		</a>
		<a href="https://linkedin.com/in/jackdishman" target="_blank" className="mx-4">
			<LinkedinIcon />
		</a>
		<a href="https://twitter.com/jackdishman" target="_blank">
			<TwitterIcon />
		</a>
	</div>	
	)
}

export default Socials;