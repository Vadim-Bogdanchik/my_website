import React from 'react'
import { tagsViews } from '../components/consts/tags.views'

const Contacts = () => {
	return (
		<section className='w-full h-max'>
			<a id='contacts' />
			<div className='container relative flex flex-col justify-center items-start h-max w-full select-none lg:pl-[230px] my-20 px-7 xl:px-0'>
				<div className='relative flex flex-col items-center justify-center w-full'>
					{/* <span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color text-left w-full'>
						{tagsViews.h1In}
					</span> */}
					<h2 className=' text-white font-[700] text-4xl sm:text-6xl md:text-5xl lg:text-5xl 2xl:text-8xl'>
						<span className='absolute inline-block text-styled-red transform -translate-x-[0.2rem] sm:-translate-x-[0.5rem] md:-translate-x-[0.4rem] 2xl:-translate-x-[5.5rem] -z-10'>
							М
						</span>
						<span className='text-styled-green'>М</span>ои контакты
					</h2>
					{/* <span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color text-left w-full'>
						{tagsViews.h1Out}
					</span> */}
				</div>
			</div>
		</section>
	)
}

export default Contacts
