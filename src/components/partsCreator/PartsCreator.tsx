import styled from "@emotion/styled";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import ReactJson from "react-json-view";
import { Medabot, Medaparts } from "../../dataBase/medaParts";
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

export default function PartsCreator({
  scale = 1,
  animated,
  medaparts,
}: MedabotSpriteProps) {
  const [medaPartsObject, setMedaPartsObject] = useState<Medaparts[]>([
    {
      name: String(Math.random()),
      description: "xyz",
      model: "xyz",
      part: "head",
      skill: {
        type: "xyz",
        description: "xyz",
      },
      medal: "xyz",
      scope: "remoteness",
      gender: "male",
      stats: {
        armor: 0,
        success: 0,
        power: 0,
        uses: 0,
      },
      sprite: {
        head: {
          width: 29,
          height: 29,
          x: 590,
          y: 1147,
          top: 0,
          left: 11,
          animation: 1,
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
      },
    },
    {
      name: String(Math.random()),
      description: "xyz",
      model: "xyz",
      part: "right arm",
      skill: {
        type: "xyz",
        description: "xyz",
      },
      medal: "shoot",
      scope: "remoteness",
      gender: "male",
      stats: {
        armor: 0,
        success: 0,
        power: 0,
        charge: 0,
        radiation: 0,
      },
      sprite: {
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
      },
    },
    {
      name: String(Math.random()),
      description: "xyz",
      model: "xyz",
      part: "left arm",
      skill: {
        type: "axyz",
        description: "xyz",
      },
      medal: "xyz",
      scope: "remoteness",
      gender: "male",
      stats: {
        armor: 0,
        success: 0,
        power: 0,
        charge: 0,
        radiation: 0,
      },
      sprite: {
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
      },
    },
    {
      name: String(Math.random()),
      description: "xyz",
      model: "xyz",
      part: "legs",
      skill: {
        type: "xyz",
      },
      medal: "xyz",
      scope: "xyz",
      gender: "male",
      stats: {
        armor: 0,
        propulsion: 0,
        evasion: 0,
        defense: 0,
        proximity: 0,
        remoteness: 0,
      },
      sprite: {
        lowerBody: {
          width: 16,
          height: 16,
          x: 586,
          y: 1097,
          top: 43,
          left: 11,
          animation: 4,
        },
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
      },
    },
  ]);

  const dbSpritePosition = (_medaparts: Medaparts[]): Sprite => {
    const newSprite: any = {};
    _medaparts.forEach((mp) => {
      if (mp.part === "legs") {
        newSprite.lowerLegLeft = mp.sprite.lowerLegLeft;
        newSprite.upperLegLeft = mp.sprite.upperLegLeft;
        newSprite.upperLegRight = mp.sprite.upperLegRight;
        newSprite.lowerLegRight = mp.sprite.lowerLegRight;
        newSprite.lowerBody = mp.sprite.lowerBody;
      }
      if (mp.part === "left arm") {
        newSprite.lowerArmLeft = mp.sprite.lowerArmLeft;
        newSprite.upperArmLeft = mp.sprite.upperArmLeft;
        newSprite.upperArmLeft = mp.sprite.upperArmLeft;
        newSprite.lowerArmLeft = mp.sprite.lowerArmLeft;
      }
      if (mp.part === "right arm") {
        newSprite.lowerArmRight = mp.sprite.lowerArmRight;
        newSprite.upperArmRight = mp.sprite.upperArmRight;
        newSprite.upperArmRight = mp.sprite.upperArmRight;
        newSprite.lowerArmRight = mp.sprite.lowerArmRight;
      }
      if (mp.part === "head") {
        newSprite.head = mp.sprite.head;
        newSprite.upperBody = mp.sprite.upperBody;
      }
    });
    // TODO: any
    /*  // newSprite.lowerLegLeft = _medaparts.filter(mp=>()) legs[0].sprite.lowerLegLeft;
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
    )[0].sprite.lowerArmRight; */

    const fullSprite: Sprite = newSprite;

    return fullSprite;
  };

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
        background: url("https://firebasestorage.googleapis.com/v0/b/medabotsapp.appspot.com/o/main-spritesv2.png?alt=media&token=2c58ce34-7214-4a42-9f93-1737ff7b522a")
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
      meda.push(<Part />);
    });
    return meda;
  };
  const medaPart = (_spritePosition: Sprite) => {
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
        background: url("https://firebasestorage.googleapis.com/v0/b/medabotsapp.appspot.com/o/main-spritesv2.png?alt=media&token=2c58ce34-7214-4a42-9f93-1737ff7b522a")
          ${_spritePosition[key as keyof Sprite].x * scale}px
          ${_spritePosition[key as keyof Sprite].y * scale}px;
        image-rendering: pixelated;
        background-size: ${mainSpritesWidth * scale}px;
        position: absolute;
        top: 0;
        left: 0;
        animation: ${animated
          ? `breathing-${_spritePosition[key as keyof Sprite].animation} 2s
        ease-in-out infinite;`
          : "none"};
      `;
      meda.push(<Part />);
    });
    return meda;
  };

  const [
    Head,
    UpperBody,
    LowerArmRight,
    UpperArmRight,
    LowerArmLeft,
    UpperArmLeft,
    LowerLegLeft,
    UpperLegLeft,
    UpperLegRight,
    LowerLegRight,
    LowerBody,
  ] = medabot(dbSpritePosition(medaPartsObject));

  const [
    HeadPart,
    UpperBodyPart,
    LowerArmRightPart,
    UpperArmRightPart,
    LowerArmLeftPart,
    UpperArmLeftPart,
    LowerLegLeftPart,
    UpperLegLeftPart,
    UpperLegRightPart,
    LowerLegRightPart,
    LowerBodyPart,
  ] = medaPart(dbSpritePosition(medaPartsObject));

  const medapartsArray = [
    {
      element: HeadPart,
      name: "head",
      height: medaPartsObject.find((mp) => mp.part === "head")?.sprite.head
        ?.height,
      width: medaPartsObject.find((mp) => mp.part === "head")?.sprite.head
        ?.width,
      x: medaPartsObject.find((mp) => mp.part === "head")?.sprite.head?.x,
      y: medaPartsObject.find((mp) => mp.part === "head")?.sprite.head?.y,
      top: medaPartsObject.find((mp) => mp.part === "head")?.sprite.head?.top,
      left: medaPartsObject.find((mp) => mp.part === "head")?.sprite.head?.left,
    },
    {
      element: UpperBodyPart,
      name: "upperBody",
      height: medaPartsObject.find((mp) => mp.part === "head")?.sprite.upperBody
        ?.height,
      width: medaPartsObject.find((mp) => mp.part === "head")?.sprite.upperBody
        ?.width,
      x: medaPartsObject.find((mp) => mp.part === "head")?.sprite.upperBody?.x,
      y: medaPartsObject.find((mp) => mp.part === "head")?.sprite.upperBody?.y,
      top: medaPartsObject.find((mp) => mp.part === "head")?.sprite.upperBody
        ?.top,
      left: medaPartsObject.find((mp) => mp.part === "head")?.sprite.upperBody
        ?.left,
    },
    {
      element: LowerArmRightPart,
      name: "lowerArmRight",
      height: medaPartsObject.find((mp) => mp.part === "right arm")?.sprite
        .lowerArmRight?.height,
      width: medaPartsObject.find((mp) => mp.part === "right arm")?.sprite
        .lowerArmRight?.width,
      x: medaPartsObject.find((mp) => mp.part === "right arm")?.sprite
        .lowerArmRight?.x,
      y: medaPartsObject.find((mp) => mp.part === "right arm")?.sprite
        .lowerArmRight?.y,
      top: medaPartsObject.find((mp) => mp.part === "right arm")?.sprite
        .lowerArmRight?.top,
      left: medaPartsObject.find((mp) => mp.part === "right arm")?.sprite
        .lowerArmRight?.left,
    },
    {
      element: UpperArmRightPart,
      name: "upperArmRight",
      height: medaPartsObject.find((mp) => mp.part === "right arm")?.sprite
        .upperArmRight?.height,
      width: medaPartsObject.find((mp) => mp.part === "right arm")?.sprite
        .upperArmRight?.width,
      x: medaPartsObject.find((mp) => mp.part === "right arm")?.sprite
        .upperArmRight?.x,
      y: medaPartsObject.find((mp) => mp.part === "right arm")?.sprite
        .upperArmRight?.y,
      top: medaPartsObject.find((mp) => mp.part === "right arm")?.sprite
        .upperArmRight?.top,
      left: medaPartsObject.find((mp) => mp.part === "right arm")?.sprite
        .upperArmRight?.left,
    },
    {
      element: LowerArmLeftPart,
      name: "lowerArmLeft",
      height: medaPartsObject.find((mp) => mp.part === "left arm")?.sprite
        .lowerArmLeft?.height,
      width: medaPartsObject.find((mp) => mp.part === "left arm")?.sprite
        .lowerArmLeft?.width,
      x: medaPartsObject.find((mp) => mp.part === "left arm")?.sprite
        .lowerArmLeft?.x,
      y: medaPartsObject.find((mp) => mp.part === "left arm")?.sprite
        .lowerArmLeft?.y,
      top: medaPartsObject.find((mp) => mp.part === "left arm")?.sprite
        .lowerArmLeft?.top,
      left: medaPartsObject.find((mp) => mp.part === "left arm")?.sprite
        .lowerArmLeft?.left,
    },
    {
      element: UpperArmLeftPart,
      name: "upperArmLeft",
      height: medaPartsObject.find((mp) => mp.part === "left arm")?.sprite
        .upperArmLeft?.height,
      width: medaPartsObject.find((mp) => mp.part === "left arm")?.sprite
        .upperArmLeft?.width,
      x: medaPartsObject.find((mp) => mp.part === "left arm")?.sprite
        .upperArmLeft?.x,
      y: medaPartsObject.find((mp) => mp.part === "left arm")?.sprite
        .upperArmLeft?.y,
      top: medaPartsObject.find((mp) => mp.part === "left arm")?.sprite
        .upperArmLeft?.top,
      left: medaPartsObject.find((mp) => mp.part === "left arm")?.sprite
        .upperArmLeft?.left,
    },
    {
      element: LowerLegLeftPart,
      name: "lowerLegLeft",
      height: medaPartsObject.find((mp) => mp.part === "legs")?.sprite
        .lowerLegLeft?.height,
      width: medaPartsObject.find((mp) => mp.part === "legs")?.sprite
        .lowerLegLeft?.width,
      x: medaPartsObject.find((mp) => mp.part === "legs")?.sprite.lowerLegLeft
        ?.x,
      y: medaPartsObject.find((mp) => mp.part === "legs")?.sprite.lowerLegLeft
        ?.y,
      top: medaPartsObject.find((mp) => mp.part === "legs")?.sprite.lowerLegLeft
        ?.top,
      left: medaPartsObject.find((mp) => mp.part === "legs")?.sprite
        .lowerLegLeft?.left,
    },
    {
      element: UpperLegLeftPart,
      name: "upperLegLeft",
      height: medaPartsObject.find((mp) => mp.part === "legs")?.sprite
        .upperLegLeft?.height,
      width: medaPartsObject.find((mp) => mp.part === "legs")?.sprite
        .upperLegLeft?.width,
      x: medaPartsObject.find((mp) => mp.part === "legs")?.sprite.upperLegLeft
        ?.x,
      y: medaPartsObject.find((mp) => mp.part === "legs")?.sprite.upperLegLeft
        ?.y,
      top: medaPartsObject.find((mp) => mp.part === "legs")?.sprite.upperLegLeft
        ?.top,
      left: medaPartsObject.find((mp) => mp.part === "legs")?.sprite
        .upperLegLeft?.left,
    },
    {
      element: UpperLegRightPart,
      name: "upperLegRight",
      height: medaPartsObject.find((mp) => mp.part === "legs")?.sprite
        .upperLegRight?.height,
      width: medaPartsObject.find((mp) => mp.part === "legs")?.sprite
        .upperLegRight?.width,
      x: medaPartsObject.find((mp) => mp.part === "legs")?.sprite.upperLegRight
        ?.x,
      y: medaPartsObject.find((mp) => mp.part === "legs")?.sprite.upperLegRight
        ?.y,
      top: medaPartsObject.find((mp) => mp.part === "legs")?.sprite
        .upperLegRight?.top,
      left: medaPartsObject.find((mp) => mp.part === "legs")?.sprite
        .upperLegRight?.left,
    },
    {
      element: LowerLegRightPart,
      name: "lowerLegRight",
      height: medaPartsObject.find((mp) => mp.part === "legs")?.sprite
        .lowerLegRight?.height,
      width: medaPartsObject.find((mp) => mp.part === "legs")?.sprite
        .lowerLegRight?.width,
      x: medaPartsObject.find((mp) => mp.part === "legs")?.sprite.lowerLegRight
        ?.x,
      y: medaPartsObject.find((mp) => mp.part === "legs")?.sprite.lowerLegRight
        ?.y,
      top: medaPartsObject.find((mp) => mp.part === "legs")?.sprite
        .lowerLegRight?.top,
      left: medaPartsObject.find((mp) => mp.part === "legs")?.sprite
        .lowerLegRight?.left,
    },
    {
      element: LowerBodyPart,
      name: "lowerBody",
      height: medaPartsObject.find((mp) => mp.part === "legs")?.sprite.lowerBody
        ?.height,
      width: medaPartsObject.find((mp) => mp.part === "legs")?.sprite.lowerBody
        ?.width,
      x: medaPartsObject.find((mp) => mp.part === "legs")?.sprite.lowerBody?.x,
      y: medaPartsObject.find((mp) => mp.part === "legs")?.sprite.lowerBody?.y,
      top: medaPartsObject.find((mp) => mp.part === "legs")?.sprite.lowerBody
        ?.top,
      left: medaPartsObject.find((mp) => mp.part === "legs")?.sprite.lowerBody
        ?.left,
    },
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    param: "height" | "width" | "x" | "y" | "top" | "left",
    partName: string
  ) => {
    console.log("New Value", e.target.value);
    console.log("param", param);
    console.log("partName", partName);

    setMedaPartsObject((prev) => {
      const newPrev: Medaparts[] = prev.map((pre) => {
        if (pre.sprite[partName as keyof typeof pre.sprite]) {
          console.log("ingreso con", pre);
          let newPre: Medaparts = { ...pre };
          newPre = {
            ...pre,
            sprite: {
              ...pre.sprite,
              [partName]: {
                ...pre.sprite[partName as keyof typeof pre.sprite],
                [param]: Number(e.target.value),
              },
            },
          };
          console.log("newPre", newPre);
          return newPre;
        }
        return pre;
      });
      //   const obj = [...prev];
      //   obj.find((ob) => ob.sprite[partName as keyof typeof ob.sprite]);

      return newPrev;
    });
  };

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
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
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ height: "90vh", minHeight: "300px", overflow: "scroll" }}>
          {medapartsArray.map((mp) => (
            <Box key={`${mp.name}`}>
              <Box
                sx={{
                  m: 2,
                  position: "relative",
                  height: mp.height
                    ? `${mp.height * scale}px`
                    : `${30 * scale}px`,
                  width: mp.width ? `${mp.width * scale}px` : `${30 * scale}px`,
                  backgroundColor: "fuchsia",
                }}
              >
                {mp.element}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mx: 4,
                  my: 2,
                  justifyContent: "space-between",
                }}
              >
                <Typography>{mp.name}</Typography>
                <TextField
                  size="small"
                  sx={{ mt: 2 }}
                  label="height"
                  value={mp.height}
                  type="number"
                  onChange={(e) => handleChange(e, "height", mp.name)}
                />
                <TextField
                  size="small"
                  sx={{ mt: 2 }}
                  label="width"
                  value={mp.width}
                  type="number"
                  onChange={(e) => handleChange(e, "width", mp.name)}
                />
                <TextField
                  size="small"
                  sx={{ mt: 2 }}
                  label="x"
                  value={mp.x}
                  type="number"
                  onChange={(e) => handleChange(e, "x", mp.name)}
                />
                <TextField
                  size="small"
                  sx={{ mt: 2 }}
                  label="y"
                  value={mp.y}
                  type="number"
                  onChange={(e) => handleChange(e, "y", mp.name)}
                />
                <TextField
                  size="small"
                  sx={{ mt: 2 }}
                  label="top"
                  value={mp.top}
                  type="number"
                  onChange={(e) => handleChange(e, "top", mp.name)}
                />
                <TextField
                  size="small"
                  sx={{ mt: 2 }}
                  label="left"
                  value={mp.left}
                  type="number"
                  onChange={(e) => handleChange(e, "left", mp.name)}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Grid>
      <Box sx={{ m: 2 }}>
        <ReactJson
          style={{ padding: "16px" }}
          src={medaPartsObject}
          theme="grayscale"
          displayDataTypes={false}
          displayObjectSize={false}
        />
      </Box>
    </Grid>
  );
}

PartsCreator.defaultProps = {
  scale: 1,
};
