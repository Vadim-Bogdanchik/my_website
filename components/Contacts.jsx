'use client'

import React, { useEffect } from 'react'
import { tagsViews } from '../components/consts/tags.views'
import ymaps from 'ymaps'
import mygeo from '../public/Assets/css-logo.png'

const Contacts = () => {
	useEffect(() => {
		ymaps
			.load()
			.then(ymaps => {
				const myMap = new ymaps.Map('first_map', {
					center: [55.549577, 37.555643],
					zoom: 17,
					controls: [],
				})

				// var myGeoObject = new ymaps.GeoObject({
				// 	geometry: {
				// 		type: 'Point', // тип геометрии - точка
				// 		coordinates: [55.549577, 37.555643], // координаты точки
				// 	},
				// })

				var myPlacemark = new ymaps.Placemark(
					[55.549577, 37.555643],
					{
						hintContent: 'Надпись, которая всплаывет при наведении на метку',
					},
					{
						iconLayout: 'default#image',
						iconImageHref: 'https://bogdanchik.ru/mygeo.png',
						// iconImageHref:
						// 	'https://static.tildacdn.com/tild3061-3235-4537-b066-616662373363/Group_783.svg',
						iconImageSize: [90, 90],
						iconImageOffset: [-65, -110],
					}
				)

				myMap.behaviors.disable('scrollZoom')
				// myMap.geoObjects.add(myGeoObject)
				myMap.geoObjects.add(myPlacemark)
			})
			.catch(error => console.log(error))
	}, [])

	return (
		<section className='w-full h-max'>
			<a id='contacts' />
			<div className='container relative h-max w-full select-none lg:pl-[230px] my-20 px-7'>
				<div className='relative w-full'>
					<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color text-left w-full'>
						{tagsViews.h1In}
					</span>
					<h2 className=' text-white font-[700] text-4xl sm:text-6xl md:text-7xl lg:text-7xl 2xl:text-8xl'>
						<span className='absolute inline-block text-styled-red transform translate-x-[5.6rem] sm:translate-x-[9.5rem] md:translate-x-[11.5rem] 2xl:translate-x-[5.5rem] -z-10'>
							контакты
						</span>
						Мои <span className='text-styled-green'>контакты</span>
					</h2>
					<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color text-left w-full'>
						{tagsViews.h1Out}
					</span>
				</div>
				<div id='first_map' className='w-full h-[400px] my-5'></div>
			</div>
		</section>
	)
}

export default Contacts
