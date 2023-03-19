'use client'

import React from 'react'

import SideBar from '../components/SideBar'
import Footer from '../components/Footer'
import MobileBottomMenu from '../components/BottomMenu'
import { tagsViews } from '../components/consts/tags.views'



import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
	weight: ['400', '700'],
	subsets: ['cyrillic', 'latin'],
	variable: '--font-montserrat',
})

export default function RootLayout({ children }) {


	return (
		<html
			lang='ru'
			className={` ${montserrat.className} font-sans bg-main-bg`}
			style={{ scrollBehavior:'smooth' }}
		>
			<head />
			<body>
				{/* top tags view */}
				<div className='maintop flex flex-col lg:pl-[130px] pt-[10px] w-full select-none dancing_fnt'>
					<span className='text-[15px] md:text-2xl from-stone-100 text-tag-color pl-[10px] md:pl-[20px]'>
						{tagsViews.htmlIn}
					</span>
					<span className='text-[15px] md:text-2xl from-stone-100 text-tag-color pl-[20px] md:pl-[40px]'>
						{tagsViews.bodyIn}
					</span>
				</div>
				

				<SideBar />

				{children}

				<Footer />
				<MobileBottomMenu />
			</body>
		</html>
	)
}
