import { motion } from 'framer-motion';

const AnimatedButton = () => {
  // const parent = {
  //   variantA: { color: '#20fddc' },
  //   variantB: { color: '#ffffff' },
  // };

  const child = {
    variantA: { left: '-110%' },
    variantB: { left: '-5px' },
  };

  return (
    <motion.button
      // initial="variantA"
      whileHover="variantB"
      // variants={parent}
      className="border border-[#08fdd8] text-[#08fdd8] tracking-[4px] text-sm w-[200px] h-[45px] relative overflow-hidden hover:text-white"
    >
      <motion.div
        variants={child}
        transition={{
          type: 'spring',
          damping: 12,
          mass: 0.2,
          stiffness: 90,
        }}
        className="w-[105%] h-[45px] bg-[#20fddc] absolute left-[-110%] top-0 -skew-x-[10deg]"
      ></motion.div>
      <span className="inline-block whitespace-nowrap absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2">
        Contact me!
      </span>
    </motion.button>
  );
};

export default AnimatedButton;
