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

export const appTitle = "ダブルクロスキャラクター管理";

export const growTableTitle = "【成長点管理表】";

export const purchaseTableTitle = "【財産点管理表】";

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
  angelhighlow: 0,
  balor: 1,
  blackdog: 2,
  bramstoker: 3,
  chimera: 4,
  exile: 5,
  hanuman: 6,
  morpheus: 7,
  neumann: 8,
  orcus: 9,
  salamander: 10,
  solaris: 11,
  general: 12,
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

export const generalID = "general";

export const generalName = "一般";

export const emptyID = "empty";

export const emptyEffectName = "未選択";

export const effectSyndromeArray = ["エンジェルハイロゥ", "バロール", "ブラックドッグ", "ブラム=ストーカー", "キュマイラ", "エグザイル", "ハヌマーン", "モルフェウス", "オルクス", "サラマンダー", "ソラリス"];

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
  syndrome : 'general', name : 'リザレクト', max_level : '3', timing : '3', skill : '0', difficulty : '1', target : '1', range : '1', erosion_point : 'LVd10', limit : '0', count : '0', other : '19', sort : '0', effect_sort1 : '5', effect_content1 : 'BD:-戦闘不能', effect_sort2 : '6',  effect_content2 : '+LVD', effect_sort3 : '0', effect_content3 : ''
}

export const wording = {
  syndrome : 'general', name : 'ワーディング', max_level : '1', timing : '3', skill : '0', difficulty : '1', target : '6', range : '3', erosion_point : '0', limit : '0', count : '0', other : '0', sort : '0', effect_sort1 : '33', effect_content1 : '', effect_sort2 : '0',  effect_content2 : '', effect_sort3 : '0', effect_content3 : ''
}

export const nullEffect = [
  "none", "", "", "", "", "", "", "", "-", "", "", "", "", "", "", "", "", "", ""
];

export const effectContentNum = {
  SYNDROME: 0,
  NAME: 1,
  MAXLEVEL: 2,
  TIMING: 3,
  SKILL: 4,
  DIFFICULTY: 5,
  TARGET: 6,
  RANGE: 7,
  EROSION: 8,
  LIMIT: 9,
  RESTRICTIONS: 10,
  CONSTRAINT: 11,
  SORT: 12,
  EFFECTSORT1: 13,
  EFFECT1: 14,
  EFFECTSORT2: 15,
  EFFECT2: 16,
  EFFECTSORT3: 17,
  EFFECT3: 18,
};

export const weaponContentNum = {
  ID: 0,
  NAME: 1,
  SORT: 2,
  SKILL: 3,
  HIT: 4,
  ATTACK: 5,
  GUARD: 6,
  RANGE: 7,
  PURCHASE: 8,
  STANDING: 9
};

export const armorContentNum = {
  ID: 0,
  NAME: 1,
  SORT: 2,
  DODGE: 3,
  ACTION: 4,
  ARMOR: 5,
  PURCHASE: 6,
  STANDING: 7
};

export const itemContentNum = {
  ID: 0,
  NAME: 1,
  SORT: 2,
  SKILL: 3,
  PURCHASE: 4,
  STANDING: 5
};

export const emotionContentNum = {
  ID: 0,
  NAME: 1
};

export const impulseContentNum = {
  ID: 0,
  NAME: 1,
  EROSION: 2
};

export const awakeningContentNum = {
  ID: 0,
  NAME: 1,
  EROSION: 2
};

export const worksContentNum = {
  ID: 0,
  NAME: 1,
  ABILITY: 2,
  SKILL1: 3,
  VALUE1: 4,
  SKILL2: 5,
  VALUE2: 6,
  SKILL3: 7,
  VALUE3: 8,
  SKILL4: 9,
  VALUE4: 10,
  SKILL5: 11,
  VALUE5: 12,
};

export const syndromeContentNum = {
  ID: 0,
  NAME: 1,
  BODY: 2,
  SENSE: 3,
  SPIRIT: 4,
  SOCIETY: 5,
};

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