'use client'
import { images } from './consts/img.data'
import Image from 'next/image'

const StackTable = () => {
	return (
		<div className='flex flex-wrap items-center justify-between gap-5 w-full my-10'>
			{images.map((img) => {return (
				<div
					key={img.alt}
					className='flex items-center justify-center w-1/6 py-5'
				>
					<Image src={img.src} width={100} height={100} alt={img.alt} />
				</div>
			)})}
		</div>
	)
}

export default StackTable
