interface Medaparts {
  name: string
  description: string
  model: string
  part: 'head' | 'right arm' | 'left arm' | 'legs'
  skill: Skill
  medal: string
  scope: string
  gender: string
  stats: Stats
  image?: string
}

interface Skill {
  type: string
  description?: string
}

interface Stats {
  armor: number
  success?: number
  power?: number
  uses?: number
  charge?: number
  radiation?: number
  propulsion?: number
  evasion?: number
  defense?: number
  proximity?: number
  remoteness?: number
}

const medaParts: Medaparts[] = [
  {
    name: 'missile',
    description: '(Missile) 100% hit rate and chain reaction damage',
    model: 'KBT-1',
    part: 'head',
    skill: { type: 'shoot', description: 'A normal shooting attack with no penalty afterwards.' },
    medal: 'shoot',
    scope: 'remoteness',
    gender: 'male',
    stats: {
      armor: 35,
      success: 24,
      power: 32,
      uses: 4
    },
    image: ''
  },
  {
    name: 'revolver',
    description: '(Rifle) A quick CRG/RAD shooting attack.',
    model: 'KBT-1',
    part: 'right arm',
    skill: { type: 'shoot', description: 'A normal shooting attack with no penalty afterwards.' },
    medal: 'shoot',
    scope: 'remoteness',
    gender: 'male',
    stats: {
      armor: 30,
      success: 36,
      power: 19,
      charge: 4,
      radiation: 3
    }
  },
  {
    name: 'submachingun',
    description: '(Chain Guin) A quick CRG/RAD shooting attack.',
    model: 'KBT-1',
    part: 'left arm',
    skill: {
      type: 'aim shot',
      description: 'A shooting attack with high chance o a critical hit. Afterwards user cannot evade.'
    },
    medal: 'shoot',
    scope: 'remoteness',
    gender: 'male',
    stats: {
      armor: 30,
      success: 10,
      power: 36,
      charge: 5,
      radiation: 4
    }
  },
  {
    name: 'ochitsuka',
    description: 'Best when battling in "Grasslands" & "Forest" fields.',
    model: 'KBT-1',
    part: 'legs',
    skill: {
      type: 'two legged'
    },
    medal: 'shoot',
    scope: 'leg type marks',
    gender: 'male',
    stats: {
      armor: 45,
      propulsion: 43,
      evasion: 17,
      defense: 42,
      proximity: 10,
      remoteness: 21
    }
  }
]

export default medaParts
