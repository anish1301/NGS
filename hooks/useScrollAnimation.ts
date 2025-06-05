import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

const useScrollAnimation = (options?: ScrollAnimationOptions): [React.RefObject<HTMLDivElement>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const defaultOptions: ScrollAnimationOptions = {
    threshold: 0.1, // How much of the element needs to be visible to trigger
    triggerOnce: true, // Only trigger the animation once
    rootMargin: '0px 0px -50px 0px', // Start animation a bit before it's fully in view
    ...options,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (defaultOptions.triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else {
          if (!defaultOptions.triggerOnce) {
            setIsVisible(false); // Only reset if not triggerOnce
          }
        }
      },
      {
        threshold: defaultOptions.threshold,
        rootMargin: defaultOptions.rootMargin,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [defaultOptions.threshold, defaultOptions.triggerOnce, defaultOptions.rootMargin]);

  return [elementRef, isVisible];
};

export default useScrollAnimation;