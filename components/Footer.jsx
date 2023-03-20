import { tagsViews } from '../components/consts/tags.views'

const Footer = () => {
	return (
		<div className='flex flex-col lg:pl-[130px] pb-[10px] w-full h-max select-none dancing_fnt mb-24 sm:mb-0'>
			<span className='text-[15px] md:text-2xl from-stone-100 text-tag-color pl-[20px] md:pl-[40px]'>
				{tagsViews.bodyOut}
			</span>
			<span className='text-[15px] md:text-2xl from-stone-100 text-tag-color pl-[10px] md:pl-[20px]'>
				{tagsViews.htmlOut}
			</span>
		</div>
	)
}

export default Footer
