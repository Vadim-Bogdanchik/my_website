import Link from 'next/link'
import '../app/globals.css'

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
	weight: ['400', '700'],
	subsets: ['cyrillic', 'latin'],
	variable: '--font-montserrat',
})

const NotFound = () => {
	return (
		<div
			className={` ${montserrat.className} w-full h-screen  bg-main-bg flex flex-col px-20 sm:px-0 justify-center items-center`}
		>
			<img src='/Assets/note-found-404.png' />
		</div>
	)
}

export default NotFound
