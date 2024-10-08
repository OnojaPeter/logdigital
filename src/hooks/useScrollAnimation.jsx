import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const useScrollAnimation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, //false if i want continous trigger
    threshold: 0.2, 
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    // } else {
    //   controls.start('hidden');
    // }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeInOut' } },
  };

  // Image animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeInOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeInOut', delay: '0.5' } },
  };

  return { ref, controls, variants, textVariants, imageVariants, buttonVariants };
};

export default useScrollAnimation;
