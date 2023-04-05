import classnames from 'classnames';
import { motion } from 'framer-motion';
import { useId } from 'react';

type IVariants = {
  hidden: any;
  show: any;
};

type IProps = {
  text: string;
  className?: string;
  variants?: IVariants;
  idx?: number;
};

const AnimatedText = ({ text, className }: IProps) => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transform: [
        'scale3d(1, 1, 1)',
        'scale3d(1.2, 0.8, 1)',
        'scale3d(0.8, 1.2, 1)',
        'scale3d(1.2, 0.9, 1)',
        'scale3d(0.9, 1, 1)',
        'scale3d(1, 1, 1)',
      ],
    },
  };

  return (
    <motion.span
      className={classnames('inline-block hover:text-[#02c7b0]', className)}
      custom={useId()}
      variants={variants}
      whileHover={{
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
      }}
    >
      {text}
    </motion.span>
  );
};

export default AnimatedText;

// const controls = useAnimationControls();
// const [isPlaying, setIsPlaying] = useState(false);

// useEffect(() => {
//   controls.start(i => ({
//     transform: [
//       'scale3d(1, 1, 1)',
//       'scale3d(1.4, 0.55, 1)',
//       'scale3d(.75, 1.25, 1)',
//       'scale3d(1.25, 0.85, 1)',
//       'scale3d(.9, 1.05, 1)',
//       'scale3d(1, 1, 1)',
//     ],
//     transition: {
//       times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
//       duration: i * 0.3,
//     },
//     opacity: 1,
//   }));
// }, []);

// console.log('isPlaying', isPlaying);

// scale3d(1, 1, 1); scale3d(x,y,z);
// const rubberBand = () => {
//   controls.start({
//     transform: [
//       'scale3d(1, 1, 1)',
//       'scale3d(1.4, 0.55, 1)',
//       'scale3d(.75, 1.25, 1)',
//       'scale3d(1.25, 0.85, 1)',
//       'scale3d(.9, 1.05, 1)',
//       'scale3d(1, 1, 1)',
//     ],
//     transition: {
//       times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
//       duration: 0.8,
//     },
//   });
//   setIsPlaying(true);
// };

// onMouseOver={() => setIsPlaying(true)}
// animate={controls}
// onMouseOver={() => {
//   if (!isPlaying) {
//     rubberBand();
//   }
// }}
// onAnimationComplete={() => setIsPlaying(false)}
