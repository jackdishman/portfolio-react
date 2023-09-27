const Web3 = () => {
	return (
		<div className="w-full sm:w-3/4 lg:w-1/2">
			<div className="pt-5 mt-10 border-t border-gray-900">
				<h2 className="text-3xl text-center">
					Blockchain // Smart Contract Developer
				</h2>
				<div className="flex justify-between mt-5">
					<span className="underline">Freelance</span>
					<span className="italic">June 2021 - Present</span>
				</div>
				{/* Smart contract deployer */}
				<p className="mt-5 text-gray-900 text-sm">
					Built an Ethereum smart contract deployer that compiles Solidity code
					into EVM-readable bytecode and then deploys to the Ethereum
					blockchain. Technologies used include Solidity, ES6 JavaScript,
					Web3.js, Truffle, and Infura.
				</p>
				<div className="text-center mt-2">
					<a
						href="https://etherscan.io/address/0x99e7f7C778555dDf0504f94efF7E268e8D6e0eA3"
						target="_blank"
						className="text-gray-500 text-sm">
						View contract
					</a>
					<span className="px-2 text-gray-500"> | </span>
					<a
						href="https://github.com/jackdishman/solidity-smart-contract-deployer"
						target="_blank"
						className="text-gray-500 text-sm">
						View source
					</a>
				</div>
			</div>
		</div>
	);
};

export default Web3;
