import React from 'react';

const beforeStyle = `before:content-['<p>'] before:absolute before:font-cursive before:leading-[18px] before:text-black-light before:text-lg before:-top-[14px] before:-left-[10px] before:font-normal before:tracking-normal`;

const afterStyle = `after:content-['<p/>'] after:absolute after:font-cursive after:leading-[18px] after:text-black-light after:text-lg after:-bottom-[20px] after:-left-[10px] after:font-normal after:tracking-normal`;

const HeroSubtitle = () => {
  return (
    <div className="relative w-fit my-[30px] mb-12">
      <p
        className={`${beforeStyle} ${afterStyle} whitespace-nowrap  font-sans cursor-default pl-1 text-[#A0988B] tracking-[4px]`}
      >
        Front End Developer / WordPress Expert
      </p>
    </div>
  );
};

export default HeroSubtitle;
