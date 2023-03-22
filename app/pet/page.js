import { tagsViews } from '../../components/consts/tags.views'

export default function PetPage() {
	return (
		<main className='text-white font-montserrat h-max lg:pl-[230px] my-5 sm:w-[80%] lg:w-[70%] px-5 lg:px-0'>
			<div className='w-full h-max'>
				<img src='/Assets/mielofon-screen.jpg' />
			</div>

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
			<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color'>
				{tagsViews.pIn}
			</span>
			<p className=''>
				Добро пожаловать в Mielofon – инновационный онлайн-сервис, который
				использует передовые нейронные сети, чтобы помочь создавать уникальный и
				качественный текстовый контент.
			</p>
			<p className='mt-2'>
				Mielofon создается с целью помочь авторам, блогерам, журналистам и
				многим другим профессиональным и любительским писателям создавать
				тексты, которые будут привлекать внимание и оставлять яркие впечатления
				у своей аудитории.
			</p>
			<p className='mt-2'>
				Мой сервис основан на передовых технологиях глубокого обучения, которые
				позволяют нейронным сетям анализировать большие объемы данных и выдавать
				наилучшие рекомендации по написанию текстов. В Mielofon используются
				различные алгоритмы, которые адаптируются под ваши потребности, стиль
				письма и задачи, которые вы ставите перед собой.
			</p>
			<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color'>
				{tagsViews.pOut}
			</span>

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

			<div class='w-full h-max animated-gradient-border p-4 my-3'>
				<p className='font-bold mb-3'>Next JS - Фронт сервиса </p>
				<p>
					Серверный рендеринг позволяет генерировать HTML-код на сервере и
					отправлять его на клиентскую сторону, что улучшает скорость загрузки
					страницы и улучшает SEO. Кроме того, Next.js предоставляет удобный
					интерфейс для управления метаданными страницы, такими как заголовок
					страницы, описание, ключевые слова и другие метатеги.
				</p>
			</div>
			<div class='w-full h-max animated-gradient-border p-4 my-3'>
				<p className='font-bold mb-3'>Sanity - Бэкэнд для блога</p>
				<p>
					Бэкэнд на платформе Sanity представляет собой гибкую и мощную систему
					управления контентом, которая позволяет легко создавать и
					редактировать контент для вашего блога. Сочетание этой платформы с
					фреймворком Next JS обеспечивает мощный инструмент для создания
					быстрых и масштабируемых блогов с использованием серверного
					рендеринга.
				</p>
				<p className='mt-2'>
					Один из главных преимуществ использования бэкэнда на платформе Sanity
					для блога - это возможность создания настраиваемых моделей данных,
					которые позволяют определить структуру и типы контента, которые можно
					использовать в блоге. Это обеспечивает гибкость в создании различных
					типов записей и легкость в управлении ими.
				</p>
				<p className='mt-2'>
					Кроме того, бэкэнд на платформе Sanity предоставляет API для доступа к
					контенту, что обеспечивает легкость в интеграции с различными
					сторонними инструментами и сервисами.
				</p>
				<p className='mt-2'>
					Использование фреймворка Next JS с бэкэндом на платформе Sanity
					обеспечивает максимально быстрое время загрузки страниц блога, что
					повышает его SEO-оптимизацию и обеспечивает лучший пользовательский
					опыт. Кроме того, благодаря удобному интерфейсу управления контентом в
					Sanity, вы можете быстро и легко обновлять контент на вашем блоге, не
					имея при этом никаких технических навыков.
				</p>
			</div>
			<div class='w-full h-max animated-gradient-border p-4 my-3'>
				<p className='font-bold mb-3'>React JS - Фронт Приложения</p>
				<p>
					React JS является одним из наиболее популярных и мощных фреймворков
					для создания веб-приложений. Он обладает широкими возможностями для
					создания динамических пользовательских интерфейсов и обеспечивает
					высокую производительность благодаря использованию виртуального DOM.
				</p>
				<p className='mt-2'>
					Использование React JS в разработке фронтенд сервиса обеспечивает
					максимально быстрое время загрузки страниц и высокую
					производительность приложения, что повышает удобство использования и
					улучшает пользовательский опыт. Кроме того, React.js обладает широкой
					поддержкой со стороны сообщества разработчиков, что позволяет
					использовать различные компоненты и библиотеки для улучшения
					функциональности приложения.
				</p>
			</div>
			<div class='w-full h-max animated-gradient-border p-4 my-3'>
				<p className='font-bold mb-3'>Node JS - Бэкэнд приложения</p>
				<p>
					Использование Node JS в разработке бэкенда обеспечивает мощный
					инструмент для обработки запросов от клиентской стороны и управления
					базой данных. Node JS также поддерживает множество популярных
					библиотек и фреймворков для создания серверных приложений, таких как
					Express.js, Koa.js, Hapi.js и других. Это позволяет разработчикам
					быстро и легко создавать масштабируемые и эффективные серверные
					приложения.
				</p>
				<p className='mt-2'>
					Node JS также обладает широкой поддержкой со стороны сообщества
					разработчиков, что позволяет использовать множество инструментов и
					библиотек для улучшения функциональности вашего приложения. Кроме
					того, Node.js обеспечивает легкую интеграцию с другими сервисами и
					инструментами благодаря широкой поддержке API и популярных форматов
					данных, таких как JSON.
				</p>
			</div>

			<div className='relative flex flex-col items-start w-full mt-10'>
				<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color'>
					{tagsViews.h1In}
				</span>
				<h1 className=' text-white font-[700] text-4xl sm:text-6xl md:text-7xl lg:text-7xl 2xl:text-8xl'>
					Деплой
				</h1>
				<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color'>
					{tagsViews.h1Out}
				</span>
			</div>
			<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color'>
				{tagsViews.pIn}
			</span>
			<p>
				На текущий момент я размещаю приложения на виртуальном сервере (VPS).
				Для контейнеризации приложений используется Docker и Docker-compose. Это
				позволяет создавать изолированные среды с необходимыми зависимостями,
				что упрощает разработку, тестирование и развертывание приложений на
				разных платформах и серверах. Для обработки входящего трафика
				используется веб-сервер NGINX. Он обеспечивает высокую
				производительность, стабильность и безопасность моего проекта.
			</p>
			<p className='my-2'>
				После запуска MVP продукта необходимо будет рассмотреть возможность
				развертывания сервиса на платформе Kubernetes.
			</p>
			<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color'>
				{tagsViews.pOut}
			</span>
		</main>
	)
}
