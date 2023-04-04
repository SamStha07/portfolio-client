import React from 'react';
import HeroTitle from './hero-title.module';
import HeroSubtitle from './hero-subtitle.module';
import AnimatedButton from '@/components/animated-button.component';

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center h-screen px-8">
      <HeroTitle />
      <HeroSubtitle />
      <AnimatedButton />
    </section>
  );
};

export default HeroSection;
