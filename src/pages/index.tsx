import type { NextPage } from 'next';
import HeroSection from '@/modules/hero-section';

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <div className="h-screen" />
    </>
  );
};

export default Home;
