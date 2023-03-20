import { tagsViews } from '../../components/consts/tags.views'

export default function PetPage() {
	return (
		<main className='text-white font-montserrat h-max lg:pl-[230px] my-5 sm:w-[70%] px-7 lg:px-0'>
			<div className='w-full h-[200px]'>Картинка Миелофон</div>

			<div className='relative flex flex-col items-start w-full mt-10'>
				<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color'>
					{tagsViews.h1In}
				</span>
				<h1 className=' text-white font-[700] text-4xl sm:text-6xl md:text-7xl lg:text-7xl 2xl:text-8xl'>
					О проекте
				</h1>
				<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color'>
					{tagsViews.h1Out}
				</span>
			</div>

			<p className=''>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nihil
				accusamus iure reprehenderit cumque ipsa provident quam, non vero
				similique unde sed quis quo voluptas quia. Consectetur explicabo facilis
				nostrum?
			</p>

			<div className='relative flex flex-col items-start w-full mt-10'>
				<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color'>
					{tagsViews.h1In}
				</span>
				<h1 className=' text-white font-[700] text-4xl sm:text-6xl md:text-7xl lg:text-7xl 2xl:text-8xl'>
					Архитектура
				</h1>
				<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color'>
					{tagsViews.h1Out}
				</span>
			</div>

			<div className='flex flex-row flex-wrap items-start justify-start gap-5'>
				<div className='w-[300px] h-[200px] border p-2 my-2'>
					1. Фронт Next js
				</div>
				<div className='w-[300px] h-[200px] border p-2 my-2'>
					2. Блог Школа
				</div>
			</div>
			<div className='flex flex-row flex-wrap items-start justify-start gap-5'>
				<div className='w-[300px] h-[200px] border p-2 my-2'>
					3. Фронт Приложения
				</div>
				<div className='w-[300px] h-[200px] border p-2 my-2'>
					4. Бэк приложения
				</div>
			</div>
		</main>
	)
}
