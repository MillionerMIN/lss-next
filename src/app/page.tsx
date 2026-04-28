import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col'>
			<Header />
			<Hero />
			<Stats />
			<Features />
			<ContactForm />
			<Footer />
		</main>
	);
}
