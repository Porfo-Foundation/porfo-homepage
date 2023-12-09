import { useEffect, useState } from 'react';

export const useScrollPosition = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const calculateScrollPercentage = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;

    const percentage = (scrolled / documentHeight) * 100;

    setScrollPercentage(percentage);
  };

  useEffect(() => {
    const handleScroll = () => {
      calculateScrollPercentage();
    };

    window.addEventListener('scroll', handleScroll);

    // Initial calculation
    calculateScrollPercentage();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPercentage;
};
