import React from 'react'
import { tagsViews } from '../components/consts/tags.views'

const Pet = () => {
	return (
		<section className='w-full h-max'>
			<a id='pet' />
			<div className='container relative flex flex-col justify-center items-start h-max w-full select-none lg:pl-[230px] py-20 px-7 xl:px-0'>
				<div className='relative flex flex-col items-start w-full'>
					<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color'>
						{tagsViews.h1In}
					</span>
					<h1 className=' text-white font-[700] text-4xl sm:text-6xl md:text-7xl lg:text-7xl 2xl:text-8xl'>
						<span className='absolute inline-block text-styled-red transform -translate-x-[0.2rem] sm:-translate-x-[0.5rem] md:-translate-x-[0.4rem] 2xl:-translate-x-[5.5rem] -z-10'>
							М
						</span>
						<span className='text-styled-green'>М</span>ой pet-проект
					</h1>
					<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color'>
						{tagsViews.h1Out}
					</span>
				</div>

				<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color mt-3'>
					{tagsViews.pIn}
				</span>
				<p>
					В своей разработке я подбираю для каждого проекта наиболее оптимальный
					стек инструментов. Цель - сократить время разработки не в ущерб
					производительности и функциональности продукта.
				</p>
				<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color'>
					{tagsViews.pOut}
				</span>
			</div>
		</section>
	)
}

export default Pet
