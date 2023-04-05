import type { NextPage } from 'next';
import HeroSection from '@/modules/hero-section';

const beforeStyleHTML = `before:content-['<html>'] before:font-cursive before:text-black-light before:absolute before:top-4 before:font-normal`;

const afterStyleHTML = `after:content-['<html/>'] after:absolute after:font-cursive after:text-black-light after:bottom-0 after:tracking-normal`;

const beforeStyleBody = `before:content-['<body>'] before:font-cursive before:text-black-light before:absolute before:top-10 before:left-8`;

const afterStyleBody = `after:content-['<body/>'] after:absolute after:font-cursive after:text-black-light after:left-8 after:bottom-10 after:tracking-normal`;

const Home: NextPage = () => {
  return (
    <div className="relative px-5">
      <div className={`${beforeStyleHTML} ${afterStyleHTML}`}>
        <div className={`${beforeStyleBody} ${afterStyleBody}`}>
          <HeroSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
