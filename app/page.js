import Hero from '../components/Hero'
import Stack from '../components/Stack'
import Contacts from '../components/Contacts'
import MyPhoto from '../components/MyPhoto'
import Pet from '../components/Pet'

export default function Home() {
	return (
		<main className='text-white font-montserrat'>
			<Hero />
			<MyPhoto />
			<Stack />
			<Pet />
			<Contacts />
		</main>
	)
}
