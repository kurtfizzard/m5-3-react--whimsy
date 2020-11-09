import React from "react";
import { useSpring, animated } from "react-spring";

export const Particle = ({ angle, distance, children }) => {
  const convertDegreesToRadians = (angle) => (angle * Math.PI) / 180;

  const angleInRads = convertDegreesToRadians(angle);

  const x = Math.cos(angleInRads) * distance;
  const y = Math.sin(angleInRads) * distance;

  const positioningSpring = useSpring({
    transform: `translate(${x}px, ${y}px) scale(0)`,
    from: {
      transform: `translate (0px, 0px) scale(1)`,
    },
    config: {
      tension: 150,
      friction: 10,
    },
  });

  return (
    <animated.div style={{ ...positioningSpring }}>{children}</animated.div>
  );
};
