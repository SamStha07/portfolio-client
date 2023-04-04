import type { NextPage } from 'next';
import HeroSection from '@/modules/hero-section';

const Home: NextPage = () => {
  return (
    <div className="relative px-5">
      <div
        className={`before:content-['<html>'] before:font-cursive before:text-stone-400 before:absolute before:top-4`}
      >
        <div
          className={`before:content-['<body>'] before:font-cursive before:text-stone-400 before:absolute before:top-10 before:left-8`}
        >
          <HeroSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
