const Web3 = () => {
	return (
		<>
		<div className="pt-5 mt-10 border-t border-slate-900">
			<h2 className="text-3xl text-center">Blockchain // Smart Contract Developer</h2>
			<div className="flex justify-between mt-5">
				<span className="underline">Freelance</span>
				<span className="italic">June 2021 - Present</span>
			</div>
			{/* Smart contract deployer */}
			<p className="mt-5 text-slate-900 text-sm">Built an Ethereum smart contract deployer that compiles Solidity code into EVM-readable bytecode and then deploys to the Ethereum blockchain. Technologies used include Solidity, ES6 JavaScript, Web3.js, Truffle, and Infura.</p>
			<div className="text-center mt-2">
				<a href="https://etherscan.io/address/0x99e7f7C778555dDf0504f94efF7E268e8D6e0eA3" target="_blank" className="text-slate-500 text-sm">View contract</a>
				<span className="px-2 text-slate-500"> | </span>
				<a href="https://github.com/jackdishman/solidity-smart-contract-deployer" target="_blank" className="text-slate-500 text-sm">View source</a>
			</div>
		</div>
		{/* Roo Troop */}
		<p className="mt-3 text-slate-900 text-sm">Developed website for <a href="https://rootroop.com" target="_blank">Roo Troop</a>, an NFT project on the Ethereum network that has traded over 1,000 ETH volume on OpenSea. Website included wallet login, interactions for token-gated access, and handling transaction signatures using Ethers.js</p>
		{/* Boston DAO */}
		<p className="mt-3 text-slate-900 text-sm">Core team & steering committee member for Boston DAO, crypto-native community formed out of the greater Boston area, looking to to build an innovative and inclusive communal foundation in Boston to accelerate the web3 movement. [Ongoing] Role: Frontend Developer</p>
		</>
	)
}

export default Web3;