"use client";
import React from "react";

export default function PointerHighlight() {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="flex items-center justify-center fixed pointer-events-none w-[200px] h-[200px] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className=" w-[100px] h-[100px] rounded-full bg-light/60" />
    </div>
  );
}
