import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
						<span className='absolute inline-block text-styled-red transform translate-x-[5.6rem] sm:translate-x-[9.5rem] md:translate-x-[11.5rem] 2xl:translate-x-[15rem] -z-10'>
							pet
						</span>
						Мой <span className='text-styled-green'>pet</span>-проект
					</h1>
					<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color'>
						{tagsViews.h1Out}
					</span>
				</div>

				<div className='flex flex-col sm:flex-row items-start gap-5 justify-between my-7 px-7'>
					<div className='flex flex-col items-start justify-center w-full sm:w-2/3'>
						<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color'>
							{tagsViews.imgT}
						</span>
						<Image
							src='/Assets/mielofon-screen.jpg'
							alt='pet-project'
							width={650}
							height={300}
						/>
					</div>
					<div className='flex flex-col w-full sm:w-1/3'>
						<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color mt-3'>
							{tagsViews.pIn}
						</span>
						<p className='text_indent'>
							Я разрабатываю свой pet-проект онлайн-сервиса, который использует
							технологии нейронных сетей для обработки текстов. Мой сервис
							поможет быстро создавать уникальный контент, оптимизированный под
							потребности пользователей. Просто введите ключевые слова, и мой
							сервис самостоятельно создаст тексты для вас. Уверен, что мой
							сервис сможет помочь людям, которые ищут быстрое и простое решение
							для создания контента.
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
						<div className='flex flex-col sm:flex-row gap-5 sm:gap-3 w-full sm:w-[60%] h-max mt-5 sm:mt-0'>
							<Link className='w-full' href='/pet'>
								<button className='w-full sm:w-max sm:my-5 relative border-2 font-medium border-styled-green bg-transparent py-2.5 px-5 uppercase text-styled-green transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-styled-green before:transition-transform before:duration-300 before:content-[` `] hover:text-sidebar-bg before:hover:scale-x-100'>
									Подробнее...
								</button>
							</Link>
							<Link
								className='w-full'
								href='https://mielofon.online/'
								target='_blank'
							>
								<button className='w-full sm:w-max sm:my-5 relative border-2 font-medium border-styled-green bg-transparent py-2.5 px-5 uppercase text-styled-green transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-styled-green before:transition-transform before:duration-300 before:content-[` `] hover:text-sidebar-bg before:hover:scale-x-100'>
									Demo
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Pet
