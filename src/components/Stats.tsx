'use client';

import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export default function Stats() {
	const stats = [
		{ value: '10 лет', label: 'на рынке' },
		{ value: '500+', label: 'выполненных проектов' },
		{ value: '99%', label: 'довольных клиентов' }
	];

	return (
		<section className='px-6 py-24' id='about'>
			<div className='mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2'>
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					className='group relative space-y-8'
				>
					<div className='aspect-video overflow-hidden rounded-xl border border-white/10'>
						<img
							src='https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000'
							alt='Офис с растениями'
							className='h-full w-full object-cover'
						/>
					</div>
					<div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100'>
						<button className='flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-transform hover:scale-110'>
							<Play className='h-6 w-6 fill-white text-white' />
						</button>
					</div>
				</motion.div>

				<div className='space-y-12'>
					<h2 className='text-3xl leading-tight font-medium text-white md:text-4xl'>
						Превращаем офисы в комфортные <br /> зоны для работы
					</h2>
					<p className='max-w-md text-gray-400'>
						Даже деловая среда должна быть приятной, поэтому мы создаем
						уникальные проекты, которые способствуют продуктивной работе ваших
						сотрудников
					</p>
					<div className='grid grid-cols-1 gap-6'>
						{stats.map((stat, i) => (
							<motion.div
								key={i}
								initial={{ x: 50, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
								className='group flex items-baseline justify-between rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-colors hover:bg-white/10'
							>
								<span className='text-4xl font-medium text-white'>
									{stat.value}
								</span>
								<span className='text-sm text-gray-400'>{stat.label}</span>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
