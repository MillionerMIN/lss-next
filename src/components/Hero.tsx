'use client';

import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

export default function Hero() {
	return (
		<section className='relative flex min-h-screen items-center justify-center overflow-hidden px-6'>
			{/* Background */}
			<div className='absolute inset-0 z-0'>
				<img
					src='https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=2000'
					alt='Green office background'
					className='h-full w-full object-cover'
				/>
				<div className='absolute inset-0 bg-black/60' />
			</div>

			<div className='relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 py-24 lg:grid-cols-2'>
				<motion.div
					initial={{ x: -50, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8 }}
				>
					<h1 className='mb-6 text-5xl leading-tight font-medium text-white md:text-7xl'>
						Озеленение <br />
						офисных помещений
					</h1>
					<p className='mb-8 max-w-md text-lg text-gray-300'>
						Создайте уютное рабочее пространство с помощью нашего зеленого
						декора
					</p>
				</motion.div>

				<motion.div
					initial={{ scale: 0.9, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.8 }}
					className='relative flex justify-center lg:justify-end'
				>
					<div className='group relative'>
						<div className='absolute -inset-4 -z-10 rounded-xl bg-white/5 backdrop-blur-xl transition-colors group-hover:bg-white/10' />
						<div className='rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur-2xl'>
							<img
								src='https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=400'
								alt='Potted plant'
								className='h-48 w-48 rounded-md object-cover md:h-64 md:w-64'
							/>
						</div>
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.6 }}
							className='mt-6 flex justify-center'
						>
							<Button
								size='lg'
								className='group/btn flex items-center gap-2 rounded-md bg-white px-8 py-6 text-black hover:bg-gray-200'
							>
								Открыть каталог
								<ArrowUpRight className='h-5 w-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1' />
							</Button>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
