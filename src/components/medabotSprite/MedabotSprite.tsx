import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { width as mainSpritesWidth } from "../../static/images/mainSprites.json";

interface Position {
  width: number;
  height: number;
  x: number;
  y: number;
  top: number;
  left: number;
  animation: number;
}

interface Sprite {
  head: Position;
  upperBody: Position;
  lowerBody: Position;
  upperArmRight: Position;
  upperArmLeft: Position;
  lowerArmRight: Position;
  lowerArmLeft: Position;
  upperLegRight: Position;
  upperLegLeft: Position;
  lowerLegRight: Position;
  lowerLegLeft: Position;
}

// METABEE
/* const spriteSize = { width: 45, height: 83 };
const spritePosition: Sprite = {
  upperLegLeft: {
    width: 8,
    height: 13,
    x: 589,
    y: 1078,
    top: 49,
    left: 21,
    animation: 1,
  },
  lowerLegLeft: {
    width: 21,
    height: 21,
    x: 557,
    y: 1067,
    top: 62,
    left: 19,
    animation: 0,
  },
  upperArmLeft: {
    width: 10,
    height: 22,
    x: 548,
    y: 1118,
    top: 21,
    left: 22,
    animation: 3,
  },
  lowerArmLeft: {
    width: 17,
    height: 21,
    x: 562,
    y: 1097,
    top: 41,
    left: 28,
    animation: 5,
  },

  lowerBody: {
    width: 16,
    height: 16,
    x: 586,
    y: 1097,
    top: 43,
    left: 11,
    animation: 4,
  },
  upperLegRight: {
    width: 8,
    height: 13,
    x: 589,
    y: 1078,
    top: 49,
    left: 12,
    animation: 1,
  },

  lowerLegRight: {
    width: 19,
    height: 21,
    x: 588,
    y: 1064,
    top: 62,
    left: 9,
    animation: 0,
  },

  upperBody: {
    width: 16,
    height: 14,
    x: 583,
    y: 1113,
    top: 29,
    left: 11,
    animation: 2,
  },
  head: {
    width: 30,
    height: 29,
    x: 590,
    y: 1147,
    top: 0,
    left: 11,
    animation: 1,
  },

  upperArmRight: {
    width: 16,
    height: 21,
    x: 605,
    y: 1119,
    top: 22,
    left: 0,
    animation: 3,
  },

  lowerArmRight: {
    width: 12,
    height: 19,
    x: 602,
    y: 1096,
    top: 43,
    left: 3,
    animation: 5,
  },
}; */

const spriteSize = { width: 45, height: 83 };
const spritePosition: Sprite = {
  upperLegLeft: {
    width: 8,
    height: 13,
    x: 589,
    y: 1078,
    top: 49,
    left: 21,
    animation: 1,
  },
  lowerLegLeft: {
    width: 21,
    height: 21,
    x: 557,
    y: 1067,
    top: 62,
    left: 19,
    animation: 0,
  },
  upperArmLeft: {
    width: 10,
    height: 22,
    x: 548,
    y: 1118,
    top: 21,
    left: 22,
    animation: 3,
  },
  lowerArmLeft: {
    width: 17,
    height: 21,
    x: 562,
    y: 1097,
    top: 41,
    left: 28,
    animation: 5,
  },

  lowerBody: {
    width: 16,
    height: 16,
    x: 586,
    y: 1097,
    top: 43,
    left: 11,
    animation: 4,
  },
  upperLegRight: {
    width: 8,
    height: 13,
    x: 589,
    y: 1078,
    top: 49,
    left: 12,
    animation: 1,
  },

  lowerLegRight: {
    width: 19,
    height: 21,
    x: 588,
    y: 1064,
    top: 62,
    left: 9,
    animation: 0,
  },

  upperBody: {
    width: 16,
    height: 14,
    x: 583,
    y: 1113,
    top: 29,
    left: 11,
    animation: 2,
  },
  head: {
    width: 19,
    height: 18,
    x: 849,
    y: 114,
    top: 12,
    left: 11,
    animation: 1,
  },

  upperArmRight: {
    width: 16,
    height: 21,
    x: 605,
    y: 1119,
    top: 22,
    left: 0,
    animation: 3,
  },

  lowerArmRight: {
    width: 12,
    height: 19,
    x: 602,
    y: 1096,
    top: 43,
    left: 3,
    animation: 5,
  },
};

interface MedabotSpriteProps {
  scale?: number;
  animated?: boolean;
}

export default function MedabotSprite({
  scale = 1,
  animated,
}: MedabotSpriteProps) {
  const medabot = (_spritePosition: Sprite) => {
    const meda: JSX.Element[] = [];
    Object.keys(_spritePosition).forEach((key) => {
      const Part = styled.div`
        @keyframes breathing-1 {
          0% {
            margin-top: ${0 * scale}px;
          }
          40% {
            margin-top: ${1 * scale}px;
          }
          90% {
            margin-top: ${0.5 * scale}px;
          }
          100% {
            margin-top: ${0 * scale}px;
          }
        }
        @keyframes breathing-2 {
          0% {
            margin-top: ${0 * scale}px;
          }
          30% {
            margin-top: ${0 * scale}px;
          }
          90% {
            margin-top: ${0.5 * scale}px;
          }

          100% {
            margin-top: ${0 * scale}px;
          }
        }
        @keyframes breathing-3 {
          0% {
            margin-top: ${0 * scale}px;
          }
          10% {
            margin-top: ${0 * scale}px;
          }
          40% {
            margin-top: ${0.75 * scale}px;
          }

          100% {
            margin-top: ${0 * scale}px;
          }
        }

        @keyframes breathing-4 {
          0% {
            margin-top: ${0 * scale}px;
          }
          40% {
            margin-top: ${0 * scale}px;
          }
          80% {
            margin-top: ${0.15 * scale}px;
          }

          100% {
            margin-top: ${0 * scale}px;
          }
        }
        @keyframes breathing-5 {
          0% {
            margin-top: ${-0.75 * scale}px;
          }
          10% {
            margin-top: ${-0.75 * scale}px;
          }
          40% {
            margin-top: ${-0.25 * scale}px;
          }
          80% {
            margin-top: ${0 * scale}px;
          }
          100% {
            margin-top: ${-0.75 * scale}px;
          }
        }

        height: ${_spritePosition[key as keyof Sprite].height * scale}px;
        width: ${_spritePosition[key as keyof Sprite].width * scale}px;
        background: url("https://raw.githubusercontent.com/johannpereze/medabots-app/main/src/static/images/mainSprites.png")
          ${_spritePosition[key as keyof Sprite].x * scale}px
          ${_spritePosition[key as keyof Sprite].y * scale}px;
        image-rendering: pixelated;
        background-size: ${mainSpritesWidth * scale}px;
        position: absolute;
        top: ${_spritePosition[key as keyof Sprite].top * scale}px;
        left: ${_spritePosition[key as keyof Sprite].left * scale}px;
        animation: ${animated
          ? `breathing-${_spritePosition[key as keyof Sprite].animation} 2s
        ease-in-out infinite;`
          : "none"};
      `;
      // breathing-rotate 3s ease-in-out infinite
      meda.push(<Part />);
    });
    return meda;
  };

  const [
    LowerLegLeft,
    UpperArmLeft,
    LowerArmLeft,
    UpperLegLeft,
    LowerBody,
    UpperLegRight,
    LowerLegRight,
    UpperBody,
    Head,
    UpperArmRight,
    LowerArmRight,
  ] = medabot(spritePosition);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: spriteSize.height * scale,
          width: spriteSize.width * scale,
        }}
      >
        {LowerLegLeft}
        {UpperArmLeft}
        {LowerArmLeft}
        {UpperLegLeft}
        {LowerBody}
        {UpperLegRight}
        {LowerLegRight}
        {UpperBody}
        {Head}
        {UpperArmRight}
        {LowerArmRight}
      </Box>
    </>
  );
}

MedabotSprite.defaultProps = {
  scale: 1,
};
