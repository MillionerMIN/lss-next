import './globals.css';

import { Geist } from 'next/font/google';
import type { Metadata } from 'next';

const geist = Geist({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-sans',
	display: 'swap'
});

export const metadata: Metadata = {
	title: 'LSS - Озеленение офисов',
	description: 'Профессиональное озеленение и декор рабочих пространств'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='ru'>
			<body className={`${geist.variable} antialiased relative min-h-screen`}>
				<div className='fixed inset-0 -z-10 bg-black/90' />
				<div className='relative z-0 min-h-screen'>{children}</div>
			</body>
		</html>
	);
}
