interface Skill {
  type: string;
  description?: string;
}

interface Stats {
  armor: number;
  success?: number;
  power?: number;
  uses?: number;
  charge?: number;
  radiation?: number;
  propulsion?: number;
  evasion?: number;
  defense?: number;
  proximity?: number;
  remoteness?: number;
}

interface SpriteCoordinates {
  width: number;
  height: number;
  x: number;
  y: number;
  top: number;
  left: number;
  animation: number;
}

interface Sprite {
  head?: SpriteCoordinates;
  upperArmRight?: SpriteCoordinates;
  lowerArmRight?: SpriteCoordinates;
  upperArmLeft?: SpriteCoordinates;
  lowerArmLeft?: SpriteCoordinates;
  upperLegLeft?: SpriteCoordinates;
  lowerLegLeft?: SpriteCoordinates;
  upperLegRight?: SpriteCoordinates;
  lowerLegRight?: SpriteCoordinates;
  lowerBody?: SpriteCoordinates;
  upperBody?: SpriteCoordinates;
}

export interface Medaparts {
  name: string;
  description: string;
  model: string;
  part: "head" | "right arm" | "left arm" | "legs";
  skill: Skill;
  medal: string;
  scope: string;
  gender: string;
  stats: Stats;
  sprite: Sprite;
}

export interface Medabot {
  head: string;
  right: string;
  left: string;
  legs: string;
}

export const metabee: Medabot = {
  head: "missile",
  right: "revolver",
  left: "submachingun",
  legs: "ochitsuka",
};

export const tinpetMale: Medabot = {
  head: "tinpet male head",
  right: "tinpet male right arm",
  left: "tinpet male left arm",
  legs: "tinpet male legs",
};

const medaParts: Medaparts[] = [
  // Metabee
  {
    name: "missile",
    description: "(Missile) 100% hit rate and chain reaction damage",
    model: "KBT-1",
    part: "head",
    skill: {
      type: "shoot",
      description: "A normal shooting attack with no penalty afterwards.",
    },
    medal: "shoot",
    scope: "remoteness",
    gender: "male",
    stats: {
      armor: 35,
      success: 24,
      power: 32,
      uses: 4,
    },
    sprite: {
      head: {
        width: 30,
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
    name: "revolver",
    description: "(Rifle) A quick CRG/RAD shooting attack.",
    model: "KBT-1",
    part: "right arm",
    skill: {
      type: "shoot",
      description: "A normal shooting attack with no penalty afterwards.",
    },
    medal: "shoot",
    scope: "remoteness",
    gender: "male",
    stats: {
      armor: 30,
      success: 36,
      power: 19,
      charge: 4,
      radiation: 3,
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
    name: "submachingun",
    description: "(Chain Guin) A quick CRG/RAD shooting attack.",
    model: "KBT-1",
    part: "left arm",
    skill: {
      type: "aim shot",
      description:
        "A shooting attack with high chance o a critical hit. Afterwards user cannot evade.",
    },
    medal: "shoot",
    scope: "remoteness",
    gender: "male",
    stats: {
      armor: 30,
      success: 10,
      power: 36,
      charge: 5,
      radiation: 4,
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
    name: "ochitsuka",
    description: 'Best when battling in "Grasslands" & "Forest" fields.',
    model: "KBT-1",
    part: "legs",
    skill: {
      type: "two legged",
    },
    medal: "shoot",
    scope: "leg type marks",
    gender: "male",
    stats: {
      armor: 45,
      propulsion: 43,
      evasion: 17,
      defense: 42,
      proximity: 10,
      remoteness: 21,
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

  // Tinpet
  {
    name: "tinpet male head",
    description: "",
    model: "",
    part: "head",
    skill: {
      type: "",
      description: "",
    },
    medal: "",
    scope: "",
    gender: "male",
    stats: {
      armor: 0,
      success: 0,
      power: 0,
      uses: 0,
    },
    sprite: {
      head: {
        width: 19,
        height: 18,
        x: 849,
        y: 114,
        top: 12,
        left: 11,
        animation: 1,
      },
      upperBody: {
        width: 16,
        height: 14,
        x: 848,
        y: 92,
        top: 29,
        left: 11,
        animation: 2,
      },
    },
  },
  {
    name: "tinpet male right arm",
    description: "",
    model: "",
    part: "right arm",
    skill: {
      type: "",
      description: "",
    },
    medal: "",
    scope: "",
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
        x: 865,
        y: 98,
        top: 24,
        left: 0,
        animation: 3,
      },

      lowerArmRight: {
        width: 12,
        height: 22,
        x: 864,
        y: 77,
        top: 43,
        left: 2,
        animation: 5,
      },
    },
  },
  {
    name: "tinpet male left arm",
    description: "",
    model: "",
    part: "left arm",
    skill: {
      type: "",
      description: "",
    },
    medal: "",
    scope: "",
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
        height: 15,
        x: 831,
        y: 94,
        top: 28,
        left: 22,
        animation: 3,
      },
      lowerArmLeft: {
        width: 17,
        height: 19,
        x: 824,
        y: 77,
        top: 43,
        left: 29,
        animation: 5,
      },
    },
  },
  {
    name: "tinpet male legs",
    description: "",
    model: "",
    part: "legs",
    skill: {
      type: "",
    },
    medal: "",
    scope: "",
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
        height: 11,
        x: 848,
        y: 75,
        top: 43,
        left: 11,
        animation: 4,
      },
      upperLegLeft: {
        width: 8,
        height: 12,
        x: 834,
        y: 61,
        top: 49,
        left: 21,
        animation: 1,
      },
      lowerLegLeft: {
        width: 21,
        height: 21,
        x: 832,
        y: 44,
        top: 61,
        left: 21,
        animation: 0,
      },
      upperLegRight: {
        width: 8,
        height: 12,
        x: 851,
        y: 61,
        top: 49,
        left: 11,
        animation: 1,
      },
      lowerLegRight: {
        width: 16,
        height: 22,
        x: 853,
        y: 44,
        top: 61,
        left: 11,
        animation: 0,
      },
    },
  },
  // Peppercat
  {
    name: "Light Circuit",
    description: "",
    model: "",
    part: "head",
    skill: {
      type: "",
      description: "",
    },
    medal: "",
    scope: "",
    gender: "male",
    stats: {
      armor: 0,
      success: 0,
      power: 0,
      uses: 0,
    },
    sprite: {
      head: {
        width: 23,
        height: 27,
        x: 58,
        y: 1141,
        top: 2,
        left: 8,
        animation: 1,
      },
      upperBody: {
        width: 15,
        height: 14,
        x: 53,
        y: 1113,
        top: 29,
        left: 11,
        animation: 2,
      },
    },
  },
  {
    name: "Light Jab",
    description: "",
    model: "",
    part: "right arm",
    skill: {
      type: "",
      description: "",
    },
    medal: "",
    scope: "",
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
        width: 13,
        height: 16,
        x: 68,
        y: 1114,
        top: 27,
        left: 3,
        animation: 3,
      },

      lowerArmRight: {
        width: 16,
        height: 23,
        x: 76,
        y: 1097,
        top: 43,
        left: -2,
        animation: 5,
      },
    },
  },
  {
    name: "Light Blow",
    description: "",
    model: "",
    part: "left arm",
    skill: {
      type: "",
      description: "",
    },
    medal: "",
    scope: "",
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
        width: 12,
        height: 16,
        x: 36,
        y: 1114,
        top: 28,
        left: 22,
        animation: 3,
      },
      lowerArmLeft: {
        width: 16,
        height: 22,
        x: 29,
        y: 1097,
        top: 43,
        left: 27,
        animation: 5,
      },
    },
  },
  {
    name: "Quick Alert",
    description: "",
    model: "",
    part: "legs",
    skill: {
      type: "",
    },
    medal: "",
    scope: "",
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
        height: 11,
        x: 54,
        y: 1097,
        top: 43,
        left: 11,
        animation: 4,
      },
      upperLegLeft: {
        width: 8,
        height: 12,
        x: 56,
        y: 1082,
        top: 49,
        left: 21,
        animation: 1,
      },
      lowerLegLeft: {
        width: 19,
        height: 20,
        x: 39,
        y: 1068,
        top: 61,
        left: 19,
        animation: 0,
      },
      upperLegRight: {
        width: 8,
        height: 12,
        x: 56,
        y: 1082,
        top: 49,
        left: 11,
        animation: 1,
      },
      lowerLegRight: {
        width: 16,
        height: 23,
        x: 59,
        y: 1068,
        top: 61,
        left: 9,
        animation: 0,
      },
    },
  },
  // Rokusho
  {
    name: "Antenna",
    description: "",
    model: "",
    part: "head",
    skill: {
      type: "",
      description: "",
    },
    medal: "",
    scope: "",
    gender: "male",
    stats: {
      armor: 0,
      success: 0,
      power: 0,
      uses: 0,
    },
    sprite: {
      head: {
        width: 24,
        height: 29,
        x: 677,
        y: 1142,
        top: 1,
        left: 7,
        animation: 1,
      },
      upperBody: {
        width: 15,
        height: 14,
        x: 671,
        y: 1112,
        top: 29,
        left: 11,
        animation: 2,
      },
    },
  },
  {
    name: "Chanbara Sword",
    description: "",
    model: "",
    part: "right arm",
    skill: {
      type: "",
      description: "",
    },
    medal: "",
    scope: "",
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
        width: 18,
        height: 23,
        x: 691,
        y: 1121,
        top: 20,
        left: -3,
        animation: 3,
      },

      lowerArmRight: {
        width: 13,
        height: 30,
        x: 687,
        y: 1096,
        top: 43,
        left: 2,
        animation: 5,
      },
    },
  },
  {
    name: "Picopeco Hammer",
    description: "",
    model: "",
    part: "left arm",
    skill: {
      type: "",
      description: "",
    },
    medal: "",
    scope: "",
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
        width: 14,
        height: 23,
        x: 654,
        y: 1122,
        top: 21,
        left: 23,
        animation: 3,
      },
      lowerArmLeft: {
        width: 14,
        height: 18,
        x: 648,
        y: 1097,
        top: 43,
        left: 28,
        animation: 5,
      },
    },
  },
  {
    name: "Tatacker",
    description: "",
    model: "",
    part: "legs",
    skill: {
      type: "",
    },
    medal: "",
    scope: "",
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
        height: 12,
        x: 672,
        y: 1095,
        top: 43,
        left: 11,
        animation: 4,
      },
      upperLegLeft: {
        width: 8,
        height: 12,
        x: 672,
        y: 1081,
        top: 49,
        left: 20,
        animation: 1,
      },
      lowerLegLeft: {
        width: 19,
        height: 22,
        x: 657,
        y: 1066,
        top: 60,
        left: 19,
        animation: 0,
      },
      upperLegRight: {
        width: 8,
        height: 12,
        x: 662,
        y: 1081,
        top: 49,
        left: 11,
        animation: 1,
      },
      lowerLegRight: {
        width: 17,
        height: 24,
        x: 677,
        y: 1067,
        top: 60,
        left: 10,
        animation: 0,
      },
    },
  },

  // TinpetFemale

  {
    name: "0.7256198809089185",
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
        width: 30,
        height: 24,
        x: 772,
        y: 118,
        top: 10,
        left: 1,
        animation: 1,
      },
      upperBody: {
        width: 16,
        height: 14,
        x: 760,
        y: 93,
        top: 29,
        left: 11,
        animation: 2,
      },
    },
  },
  {
    name: "0.26987990726708055",
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
        width: 8,
        height: 15,
        x: 772,
        y: 92,
        top: 29,
        left: 7,
        animation: 3,
      },
      lowerArmRight: {
        width: 9,
        height: 22,
        x: 778,
        y: 75,
        top: 43,
        left: 3,
        animation: 5,
      },
    },
  },
  {
    name: "0.6610583467108939",
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
        width: 9,
        height: 15,
        x: 741,
        y: 93,
        top: 29,
        left: 23,
        animation: 3,
      },
      lowerArmLeft: {
        width: 11,
        height: 19,
        x: 735,
        y: 76,
        top: 42,
        left: 30,
        animation: 5,
      },
    },
  },
  {
    name: "0.37802178269289",
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
        width: 12,
        height: 11,
        x: 757,
        y: 76,
        top: 43,
        left: 14,
        animation: 4,
      },
      upperLegLeft: {
        width: 8,
        height: 12,
        x: 747,
        y: 62,
        top: 50,
        left: 21,
        animation: 1,
      },
      lowerLegLeft: {
        width: 18,
        height: 20,
        x: 745,
        y: 47,
        top: 62,
        left: 21,
        animation: 0,
      },
      upperLegRight: {
        width: 8,
        height: 12,
        x: 747,
        y: 62,
        top: 50,
        left: 12,
        animation: 1,
      },
      lowerLegRight: {
        width: 16,
        height: 23,
        x: 763,
        y: 47,
        top: 62,
        left: 12,
        animation: 0,
      },
    },
  },

  // Cyandog
  {
    name: "0.01601745186945247",
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
        width: 22,
        height: 27,
        x: 499,
        y: 1142,
        top: 2,
        left: 8,
        animation: 1,
      },
      upperBody: {
        width: 16,
        height: 14,
        x: 497,
        y: 1114,
        top: 29,
        left: 11,
        animation: 2,
      },
    },
  },
  {
    name: "0.9132680716872104",
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
        width: 13,
        height: 16,
        x: 513,
        y: 1116,
        top: 27,
        left: 2,
        animation: 3,
      },
      lowerArmRight: {
        width: 15,
        height: 28,
        x: 517,
        y: 1098,
        top: 43,
        left: 1,
        animation: 5,
      },
    },
  },
  {
    name: "0.9732283451437485",
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
        width: 13,
        height: 16,
        x: 479,
        y: 1116,
        top: 27,
        left: 22,
        animation: 3,
      },
      lowerArmLeft: {
        width: 17,
        height: 25,
        x: 474,
        y: 1098,
        top: 43,
        left: 26,
        animation: 5,
      },
    },
  },
  {
    name: "0.8865823681000378",
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
        height: 12,
        x: 496,
        y: 1098,
        top: 43,
        left: 11,
        animation: 4,
      },
      upperLegLeft: {
        width: 8,
        height: 12,
        x: 499,
        y: 1084,
        top: 50,
        left: 21,
        animation: 1,
      },
      lowerLegLeft: {
        width: 21,
        height: 21,
        x: 481,
        y: 1071,
        top: 62,
        left: 20,
        animation: 0,
      },
      upperLegRight: {
        width: 8,
        height: 12,
        x: 499,
        y: 1084,
        top: 50,
        left: 12,
        animation: 1,
      },
      lowerLegRight: {
        width: 20,
        height: 24,
        x: 504,
        y: 1071,
        top: 62,
        left: 9,
        animation: 0,
      },
    },
  },
];

export default medaParts;
