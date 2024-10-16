"use client";
import React from "react";
import cn from "classnames";

interface FadeInDivProps {
  children: React.ReactNode;
  containerStyle?: string;
}

const FadeInDiv: React.FC<FadeInDivProps> = ({ children, containerStyle }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const divRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const node = divRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <div
      ref={divRef}
      className={cn(
        `${containerStyle} transition-all duration-1000 ease-in-out transform ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 lg:-translate-x-12"
        }`
      )}
    >
      {children}
    </div>
  );
};

export default FadeInDiv;
