export default function Footer() {
	return (
		<footer className='bg-background border-t border-white/10 py-12'>
			<div className='mx-auto flex max-w-7xl flex-col items-center gap-6 px-6'>
				<img
					src='/svg/logo-white.svg'
					alt='LSS'
					width='120'
					height='auto'
					className='h-8 w-auto'
				/>
				<h3 className='text-lg font-medium text-white'>
					Ландшафт Строй Сервис
				</h3>
				<nav className='flex flex-wrap justify-center gap-8'>
					<a
						href='#'
						className='text-xs text-gray-400 transition-colors hover:text-white'
					>
						О нас
					</a>
					<a
						href='#'
						className='text-xs text-gray-400 transition-colors hover:text-white'
					>
						Ассортимент
					</a>
					<a
						href='#'
						className='text-xs text-gray-400 transition-colors hover:text-white'
					>
						Заказать
					</a>
					<a
						href='#'
						className='text-xs text-gray-400 transition-colors hover:text-white'
					>
						Контакты
					</a>
				</nav>
				<div className='text-[10px] text-gray-600'>
					© 2026 Green Space. Все права защищены.
				</div>
			</div>
		</footer>
	);
}
