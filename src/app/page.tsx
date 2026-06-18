import ContactForm from '@/components/ContactForm';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col'>
			<Header />
			<Hero />
			<Stats />
			<Features />
			<Gallery />
			<ContactForm />
			<Footer />
		</main>
	);
}
