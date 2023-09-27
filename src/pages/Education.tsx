const Education = () => {
	return (
		<>
			<div className="mt-12">
				<img src={require(`../assets/scu.jpeg`)} alt="Santa Clara University" />
				<h2 className="text-center text-3xl text-gray-800 mt-5">
					Santa Clara University
				</h2>
				<h4 className="text-center italic mt-3 text-gray-500">
					Bachelor's of Science
				</h4>
				<h3 className="text-center font-semibold text-gray-800 text-xl">
					Computer Science & Mathematics
				</h3>
				<p className="text-center text-sm italic text-gray-500">
					Graduated June 2019
				</p>
				<div className="flex justify-center">
					<img
						src={require(`../assets/scu-seal.webp`)}
						alt="SCU seal"
						className="p-5 w-64"
					/>
				</div>
			</div>
		</>
	);
};

export default Education;
