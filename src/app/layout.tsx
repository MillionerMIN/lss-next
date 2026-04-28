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
			<body className={`${geist.variable} font-sans antialiased`}>
				{children}
			</body>
		</html>
	);
}
