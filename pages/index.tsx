const Page = () => {
	return (
		<div
			className="
				p-6 
				flex 
				justify-center 
				align-center 
				flex-col
			"
		>
			<div
				className="
					flex
					text-4xl
					flex-col
				"
			>
				<div
					className="
						specialRound
						relative
						flex
						justify-center
						items-center
						before:content-['']
						h-[200px]
						w-[400px]
						before:h-[200px]
						before:w-[200px]
						before:absolute
						before:left-0
						before:bg-gradient-to-tr
						before:from-[#03c44d]
						before:to-[#d772ff]
						before:z-[-1]
					"
				>
					Yom Cosplay - Prism
				</div>
				<div>test</div>
			</div>
		</div>
	);
};

export default Page;
