'use client';

import { motion } from 'motion/react';

export default function Features() {
	const features = [
		{
			id: '1',
			title: 'Качество',
			description:
				'Используем только лучшие растения, которые сохраняют свой вид на протяжении долгих лет'
		},
		{
			id: '2',
			title: 'Скорость',
			description:
				'Ценим ваше время и гарантируем быстрый результат, сохранив при этом высокое качество'
		},
		{
			id: '3',
			title: 'Разнообразие',
			description:
				'Предлагаем широкий выбор оформления с учетом ваших пожеланий и бюджета'
		},
		{
			id: '4',
			title: 'Доступность',
			description:
				'Готовы реализовать проект любой сложности в любом уголке страны'
		}
	];

	return (
		<section className='px-6 py-24' id='why-us'>
			<div className='mx-auto max-w-7xl'>
				<motion.h2
					initial={{ y: 20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					className='mb-20 text-center text-4xl font-medium text-white'
				>
					4 причины, почему с нами удобно <br /> и надежно работать
				</motion.h2>
				<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
					{features.map((feature, i) => (
						<motion.div
							key={feature.id}
							initial={{ y: 40, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.15 }}
							className='group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-colors hover:bg-white/10'
						>
							<div className='absolute -top-4 -left-2 text-7xl font-bold text-white/10 transition-colors group-hover:text-white/20'>
								{feature.id}
							</div>
							<div className='relative z-10 space-y-4'>
								<h3 className='pt-8 text-xl font-medium text-white'>
									{feature.title}
								</h3>
								<p className='text-sm leading-relaxed text-gray-400'>
									{feature.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
