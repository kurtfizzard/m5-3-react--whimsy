import React from "react";
import styled, { keyframes } from "styled-components";

export const PoppingCircle = ({ size, color }) => {
  console.log("POPPING CIRCLE");
  return <Wrapper style={{ background: color, height: size, width: size }} />;
};

const scale = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  display: block;
  border-radius: 50%;
  animation: ${fadeIn} 1s ease-in forwards, ${scale} 1s forwards;

  position: absolute;
`;

export default PoppingCircle;
