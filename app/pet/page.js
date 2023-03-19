import Image from 'next/image'

export default function PetPage() {
	return (
		<main className='text-white font-montserrat h-[500px] lg:pl-[230px]'>
			<Image
				src='/Assets/mielofon-screen.jpg'
				alt='pet-project'
				width={600}
				height={300}
			/>
		</main>
	)
}
