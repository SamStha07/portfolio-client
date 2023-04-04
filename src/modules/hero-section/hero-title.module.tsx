import React from 'react';
import AnimatedText from '@/components/animated-text.component';

const beforeStyle = `before:content-['<h1>'] before:absolute before:font-cursive before:leading-[18px] before:text-stone-400 before:text-lg before:-top-[14px] before:-left-[10px] before:font-normal before:tracking-normal`;

const afterStyle = `after:content-['</h1>'] after:absolute after:font-cursive after:leading-[18px] after:text-stone-400 after:text-lg after:bottom-0 after:-right-[50px] after:font-normal after:tracking-normal`;

const HeroTitle = () => {
  const text1 = 'Hi,'.split('');
  const text2 = 'I’m Sam,'.split('');
  const text3 = 'web developer'.split('');
  return (
    <div className="relative w-fit">
      <h1
        className={`${beforeStyle} ${afterStyle} whitespace-nowrap font-bold text-white-secondary text-[50px] ssm:text-[60px] sm:text-[70px] md:text-[83px] leading-none font-sans tracking-[-6px] cursor-default`}
      >
        {text1.map((text, idx) => (
          <AnimatedText key={text + idx} text={text} />
        ))}
        <br />
        {text2.map((text, idx) => (
          <AnimatedText
            key={text + idx}
            text={text === ' ' ? '\u00A0' : text}
          />
        ))}
        <br />
        {text3.map((text, idx) => (
          <AnimatedText
            key={text + idx}
            text={text === ' ' ? '\u00A0' : text}
          />
        ))}
      </h1>
    </div>
  );
};

export default HeroTitle;
