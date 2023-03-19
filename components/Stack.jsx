import React from 'react'
import StackTable from './stack.table'
import { tagsViews } from './consts/tags.views'

const Stack = () => {
	return (
		<section className='w-full h-max'>
			<a id='stack' />
			<div className='container relative flex flex-col justify-center items-start h-max w-full select-none lg:pl-[230px] py-20 px-7'>
				<div className='relative flex flex-col items-start w-full'>
					<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color'>
						{tagsViews.h1In}
					</span>
					<h1 className=' text-white font-[700] text-4xl sm:text-6xl md:text-7xl lg:text-7xl 2xl:text-8xl'>
						<span className='absolute inline-block text-styled-red transform translate-x-[5.6rem] sm:translate-x-[9.5rem] md:translate-x-[11.4rem] 2xl:translate-x-[15rem] -z-10'>
							Stack
						</span>
						Мой <span className='text-styled-green'>Stack</span>
					</h1>
					<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color'>
						{tagsViews.h1Out}
					</span>
				</div>

				<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color mt-3'>
					{tagsViews.pIn}
				</span>
				<p className='text_indent'>
					Full Stack разработчик - это своеобразный швейцарский нож в мире
					веб-разработки. В своей работе я подбираю для каждого проекта наиболее
					оптимальный стек технологий. Цель - сократить время разработки, не в
					ущерб производительности и функциональности продукта.
				</p>
				<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color'>
					{tagsViews.pOut}
				</span>

				<StackTable />
			</div>
		</section>
	)
}

export default Stack
