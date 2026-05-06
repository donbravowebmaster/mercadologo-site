import HeaderModern from '../components/HeaderModern';
import HeroModern from '../components/HeroModern';
import OfertaSection from '../components/OfertaSection';
import SolutionsSection from '../components/SolutionsSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <HeaderModern />
      <HeroModern />
      <OfertaSection />
      <SolutionsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
