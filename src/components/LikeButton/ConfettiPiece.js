import React from "react";
import styled from "styled-components";
import { Particle } from "./Particle";

export const ConfettiPiece = ({ angle, distance, color }) => {
  return (
    <>
      <CenteredWithinParent>
        <Particle angle={angle} distance={distance}>
          <Circle
            style={{ background: color, height: "10px", width: "10px" }}
          />
        </Particle>
      </CenteredWithinParent>
    </>
  );
};

const Circle = styled.div`
  border-radius: 50%;
`;

const CenteredWithinParent = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
