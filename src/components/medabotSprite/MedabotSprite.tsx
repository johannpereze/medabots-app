import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useEffect } from "react";
import medaParts, { Medabot } from "../../dataBase/medaParts";
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

const spriteSize = { width: 45, height: 83 };

interface MedabotSpriteProps {
  scale?: number;
  animated?: boolean;
  medaparts: Medabot;
}

export default function MedabotSprite({
  scale = 1,
  animated,
  medaparts,
}: MedabotSpriteProps) {
  const dbSpritePosition = (_medaparts: Medabot): Sprite => {
    // TODO: any
    const newSprite: any = {};
    newSprite.lowerLegLeft = medaParts.filter(
      (mp) => mp.name === _medaparts.legs
    )[0].sprite.lowerLegLeft;
    newSprite.upperArmLeft = medaParts.filter(
      (mp) => mp.name === _medaparts.left
    )[0].sprite.upperArmLeft;
    newSprite.lowerArmLeft = medaParts.filter(
      (mp) => mp.name === _medaparts.left
    )[0].sprite.lowerArmLeft;
    newSprite.upperLegLeft = medaParts.filter(
      (mp) => mp.name === _medaparts.legs
    )[0].sprite.upperLegLeft;
    newSprite.lowerBody = medaParts.filter(
      (mp) => mp.name === _medaparts.legs
    )[0].sprite.lowerBody;
    newSprite.upperLegRight = medaParts.filter(
      (mp) => mp.name === _medaparts.legs
    )[0].sprite.upperLegRight;
    newSprite.lowerLegRight = medaParts.filter(
      (mp) => mp.name === _medaparts.legs
    )[0].sprite.lowerLegRight;
    newSprite.upperBody = medaParts.filter(
      (mp) => mp.name === _medaparts.head
    )[0].sprite.upperBody;
    newSprite.head = medaParts.filter(
      (mp) => mp.name === _medaparts.head
    )[0].sprite.head;
    newSprite.upperArmRight = medaParts.filter(
      (mp) => mp.name === _medaparts.right
    )[0].sprite.upperArmRight;
    newSprite.lowerArmRight = medaParts.filter(
      (mp) => mp.name === _medaparts.right
    )[0].sprite.lowerArmRight;

    const fullSprite: Sprite = newSprite;

    console.log("fullSprite", fullSprite);
    return fullSprite;
  };

  useEffect(() => {
    dbSpritePosition(medaparts);
  }, []);

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
        background: url("https://firebasestorage.googleapis.com/v0/b/medabotsapp.appspot.com/o/main-sprites.png?alt=media&token=4430ae60-1d69-491a-80cd-160fdf585e3b")
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
  ] = medabot(dbSpritePosition(medaparts));

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
