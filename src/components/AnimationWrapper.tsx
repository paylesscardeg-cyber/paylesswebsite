import React, { useEffect, useRef, useState } from 'react';

interface AnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
  delay?: number;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  children,
  className = '',
  animationType = 'fade-in',
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getAnimationClass = () => {
    switch (animationType) {
      case 'slide-in-left':
        return 'slide-in-left';
      case 'slide-in-right':
        return 'slide-in-right';
      case 'scale-in':
        return 'scale-in';
      default:
        return 'fade-in-section';
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimationWrapper;