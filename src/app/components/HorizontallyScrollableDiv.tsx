"use client";
import cn from "classnames";
import React from "react";
import LeftButton from "../icons/LeftButton";
import RightButton from "../icons/RightButton";

interface HorizontallyScrollableDivProps {
  children: React.ReactNode;
}

const HorizontallyScrollableDiv: React.FC<HorizontallyScrollableDivProps> = ({
  children,
}) => {
  const [scrollableDivRef, setScrollableDivRef] =
    React.useState<HTMLDivElement | null>(null);
  const [showLeftArrow, setShowLeftArrow] = React.useState(false);
  const [showRightArrow, setShowRightArrow] = React.useState(false);

  const handleHorizontalScroll = (direction: "left" | "right") => {
    if (scrollableDivRef) {
      const scrollAmount =
        direction === "right"
          ? scrollableDivRef.scrollLeft + 420
          : scrollableDivRef.scrollLeft - 420;
      scrollableDivRef.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const updateArrowsVisibility = React.useCallback(() => {
    if (scrollableDivRef) {
      setShowLeftArrow(scrollableDivRef.scrollLeft !== 0);
      setShowRightArrow(
        scrollableDivRef.scrollLeft + scrollableDivRef.offsetWidth <
          scrollableDivRef.scrollWidth
      );
    }
  }, [scrollableDivRef]);

  React.useEffect(() => {
    updateArrowsVisibility();

    const resizeObserver = new ResizeObserver(updateArrowsVisibility);

    if (scrollableDivRef) {
      resizeObserver.observe(scrollableDivRef);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [scrollableDivRef, updateArrowsVisibility]);

  return (
    <div className="relative">
      <div
        className="flex flex-1 flex-row overflow-x-scroll no-scrollbar relative"
        ref={setScrollableDivRef}
        onScroll={updateArrowsVisibility}
      >
        {children}
      </div>
      <button
        className={cn(
          "z-10 absolute top-1/2 left-0 p-2 bg-dark/30 rounded-r-lg transform -translate-y-1/2 transition duration-300 ease-in-out hover:bg-dark/50 hover:cursor-pointer",
          {
            hidden: !showLeftArrow,
          }
        )}
        onClick={() => handleHorizontalScroll("left")}
        aria-label="Scroll left"
      >
        <LeftButton />
      </button>

      <button
        className={cn(
          "z-10 absolute top-1/2 right-0 p-2 bg-dark/30 rounded-l-lg transform -translate-y-1/2 transition duration-200 ease-in-out hover:bg-dark/50 hover:cursor-pointer",
          {
            hidden: !showRightArrow,
          }
        )}
        onClick={() => handleHorizontalScroll("right")}
        aria-label="Scroll right"
      >
        <RightButton />
      </button>
    </div>
  );
};

export default HorizontallyScrollableDiv;
