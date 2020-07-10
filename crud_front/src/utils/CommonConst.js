export const ScreenPath = {
  TOP: { path: "/", id: "top", name: "トップページ" },
  DETAIL: { path: "/detail", id: "detail", name: "キャラクター詳細設定" },
  SKILL: { path: "/skill", id: "skill", name: "技能設定" },
  ABILITY: { path: "/ability", id: "ability", name: "能力値設定" },
  EFFECT: { path: "/effect", id: "effect", name: "エフェクト設定" },
  ITEMS: { path: "/items", id: "items", name: "武器・防具・アイテム設定" },
  ROIS: { path: "/rois", id: "rois", name: "ロイス設定" },
  COMBO: { path: "/combo", id: "combo", name: "コンボ設定" },
  PLAY: { path: "/play", id: "play", name: "プレイ用" },
};

export const titleMap = {
  app: 'ダブルクロスキャラクター管理',
  growTable: '【成長点管理表】',
  purchaseTable: '【財産点管理表】',
  weaponTable: '【武器】',
  armorTable: '【防具】',
  itemTable: '【アイテム】',
  addWeaponTable: '【武器選択】',
  addArmorTable: '【防具選択】',
  addItemTable: '【アイテム選択】',
  createComboTable: '【コンボ作成】',
};

export const mainSkillSortNum = {
  MELEE: 0,
  AVOID: 1,
  SHOOT: 2,
  PERCEPTION: 3,
  RC: 4,
  INTENTION: 5,
  NEGOTIATION: 6,
  PROCUREMENT: 7
};

export const effectSyndromeNum = {
  "general": "0",
  "angelhighlow": "1",
  "balor": "2",
  "blackdog": "3",
  "bramstoker": "4",
  "chimera": "5",
  "exile": "6",
  "hanuman": "7",
  "morpheus": "8",
  "neumann": "9",
  "orcus": "10",
  "salamander": "11",
  "solaris": "12",
};

export const abilityTableRowNum = {
  SYNDROME1: 0,
  SYNDROME2: 1,
  OPTIONAL: 2,
  INITIALVAL: 3,
  GROWVAL: 4,
  EFFECTVAL: 5,
  OTHERVAL: 6,
  TOTAL: 7
};

export const skillRow = {
  name: {
    id: "NAME",
    value: "名前"
  },
  initVal: {
    id: "INITVAL",
    value: "初期値"
  },
  growVal: {
    id: "GROWVAL",
    value: "成長値"
  },
  otherVal: {
    id: "OTHERVAL",
    value: "その他"
  },
  judgeVal: {
    id: "JUDGEVAL",
    value: "判定値"
  },
  memo: {
    id: "MEMO",
    value: "メモ"
  }
};

export const mainSkillSortName = {
  MELEE: {
    ID: "MELEE",
    NAME: "白兵"
  },
  AVOID: {
    ID: "AVOID",
    NAME: "回避"
  },
  DRIVING: {
    ID: "DRIVING",
    NAME: "運転"
  },
  SHOOT: {
    ID: "SHOOT",
    NAME: "射撃"
  },
  PERCEPTION: {
    ID: "PERCEPTION",
    NAME: "知覚"
  },
  ART: {
    ID: "ART",
    NAME: "芸術"
  },
  RC: {
    ID: "RC",
    NAME: "RC"
  },
  INTENTION: {
    ID: "INTENTION",
    NAME: "意志"
  },
  KNOWLEDGE: {
    ID: "KNOWLEDGE",
    NAME: "知識"
  },
  NEGOTIATION: {
    ID: "NEGOTIATION",
    NAME: "交渉"
  },
  PROCUREMENT: {
    ID: "PROCUREMENT",
    NAME: "調達"
  },
  INFOMATION: {
    ID: "INFOMATION",
    NAME: "情報"
  }
};

export const subSkillSortName = {
  DRIVING: {
    ID: "DRIVING",
    NAME: "運転"
  },
  ART: {
    ID: "ART",
    NAME: "芸術"
  },
  KNOWLEDGE: {
    ID: "KNOWLEDGE",
    NAME: "知識"
  },
  INFOMATION: {
    ID: "INFOMATION",
    NAME: "情報"
  }
};

export const subSkillSortArray = [
  {
    ID: "DRIVING",
    NAME: "運転"
  },
  {
    ID: "ART",
    NAME: "芸術"
  },
  {
    ID: "KNOWLEDGE",
    NAME: "知識"
  },
  {
    ID: "INFOMATION",
    NAME: "情報"
  }
];

export const abilities = {
  BODY: "body",
  SENSE: "sense",
  SPIRIT: "spirit",
  SOCIETY: "society"
}

export const abilitiesArray = [
  "body",
  "sense",
  "spirit",
   "society"
]

export const abilityRow = {
  body: {
    id: "Body",
    value: "肉体"
  },
  sense: {
    id: "Sense",
    value: "感覚"
  },
  spirit: {
    id: "Spirit",
    value: "精神"
  },
  society: {
    id: "Society",
    value: "社会"
  },
  hp: {
    id: "HP",
    value: "HP"
  },
  erosion: {
    id: "Erosion",
    value: "侵食"
  },
  action: {
    id: "Action",
    value: "行動"
  },
  move: {
    id: "Move",
    value: "移動"
  }
};

export const effectRow = {
  name: {
    id: "Name",
    value: "NM"
  },
  level: {
    id: "Level",
    value: "LV"
  },
  timing: {
    id: "Timing",
    value: "TM"
  },
  judge: {
    id: "SKILL",
    value: "SK"
  },
  target: {
    id: "Terget",
    value: "TG"
  },
  range: {
    id: "Range",
    value: "RG"
  },
  erosion: {
    id: "Erosion",
    value: "ES"
  },
  limit: {
    id: "Limit",
    value: "LM"
  },
  effect: {
    id: "Effect",
    value: "EF"
  },
  syndrome: {
    id: "Syndrome",
    value: "SD"
  }
};

export const weaponsRow = {
  id: {
    id: "ID",
    value: "ID"
  },
  name: {
    id: "Name",
    value: "名称"
  },
  skill: {
    id: "Skill",
    value: "技能"
  },
  hit: {
    id: "Hit",
    value: "命中"
  },
  attack: {
    id: "Attack",
    value: "攻撃力"
  },
  range: {
    id: "Range",
    value: "射程"
  },
  guard: {
    id: "Guard",
    value: "ガード"
  },
  cost: {
    id: "Cost",
    value: "コスト"
  },
  memo: {
    id: "Memo",
    value: "メモ"
  }
};

export const armorsRow = {
  id: {
    id: "ID",
    value: "ID"
  },
  name: {
    id: "Name",
    value: "名称"
  },
  armor: {
    id: "Armor",
    value: "装甲"
  },
  dodge: {
    id: "Dodge",
    value: "回避"
  },
  action: {
    id: "Action",
    value: "行動"
  },
  cost: {
    id: "Cost",
    value: "コスト"
  },
  memo: {
    id: "Memo",
    value: "メモ"
  }
};

export const itemsRow = {
  id: {
    id: "ID",
    value: "ID"
  },
  name: {
    id: "Name",
    value: "名称"
  },
  sort: {
    id: "Sort",
    value: "種別"
  },
  skill: {
    id: "Skill",
    value: "技能"
  },
  cost: {
    id: "Cost",
    value: "コスト"
  },
  memo: {
    id: "Memo",
    value: "メモ"
  }
};

export const roisRow = {
  id: {
    id: "ID",
    value: "ID"
  },
  srois: {
    id: "Srois",
    value: "Sロイス"
  },
  name: {
    id: "Name",
    value: "名称"
  },
  favor: {
    id: "Favor",
    value: "好意"
  },
  malice: {
    id: "Malice",
    value: "悪意"
  },
  memo: {
    id: "Memo",
    value: "メモ"
  }
};

export const attackCombo = {
  name: {
    id: "Name",
    value: "名前",
  },
  skill: {
    id: "Skill",
    value: "技能",
  },
  judge: {
    id: "Judge",
    value: "判定補正",
  },
  attack: {
    id: "Attack",
    value: "攻撃力",
  },
  target: {
    id: "Target",
    value: "対象",
  },
  range: {
    id: "Range",
    value: "範囲",
  },
  other: {
    id: "Other",
    value: "その他",
  },
  effects: {
    id: "Effects",
    value: "EF",
  },
};

export const reactionCombo = {
  name: {
    id: "Name",
    value: "名前",
  },
  skill: {
    id: "Skill",
    value: "技能",
  },
  judge: {
    id: "Judge",
    value: "判定補正",
  },
  guard: {
    id: "Guard",
    value: "G値",
  },
  other: {
    id: "Other",
    value: "その他",
  },
  effects: {
    id: "Effects",
    value: "EF",
  },
};

export const generalID = "general";

export const generalName = "一般";

export const emptyID = "empty";

export const emptyEffectName = "未選択";

export const effectSyndromeArray = ["一般", "エンジェルハイロゥ", "バロール", "ブラックドッグ", "ブラム=ストーカー", "キュマイラ", "エグザイル", "ハヌマーン", "モルフェウス", "ノイマン", "オルクス", "サラマンダー", "ソラリス"];

export const timingArray = ["マイナー", "メジャー", "リアクション", "オート", "メジャー/リアクション", "セットアップ", "クリンナップ", "イニシアチブ", "常時", "オート(リアクション)", "オート(肉体)", "オート(被ダメ時)"]

export const skillArray = ["-", "シンドローム", "<白兵>", "<射撃>", "<RC>", "<知覚>", "<白兵><射撃>", "<情報>", "<交渉>", "<RC><交渉>", "<回避>", "[肉体]", "[精神]", "[肉体][精神]", "全ての攻撃", "全ての判定"]

export const difficultyArray = ["-", "自動", "対決"]

export const targetArray = ["-", "自身", "単体", "3体", "範囲", "範囲(選択)", "シーン", "シーン(選択)", "範囲/範囲(選択)", "LV+1体", "武器"]

export const rangeArray = ["-", "至近", "武器", "視界"]

export const limitArray = ["-", "1シーンLV回", "1シーン1回", "1シナリオLV回", "1シナリオ1回", "1シナリオ3回", "1ラウンド1回", "1メイン1回", "1メイン1回、1シナリオLV回"]

export const weaponSortArray = ["白兵", "射撃"];

export const armorSortArray = ["防具"];

export const itemSortArray = ["ヴィークル", "コネ", "その他", "使い捨て"];

export const resurrect = {
  syndrome : '0', name : 'リザレクト', max_level : '3', timing : '3', skill : '0', difficulty : '1', target : '1', range : '1', erosion_point : 'LVd10', limit : '0', count : '0', other : '19', sort : '0', effect_sort1 : '5', effect_content1 : 'BD:-戦闘不能', effect_sort2 : '6',  effect_content2 : '+LVD', effect_sort3 : '0', effect_content3 : ''
}

export const wording = {
  syndrome : '0', name : 'ワーディング', max_level : '1', timing : '3', skill : '0', difficulty : '1', target : '6', range : '3', erosion_point : '0', limit : '0', count : '0', other : '0', sort : '0', effect_sort1 : '33', effect_content1 : '', effect_sort2 : '0',  effect_content2 : '', effect_sort3 : '0', effect_content3 : ''
}

export const nullEffect = [
  "none", "", "", "", "", "", "", "", "-", "", "", "", "", "", "", "", "", "", ""
];

export const weaponSortNum = {
  melee: "0",
  shoot: "1"
};

export const armorSortNum = {
  armor: "0"
};

export const itemSortNum = {
  vehicle: "0",
  connection: "1",
  other: "2",
  disposable: "3"
};

export const effectLimit = {
  none: '0',
  eightyPercent: '1',
  oneHundredPercent: '2',
  oneHundredTwentyPercent: '3',
  pureSyndrome: '4', 
};

// エフェクト情報の内数字に意味づけがされているもの
export const dbEffectNumInfo = {
  TIMING: {
    MINOR: "0",
    MAJOR: "1",
    REACTION: "2",
    AUTO: "3",
    MAJORORREACTION: "4",
    SETUP: "5",
    CLEANUP: "6",
    INITIATIVE: "7",
    Always: "8",
    AUTOREACTION: "9",
    AUTOBODY: "10",
    AUTODAMAGE: "11",
  },
  SKILL: {
    NONE: "0",
    SYNDROME: "1",
    MELEE: "2",
    SHOOT: "3",
    RC: "4",
    PERCEPTION: "5",
    MELEESHOOT: "6",
    INFOMATION: "7",
    DRIVING: "8",
    INTENTION: "9",
    NEGOTIATION: "10",
    PROCUREMENT: "11",
    RCNEGOTIATION: "12",
    AVOID: "13",
    ARTKNOWLEDGEINFOMATION: "14",
    BODY: "15",
    SENSE: "16",
    SPIRIT: "17",
    BODYSENSE: "18",
    SPIRITSOCIETY: "19",
    ATTACK: "20",
    ALL: "21",
  },
  DIFFICULTY: {
    NONE: "0",
    AUTO: "1",
    BATTLE: "2",
    TWENTY: "3",
  },
  TARGET: {
    NONE: "0",
    SELF: "1",
    ONE: "2",
    THREE: "3",
    RANGE: "4",
    RANGESELECT: "5",
    SCENE: "6",
    SCENESELECT: "7",
    RANGEORRANGESELECT: "8",
    LEVELPLUSONE: "9",
    WEAPON: "10",
  },
  RANGE: {
    NONE: "0",
    CLOSEST: "1",
    WEAPON: "2",
    FIELDOFVIEW: "3",
    TWENTYMETERS: "4",
  },
  LIMIT: {
    NONE: "0",
    EIGHTYPERCENT: "1",
    ONEHUNDREDPERCENT: "2",
    ONEHUNDREDTWENTYPERCENT: "3",
    PURESYNDROME: "4",
    SERVANT: "5",
  },
  COUNT: {
    NONE: "0",
    SCENELEVEL: "1",
    SCENEONE: "2",
    SCENARIOLEVEL: "3",
    SCENARIOONE: "4",
    SCENARIOTHREE: "5",
    ROUNDONE: "6",
    MAINONE: "7",
    MAINONESCENARIOLEVEL: "8",
  },
  OTHER: {
    NONE: "0",
    CANNOTCOMBINE: "1",
    SINGLEONLY: "2",
    NOUPLEVELEROSION: "3",
    BAREHANDSONLY: "4",
    WEAPONREQUIRED: "5",
    MELEETARGETED: "6",
    CANNOTCOMBINECONCENTRATE: "7",
    CANNOTSELECTOWN: "8",
    BATTLECANNOTUSE: "9",
    CANCOMBINEMAJOR: "10",
    CANNOTPURCHASE: "11",
    CANNOTANIMALTAMER: "12",
    CANCOMBINEREACTION: "13",
    CANNOTUSECOUNTLIMIT: "14",
    CANNOTHPZERO: "15",
    ONLYAGREE: "16",
    AWAKENINGOVERD: "17",
    COUNTLIMITNOTUP: "18",
    CANNNOTUSEEROSIONONEHUNDRED: "19",
    OVERDNOEFFECT: "20",
    CANNOTHEELRUNAWAY: "21",
    SINGLEATTACKNOEFFECT: "22",
    RAMGEATTACKNOEFFECT: "23",
    MISS: "24",
    COVERTONLY: "25",
    FIRSTROUNDONLY: "26",
    JUSTBEFOREJUDGE: "27",
    JUSTAFTERJUDGE: "28",
    JUSTAFTERDAMAGE: "29",
    JUSTAFTERBADSTATUS: "30",
    CANNOTDAMAGE: "31",
    BREAKUSEDWEAPON: "32",
    CANNOTUSEGMJUDGE: "33",
    JUSTAFTERHPZERO: "34",
    REQUIREDSERVANT: "35",
    PERFECTBEASTIFICATIONONLY: "36",

  },
  SORT: {
    MINOR: "0",
    SHOOT: "1",
    MELEE: "2",
    MELEESHOOT: "3",
    GUARD: "4",
    DODGE: "5",
    OTHERTHANGUARD: "6",
  },
  EFFECT_SORT: {
    NONE: "0",
    MYCRITICALPOINT: "1",
    MYDICE: "2",
    MYJUDGE: "3",
    MYATTACK: "4",
    MYGUARD: "5",
    MYSTATE: "6",
    MYHP: "7",
    MYACTION: "8",
    MYMOVE: "9",
    MYDAMAGE: "10",
    MYARMOR: "11",
    OPPONENTCRITICALPOINT: "12",
    OPPONENTDICE: "13",
    OPPONENTJUDGE: "14",
    OPPONENTATTACK: "15",
    OPPONENTGUARD: "16",
    OPPONENTSTATE: "17",
    OPPONENTHP: "18",
    OPPONENTDisturbance: "19",
    OPPONENTDAMAGE: "20",
    CHANGEAVOIDSKILL: "21",
    COVERING: "22",
    CANNOTDODGE: "23",
    BATTLEMOVE: "24",
    FULLPOWERMOVE: "25",
    CHANGERANGE: "26",
    CHANGETARGET: "27",
    CANNOTSELECTSAMEENGAGE: "28",
    ENABLESELECTSAMEENGAGE: "29",
    SAMEENGAGEONLY: "30",
    MAINPROCESSEXECUTE: "31",
    STANDBYPOINT: "32",
    EROSIONBASICVALUE: "33",
    CONTINUEROUND: "34",
    CONTINUESCENE: "35",
    CHANGESKILL: "36",
    USEEFFECT: "37",
    WORDING: "38",
    HEELBADSTATES: "39",
    CRITICALPOINTLOWERLIMIT: "40",
    WEAPONCREATE: "41",
    HPABSORPTION: "42",
    IGNOREARMOR: "43",
    CANUSEINPRESSURE: "44",
    GIVEDAMAGE: "45",
    RECEIVEDAMAGE: "46",
    DAMAGETOOPPONENT: "47",
    SUREHIT: "48",
    CANNOTREACTION: "49",
    MAXHP: "51",
    CANCHANGEEQUIPWEAPON: "52",
    DOUBLEWEAPON: "53",
    COUNTER: "54",
    NERFJACK: "55",
    OPPONENTEROSION: "56",
    OVERTOSE: "57",
  },
}