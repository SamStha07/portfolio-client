import { motion } from 'framer-motion';
import React from 'react';
import HeroTitle from './hero-title.module';
import HeroSubtitle from './hero-subtitle.module';
import AnimatedButton from '@/components/animated-button.component';

const beforeStyleHTML = `before:content-['<html>'] before:font-cursive before:text-black-light before:absolute before:top-4 before:font-normal`;

// const afterStyleHTML = `after:content-['<html/>'] after:absolute after:font-cursive after:text-black-light after:bottom-0 after:tracking-normal`;

const beforeStyleBody = `before:content-['<body>'] before:font-cursive before:text-black-light before:absolute before:top-10 before:left-8`;

// const afterStyleBody = `after:content-['<body/>'] after:absolute after:font-cursive after:text-black-light after:left-8 after:bottom-10 after:tracking-normal`;

const bounceTransition = {
  y: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeOut',
  },
};

const HeroSection = () => {
  return (
    <div className="relative h-screen px-5">
      {/* <div className={`${beforeStyleHTML} ${afterStyleHTML}`}>
        <div className={`${beforeStyleBody} ${afterStyleBody}`}> */}
      <div className={`${beforeStyleHTML}`}>
        <div className={`${beforeStyleBody}`}>
          <section className="flex flex-col justify-center h-screen px-8">
            <HeroTitle />
            <HeroSubtitle />
            <AnimatedButton />
          </section>
        </div>
      </div>
      <div className="absolute bottom-10">
        <motion.p
          style={{
            writingMode: 'vertical-rl',
          }}
          transition={bounceTransition}
          animate={{
            y: ['5px', '-5px'],
          }}
        >
          Scroll
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;
