import MainHero from '@/components/MainHero';
import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <main>
        <MainHero />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
