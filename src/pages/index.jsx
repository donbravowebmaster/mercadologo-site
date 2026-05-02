import Header from '../components/Header';
import Hero from '../components/Hero';
import OfertaSection from '../components/OfertaSection';
import SolutionsSection from '../components/SolutionsSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <OfertaSection />
      <SolutionsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
