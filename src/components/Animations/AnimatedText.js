import { motion } from 'framer-motion/dist/framer-motion';

const AnimatedText = ({ children }) => {
  const animations = {
    initial: { opacity: 0, x: 0 },
  };

  const splitLetters = [...children];

  return splitLetters.map((letter, i) => (
    <motion.span
      key={i}
      variants={animations}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: i * 0.01 }}
    >
      {letter}
    </motion.span>
  ));
};

export default AnimatedText;