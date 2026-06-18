'use client';

import { useEffect, useRef } from 'react';

import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function Hero() {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = 0.65;
		}
	}, []);

	return (
		<section className='relative flex min-h-screen items-center justify-center overflow-hidden px-6'>
			{/* Background */}
			<div className='absolute inset-0 z-0'>
				<video
					ref={videoRef}
					autoPlay
					muted
					loop
					playsInline
					preload='auto'
					className='w-full h-full object-cover'
					poster='/images/hero-poster.png'
				>
					<source src='/videos/hero-video.mp4' type='video/mp4' />
					Ваш браузер не поддерживает видео.
				</video>
				<div className='absolute inset-0 bg-black/70' />
			</div>

			<div className='relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 py-24 lg:grid-cols-2'>
				<motion.div
					initial={{ x: -50, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8 }}
				>
					<h1 className='mb-6 text-5xl leading-tight font-medium text-white md:text-7xl'>
						Ландшафтный дизайн
						<br />
						участка
					</h1>
					<p className='mb-8 max-w-md text-lg text-gray-300'>
						Качественный дизайн, авторский проект, 100% гарантия
					</p>
				</motion.div>

				{/* Container for the right side (image + button) */}
				<motion.div
					initial={{ scale: 0.9, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.8 }}
					className='relative flex justify-center lg:justify-end items-end'
				>
					<div className='group relative'>
						<div className='absolute -inset-4 -z-10 rounded-4xl bg-white/5 backdrop-blur-xl transition-colors group-hover:bg-white/10' />

						<div className='relative -mt-15 flex justify-center'>
							<div className='relative'>
								<div
									className='absolute inset-0 rounded-full blur-2xl opacity-30'
									style={{
										background:
											'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
										transform: 'translateY(20px)'
									}}
								/>

								<img
									src='/images/hero-tree.png'
									alt='Potted plant'
									className='relative h-48 w-48 rounded-md object-cover md:h-64 md:w-64 drop-shadow-2xl'
									style={{
										filter:
											'drop-shadow(0 20px 40px rgba(0,0,0,0.4)) drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
									}}
								/>
							</div>
						</div>

						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.6 }}
							className='mt-6 flex justify-center'
						>
							<Link href='#gallery' scroll={true}>
								<Button
									size='lg'
									className='group/btn flex items-center gap-2 rounded-3xl bg-white px-8 py-6 text-black hover:bg-gray-200 cursor-pointer'
								>
									Открыть каталог
									<ArrowUpRight className='h-5 w-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1' />
								</Button>
							</Link>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
