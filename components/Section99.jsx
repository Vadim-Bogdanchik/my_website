import Image from "next/image"
const Section99 = () => {
	return (
		<div className='container relative h-max w-full select-none lg:pl-[230px] my-32 px-7'>
			<div className='flex flex-col items-center justify-center w-full h-max gap-5 text-white'>
				<div>
					<Image src='/Assets/99-percents.png' width={100} height={100} />
				</div>
				<div className='text-center'>
					<span className='font-semibold text-xl '>99%</span> текстового
					контента для этого сайта создано нейронной сетью
				</div>
			</div>
		</div>
	)
}

export default Section99
