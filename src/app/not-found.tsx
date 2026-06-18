'use client';

import { ArrowLeft, Home } from 'lucide-react';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function NotFound() {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center px-6 text-center relative z-0'>
			{/* 🔹 Контент с полупрозрачной подложкой для читаемости поверх background.avif */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='space-y-6 max-w-md bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-white/10'
			>
				<h1 className='text-9xl font-bold text-white/20'>404</h1>
				<h2 className='text-3xl font-medium text-white'>Страница не найдена</h2>
				<p className='text-gray-300'>
					Запрашиваемый раздел не существует или был перемещён.
				</p>
				<div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
					<Link
						href='/'
						className='inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors'
					>
						<Home className='w-4 h-4' />
						На главную
					</Link>
					<button
						onClick={() => window.history.back()}
						className='inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors'
					>
						<ArrowLeft className='w-4 h-4' />
						Вернуться назад
					</button>
				</div>
			</motion.div>
		</div>
	);
}
