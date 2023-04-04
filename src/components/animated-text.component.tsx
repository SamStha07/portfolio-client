import { motion, useAnimationControls } from 'framer-motion';
import React, { useState } from 'react';
import classnames from 'classnames';

const AnimatedText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  // scale3d(1, 1, 1); scale3d(x,y,z);
  const rubberBand = () => {
    controls.start({
      transform: [
        'scale3d(1, 1, 1)',
        'scale3d(1.4, 0.55, 1)',
        'scale3d(.75, 1.25, 1)',
        'scale3d(1.25, 0.85, 1)',
        'scale3d(.9, 1.05, 1)',
        'scale3d(1, 1, 1)',
      ],
      transition: {
        times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
        duration: 0.8,
      },
    });
    setIsPlaying(true);
  };
  return (
    <motion.span
      className={classnames('inline-block hover:text-[#02c7b0]', className)}
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) {
          rubberBand();
        }
      }}
      onAnimationComplete={() => setIsPlaying(false)}
    >
      {text}
    </motion.span>
  );
};

export default AnimatedText;
