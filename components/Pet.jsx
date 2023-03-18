import React from 'react'
import { tagsViews } from '../components/consts/tags.views'

const Pet = () => {
	return (
		<section className='w-full h-max'>
			<a id='pet' />
			<div className='container relative flex flex-col justify-center items-start h-max w-full select-none lg:pl-[230px] py-20 px-7'>
				<div className='relative flex flex-col items-start w-full'>
					<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color'>
						{tagsViews.h1In}
					</span>
					<h1 className=' text-white font-[700] text-4xl sm:text-6xl md:text-7xl lg:text-7xl 2xl:text-8xl'>
						<span className='absolute inline-block text-styled-red transform translate-x-[5.6rem] sm:translate-x-[9.5rem] md:translate-x-[11.5rem] 2xl:translate-x-[5.5rem] -z-10'>
							pet
						</span>
						Мой <span className='text-styled-green'>pet</span>-проект
					</h1>
					<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color'>
						{tagsViews.h1Out}
					</span>
				</div>

				<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color mt-3'>
					{tagsViews.pIn}
				</span>
				<p className='text_indent'>
					Я разрабатываю свой pet-проект онлайн-сервиса, который использует технологии нейронных сетей для обработки текстов. Мой сервис
					поможет быстро создавать уникальный контент, оптимизированный под	потребности пользователей. Просто введите ключевые слова, и мой сервис самостоятельно создаст тексты для вас. Уверен, что мой сервис сможет	помочь людям, которые ищут быстрое и простое решение для создания	контента.
				</p>
				<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color'>
					{tagsViews.pOut}
				</span>
				<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color mt-3'>
					{tagsViews.pIn}
				</span>
				<p className='text_indent'>
					Это лишь мой MVP продукта, и я работаю над его улучшением, чтобы
					обеспечить более широкий функционал в будущем.
				</p>
				<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color'>
					{tagsViews.pOut}
				</span>
			</div>
		</section>
	)
}

export default Pet
