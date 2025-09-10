import Header from '@/components/header';
import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Faq from '@/components/sections/faq';
import Footer from '@/components/sections/footer';
import Formations from '@/components/sections/formations';
import Testimonials from '@/components/sections/testimonials';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main>
        <About />
        <Formations />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
