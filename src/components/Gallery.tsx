'use client';

import Image from 'next/image';
import { Shuffle } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface Project {
	id: number;
	title: string;
	span: string;
	img: string;
}

const initialProjects: Project[] = [
	{
		id: 1,
		title: 'Офис IT-компании',
		span: 'md:col-span-2 md:row-span-2',
		img: '/images/gallery-1.jpg'
	},
	{
		id: 2,
		title: 'Коворкинг Центр',
		span: 'md:col-span-1 md:row-span-1',
		img: '/images/gallery-2.jpg'
	},
	{
		id: 3,
		title: 'Ресепшн Отель',
		span: 'md:col-span-1 md:row-span-1',
		img: '/images/gallery-3.jpg'
	},
	{
		id: 4,
		title: 'Переговорная Зона',
		span: 'md:col-span-1 md:row-span-2',
		img: '/images/gallery-4.jpg'
	},
	{
		id: 5,
		title: 'Open-Space Студия',
		span: 'md:col-span-2 md:row-span-1',
		img: '/images/gallery-5.jpg'
	},
	{
		id: 6,
		title: 'Зона Отдыха',
		span: 'md:col-span-1 md:row-span-1',
		img: '/images/gallery-6.jpg'
	}
];

export default function Gallery() {
	const [projects, setProjects] = useState(initialProjects);

	const handleShuffle = () => {
		setProjects((prev) => [...prev].sort(() => Math.random() - 0.5));
	};

	return (
		<section className='py-24 px-6' id='gallery'>
			<div className='max-w-7xl mx-auto'>
				<div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4'>
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true }}
					>
						<h2 className='text-4xl font-medium text-white mb-2'>
							Наши проекты
						</h2>
						<p className='text-gray-400'>
							Реализованные решения для современных офисов
						</p>
					</motion.div>
					<motion.button
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true }}
						onClick={handleShuffle}
						className='flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors w-fit'
					>
						<Shuffle className='w-4 h-4' />
						Перемешать
					</motion.button>
				</div>

				<motion.div
					layout
					className='grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]'
				>
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							layout
							transition={{ type: 'spring', stiffness: 300, damping: 25 }}
							className={`relative overflow-hidden rounded-xl border border-white/10 group ${project.span}`}
						>
							<Image
								src={project.img}
								alt={project.title}
								fill
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
								className='object-cover transition-transform duration-500 group-hover:scale-105'
								priority={index < 2}
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6'>
								<span className='text-white text-lg font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300'>
									{project.title}
								</span>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
