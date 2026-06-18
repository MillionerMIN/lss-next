'use client';

import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 0);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<motion.header
			initial={{ y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			className={`fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
				isScrolled ? 'bg-[#0a0a0a]/50 backdrop-blur-md' : 'bg-transparent'
			}`}
		>
			<div className='flex items-center gap-2'>
				<img
					src='/svg/logo-white.svg'
					alt='LSS'
					width='120'
					height='auto'
					className='h-10 w-auto'
				/>
			</div>

			<nav className='hidden items-center gap-6 lg:flex'>
				<a
					href='#about'
					className='text-sm text-gray-300 transition-colors hover:text-white'
				>
					О нас
				</a>
				<a
					href='#why-us'
					className='text-sm text-gray-300 transition-colors hover:text-white'
				>
					Почему мы
				</a>
				<a
					href='#gallery'
					className='text-sm text-gray-300 transition-colors hover:text-white'
				>
					Наши проекты
				</a>
				<a
					href='#contacts'
					className='text-sm text-gray-300 transition-colors hover:text-white'
				>
					Контакты
				</a>
			</nav>

			<div className='flex items-center gap-4 text-white'>
				<button
					className='rounded-md p-2 transition-colors hover:bg-white/5 lg:hidden'
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					{isMenuOpen ? (
						<X className='h-6 w-6' />
					) : (
						<Menu className='h-6 w-6' />
					)}
				</button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className={`absolute top-full right-0 left-0 z-40 overflow-hidden transition-colors duration-300 lg:hidden ${
							isScrolled
								? 'bg-[#0a0a0a]/80 backdrop-blur-md'
								: 'bg-[#0a0a0a]/50 backdrop-blur-md'
						}`}
					>
						<nav className='flex flex-col gap-4 p-6'>
							<a
								href='#about'
								onClick={() => setIsMenuOpen(false)}
								className='text-lg text-gray-300 transition-colors hover:text-white'
							>
								О нас
							</a>
							<a
								href='#why-us'
								onClick={() => setIsMenuOpen(false)}
								className='text-lg text-gray-300 transition-colors hover:text-white'
							>
								Почему мы
							</a>
							<a
								href='#gallery'
								onClick={() => setIsMenuOpen(false)}
								className='text-lg text-gray-300 transition-colors hover:text-white'
							>
								Наши проекты
							</a>
							<a
								href='#contacts'
								onClick={() => setIsMenuOpen(false)}
								className='text-lg text-gray-300 transition-colors hover:text-white'
							>
								Контакты
							</a>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
}
