'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';

interface FormValues {
	name: string;
	phone: string;
	comment: string;
}

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting }
	} = useForm<FormValues>();

	const onSubmit = async (data: FormValues) => {
		console.log('Form submitted:', data);
		// Здесь можно добавить запрос к вашему API
		await new Promise((resolve) => setTimeout(resolve, 1000));
		reset();
	};

	return (
		<section className='px-6 py-24'>
			<div className='mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2'>
				<motion.div
					initial={{ x: -50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					className='space-y-12'
				>
					<div>
						<h2 className='mb-8 text-4xl leading-tight font-medium text-white md:text-5xl'>
							Обсудим детали <br /> проекта?
						</h2>
						<p className='text-xl text-gray-400'>Свяжитесь с нами</p>
					</div>
					<div className='flex gap-4'>
						<a
							href='#'
							className='flex h-12 w-12 items-center justify-center rounded-lg border border-white/20 transition-all hover:bg-white hover:text-black'
						>
							<span className='text-xs font-bold uppercase'>vk</span>
						</a>
						<a
							href='#'
							className='flex h-12 w-12 items-center justify-center rounded-lg border border-white/20 transition-all hover:bg-white hover:text-black'
						>
							<span className='text-xs font-bold uppercase'>ig</span>
						</a>
					</div>
				</motion.div>

				<motion.form
					onSubmit={handleSubmit(onSubmit)}
					initial={{ x: 50, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					className='space-y-6 rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl'
				>
					<div className='space-y-4'>
						<div>
							<Input
								placeholder='Имя'
								className='h-14 rounded-lg border-white/10 bg-white/5 text-white placeholder:text-gray-500'
								{...register('name', { required: 'Введите ваше имя' })}
							/>
							{errors.name && (
								<p className='mt-1 text-xs text-red-400'>
									{errors.name.message}
								</p>
							)}
						</div>

						<div>
							<Input
								placeholder='Телефон'
								className='h-14 rounded-lg border-white/10 bg-white/5 text-white placeholder:text-gray-500'
								{...register('phone', { required: 'Введите телефон' })}
							/>
							{errors.phone && (
								<p className='mt-1 text-xs text-red-400'>
									{errors.phone.message}
								</p>
							)}
						</div>

						<Textarea
							placeholder='Комментарий'
							className='min-h-[120px] rounded-lg border-white/10 bg-white/5 text-white placeholder:text-gray-500'
							{...register('comment')}
						/>
					</div>

					<Button
						type='submit'
						disabled={isSubmitting}
						className='group h-14 w-full rounded-md bg-white font-medium text-black transition-all hover:bg-gray-200'
					>
						{isSubmitting ? 'Отправка...' : 'Отправить'}
					</Button>

					<p className='px-8 text-center text-[10px] text-gray-500'>
						Нажимая на кнопку, я даю согласие на обработку персональных данных
					</p>
				</motion.form>
			</div>
		</section>
	);
}
