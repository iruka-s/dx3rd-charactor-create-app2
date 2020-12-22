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

export const ComboRow = {
  name: {
    id: "Name",
    value: "名前",
  },
  skill: {
    id: "Skill",
    value: "技能",
  },
  timing: {
    id: "Timing",
    value: "タイミング",
  },
  erosionPoint: {
    id: "ErosionPoint",
    value: "侵食値",
  },
  target: {
    id: "Target",
    value: "対象",
  },
  range: {
    id: "Range",
    value: "範囲",
  },
  difficulty: {
    id: "difficulty",
    value: "難易度",
  },
  sort: {
    id: "sort",
    value: "種別",
  },
  detail: {
    id: "detail",
    value: "詳細",
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

export const DB_INFO = {
  SKILL: {
    '': '-',
    '0': '-',
    '1': 'シンドローム',
    '2': '白兵',
    '3': '射撃',
    '4': 'RC',
    '5': '知覚',
    '6': '白兵/射撃',
    '7': '情報',
    '8': '交渉',
    '9': 'RC/交渉',
    '10': '回避',
    '11': '肉体',
    '12': '精神',
    '13': '肉体/感覚',
    '14': '全て',
  },
  TIMING: {
    '': '-',
    '0': 'マイナー',
    '1': 'メジャー',
    '2': 'リアクション',
    '3': 'オート',
    '4': 'メジャー/リアクション',
    '5': 'セットアップ',
    '6': 'クリンナップ',
    '7': 'イニシアチブ',
    '8': '常時',
    '9': 'オート',
    '10': 'オート',
    '11': 'オート',
  },
  TARGET: {
    '': '-',
    '0': '-',
    '1': '自身',
    '2': '1体',
    '3': '3体',
    '4': '範囲(選択)',
    '5': 'シーン(選択)',
    '6': 'LV+1',
  },
  RANGE: {
    '': '-',
    '0': '-',
    '1': '近接',
    '2': '武器',
    '3': '視界',
  },
  DIFFICULTY: {
    '': '-',
    '0': '-',
    '1': 'オート',
    '2': '対抗',
  },
  SORT: {
    '': '-',
    '0': '-',
    '1': '射撃',
    '2': '白兵',
    '3': '白兵/射撃',
    '4': 'ガード',
    '5': 'ドッジ',
    '6': 'ガード以外',
  },
  DETAIL: {
    '': '-',
    '0': '-',
    '1': '自身のクリ値：',
    '2': '自身のダイス：',
    '3': '自身の判定値：',
    '4': '自身の攻撃力：',
    '5': '自身のガード値：',
    '6': '自身の状態：',
    '7': '自身のHP：',
    '8': '自身の行動値：',
    '9': '自身のダメージ：',
    '10': '自身の装甲値：',
    '11': '相手のクリ値：',
    '12': '相手のダイス：',
    '13': '相手の攻撃力：',
    '14': '相手の状態：',
    '15': '相手のHP：',
    '16': '相手の移動：',
    '17': '相手のダメージ：',
    '18': '回避技能変更：',
    '19': 'カバーリング：',
    '20': '回避不可',
    '21': '戦闘移動：',
    '22': '全力移動：',
    '23': '射程変更：',
    '24': '対象変更：',
    '25': '同エンゲージ選択不可',
    '26': '同エンゲージ選択可能にする',
    '27': 'メインプロセス実行',
    '28': '常備化ポイント：',
    '29': '侵食基本値：',
    '30': '技能変更：',
    '31': 'エフェクト使用：',
    '32': 'クリティカル下限値：',
    '33': '武器作成：',
    '34': 'HP吸収：',
    '35': '装甲無視',
    '36': '重圧下で使用可能',
    '37': '与ダメ時使用',
    '38': '被ダメ時使用',
    '39': 'ダメージを与える：',
    '40': '最大HP：',
    '41': 'GMに質問',
    '42': '装備武器変更可能',
    '43': 'ダブルウェポン：',
    '44': 'カウンター：',
    '45': 'ナーフジャック：',
    '46': '相手の侵食値：',
    '47': 'オーバートーズ：',
    '48': '武器購入：',
  },
};

// 組み合わせ結果表
const SKILL_CONBINE_RESULT_TABLE = {
  //               0     1     2    3    4    5    6    7    8    9    10    11    12    13    14
  NONE:          ["0",  "1",  "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],  // 0
  SYNDROME:      ["1",  "1",  "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "1" ],  // 1
  MELEE:         ["2",  "2",  "2", "-", "-", "-", "2", "-", "-", "-", "-",  "2",  "-",  "2",  "2" ],  // 2
  SHOOT:         ["3",  "3",  "-", "3", "-", "-", "3", "-", "-", "-", "-",  "-",  "-",  "3",  "3" ],  // 3
  RC:            ["4",  "4",  "-", "-", "4", "-", "-", "-", "-", "4", "-",  "-",  "4",  "-",  "4" ],  // 4
  PERCEPTION:    ["5",  "5",  "-", "-", "-", "5", "-", "-", "-", "-", "-",  "-",  "-",  "5",  "5" ],  // 5
  MELEESHOOT:    ["6",  "6",  "2", "3", "-", "-", "6", "-", "-", "-", "-",  "2",  "-",  "6",  "6" ],  // 6
  INFOMATION:    ["7",  "7",  "-", "-", "-", "-", "-", "7", "-", "-", "-",  "-",  "-",  "-",  "7" ],  // 7
  NEGOTIATION:   ["8",  "8",  "-", "-", "-", "-", "-", "-", "8", "8", "-",  "-",  "-",  "-",  "8" ],  // 8
  RCNEGOTIATION: ["9",  "9",  "-", "-", "4", "-", "-", "-", "8", "9", "-",  "-",  "4",  "-",  "9" ],  // 9
  AVOID:         ["10", "10", "-", "-", "-", "-", "-", "-", "-", "-", "10", "10", "-",  "10", "10"],  // 10
  BODY:          ["11", "11", "2", "-", "-", "-", "2", "-", "-", "-", "10", "11", "-",  "11", "11"],  // 11
  SPIRIT:        ["12", "12", "-", "-", "4", "-", "-", "-", "-", "4", "-",  "-",  "12", "-",  "12"],  // 12
  BODYSENSE:     ["13", "13", "2", "3", "-", "5", "6", "-", "-", "-", "10", "11", "-",  "13", "13"],  // 13
  ALL:           ["14", "1",  "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],  // 14
};

export const TIMING_CONBINE_RESULT_TABLE = {
  //                 0    1    2    3    4    5    6    7    8    9    10    11
  MINOR:           ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0",  "0" ],  // 0
  MAJOR:           ["0", "1", "-", "-", "1", "-", "-", "-", "-", "-", "1",  "11"],  // 1
  REACTION:        ["0", "-", "2", "-", "2", "-", "-", "-", "-", "2", "2",  "-" ],  // 2
  AUTO:            ["0", "-", "-", "3", "-", "-", "-", "-", "-", "-", "3",  "-" ],  // 3
  MAJORREACTION:   ["0", "1", "2", "-", "4", "-", "-", "-", "-", "2", "4",  "11"],  // 4
  SETUP:           ["0", "-", "-", "-", "-", "5", "-", "-", "-", "-", "5",  "-" ],  // 5
  CLEANUP:         ["0", "-", "-", "-", "-", "-", "6", "-", "-", "-", "6",  "-" ],  // 6
  INITIATIVE:      ["0", "-", "-", "-", "-", "-", "-", "7", "-", "-", "7",  "-" ],  // 7
  ALWAYS:          ["0", "-", "-", "-", "-", "-", "-", "-", "8", "-", "8",  "-" ],  // 8
  AUTOREACTION:    ["0", "-", "2", "-", "2", "-", "-", "-", "-", "9", "9",  "-" ],  // 9
  AUTOBODY:        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],  // 10
  MAJORINREACTION: ["0", "11","-", "-", "11","-", "-", "-", "-", "-", "11", "11"],  // 11
};

const TARGET_CONBINE_RESULT_TABLE = {
  //                  0    1    2    3    4    5    6
  NONE:             ["0", "1", "2", "3", "4", "5", "6"],  // 0
  SELF:             ["1", "1", "1", "1", "1", "1", "1"],  // 1
  ONE:              ["2", "1", "2", "2", "2", "2", "2"],  // 2
  THREE:            ["3", "1", "2", "3", "3", "3", "3"],  // 3
  RANGESELECT:      ["4", "1", "2", "3", "4", "4", "6"],  // 4
  SCENESELECT:      ["5", "1", "2", "3", "4", "5", "6"],  // 5
  LEVELPLUSONE:     ["6", "1", "2", "3", "6", "6", "6"],  // 6
};

const SORT_CONBINE_RESULT_TABLE = {
  //                0    1    2    3    4    5    6
  NONE:           ["0", "1", "2", "3", "4", "5", "6"],  // 0
  SHOOT:          ["1", "1", "-", "1", "-", "-", "1"],  // 1
  MELEE:          ["2", "-", "2", "2", "-", "-", "2"],  // 2
  MELEESHOOT:     ["3", "1", "2", "3", "-", "-", "3"],  // 3
  GUARD:          ["4", "-", "-", "-", "4", "-", "4"],  // 4
  DODGE:          ["5", "-", "-", "-", "-", "5", "5"],  // 5
  OTHERTHANGUARD: ["6", "1", "2", "3", "4", "5", "6"],  // 6
};

// 組み合わせ可不可チェック表
const SKILL_CONBINABLE_RULE_TABLE = {
  //              0     1      2      3      4      5      6      7      8      9      10     11     12     13     14
  NONE:          [true, null, true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true],  // 0
  SYNDROME:      [null, null, null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null,  null],  // 1
  MELEE:         [true, null, true,  false, false, false, true,  false, false, false, false, true,  false, true,  true],  // 2
  SHOOT:         [true, null, false, true,  false, false, true,  false, false, false, false, false, false, true,  true],  // 3
  RC:            [true, null, false, false, true,  false, false, false, false, true,  false, false, true,  false, true],  // 4
  PERCEPTION:    [true, null, false, false, false, true,  false, false, false, false, false, false, false, true,  true],  // 5
  MELEESHOOT:    [true, null, true,  true,  false, false, true,  false, false, false, false, true,  false, true,  true],  // 6
  INFOMATION:    [true, null, false, false, false, false, false, true,  false, false, false, false, false, false, true],  // 7
  NEGOTIATION:   [true, null, false, false, false, false, false, false, true,  true,  false, false, false, false, true],  // 8
  RCNEGOTIATION: [true, null, false, false, true,  false, false, false, true,  true,  false, false, true,  false, true],  // 9
  AVOID:         [true, null, false, false, false, false, false, false, false, false, true,  true,  false, true,  true],  // 10
  BODY:          [true, null, true,  false, false, false, true,  false, false, false, true,  true,  false, true,  true],  // 11
  SPIRIT:        [true, null, false, false, true,  false, false, false, false, true,  false, false, true,  false, true],  // 12
  BODYSENSE:     [true, null, true,  true,  false, true,  true,  false, false, false, true,  true,  false, true,  true],  // 13
  ALL:           [true, null, true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true,  true],  // 14
}

const SORT_CONBINABLE_RULE_TABLE = {
  //              0      1      2      3      4      5      6
  NONE:           [true, true,  true,  true,  true,  true,  true ],  // 0
  SHOOT:          [true, true,  false, true,  false, false, true ],  // 1
  MELEE:          [true, false, true,  true,  false, false, true ],  // 2
  MELEESHOOT:     [true, true,  true,  true,  false, false, true ],  // 3
  GUARD:          [true, false, false, false, true,  false, false],  // 4
  DODGE:          [true, false, false, false, false, true,  true ],  // 5
  OTHERTHANGUARD: [true, true,  true,  true,  false, true,  true ],  // 6
}

const TIMING_CONBINABLE_RULE_TABLE = {
  //                0      1      2      3      4      5      6      7      8      9      10     11
  MINOR:           [true,  false, false, false, false, false, false, false, false, false, true,  false],  // 0
  MAJOR:           [false, true,  false, false, true,  false, false, false, false, false, true,  true ],  // 1
  REACTION:        [false, false, true,  false, true,  false, false, false, false, true,  true,  false],  // 2
  AUTO:            [false, false, false, true,  false, false, false, false, false, false, true,  false],  // 3
  MAJORREACTION:   [false, true,  true,  false, true,  false, false, false, false, true,  true,  true ],  // 4
  SETUP:           [false, false, false, false, false, true,  false, false, false, false, true,  false],  // 5
  CLEANUP:         [false, false, false, false, false, false, true,  false, false, false, true,  false],  // 6
  INITIATIVE:      [false, false, false, false, false, false, false, true,  false, false, true,  false],  // 7
  ALWAYS:          [false, false, false, false, false, false, false, false, true,  false, false, false],  // 8
  AUTOREACTION:    [false, false, true,  false, true,  false, false, false, false, true,  true,  false],  // 9
  AUTOBODY:        [true,  true,  true,  true,  true,  true,  true,  true,  false, true,  true,  true ],  // 10
  MAJORINREACTION: [false, true,  false, false, true,  false, false, false, false, false, true,  true ],  // 11
}

// 組み合わせ結果決定関数群
export const SKILL_DECIDE_FUNCS = {
  '0':  function(skill){ return SKILL_CONBINE_RESULT_TABLE.NONE[parseInt(skill)]},
  '1':  function(skill){ return SKILL_CONBINE_RESULT_TABLE.SYNDROME[parseInt(skill)]},
  '2':  function(skill){ return SKILL_CONBINE_RESULT_TABLE.MELEE[parseInt(skill)] },
  '3':  function(skill){ return SKILL_CONBINE_RESULT_TABLE.SHOOT[parseInt(skill)] },
  '4':  function(skill){ return SKILL_CONBINE_RESULT_TABLE.RC[parseInt(skill)] },
  '5':  function(skill){ return SKILL_CONBINE_RESULT_TABLE.PERCEPTION[parseInt(skill)] },
  '6':  function(skill){ return SKILL_CONBINE_RESULT_TABLE.MELEESHOOT[parseInt(skill)] },
  '7':  function(skill){ return SKILL_CONBINE_RESULT_TABLE.INFOMATION[parseInt(skill)] },
  '8':  function(skill){ return SKILL_CONBINE_RESULT_TABLE.NEGOTIATION[parseInt(skill)] },
  '9':  function(skill){ return SKILL_CONBINE_RESULT_TABLE.RCNEGOTIATION[parseInt(skill)] },
  '10': function(skill){ return SKILL_CONBINE_RESULT_TABLE.AVOID[parseInt(skill)] },
  '11': function(skill){ return SKILL_CONBINE_RESULT_TABLE.BODY[parseInt(skill)] },
  '12': function(skill){ return SKILL_CONBINE_RESULT_TABLE.SPIRIT[parseInt(skill)] },
  '13': function(skill){ return SKILL_CONBINE_RESULT_TABLE.BODYSENSE[parseInt(skill)] },
  '14': function(skill){ return SKILL_CONBINE_RESULT_TABLE.ALL[parseInt(skill)] },
}

export const TIMING_DECIDE_FUNCS = {
  '0':  function(timing){ return TIMING_CONBINE_RESULT_TABLE.MINOR[parseInt(timing)]},
  '1':  function(timing){ return TIMING_CONBINE_RESULT_TABLE.MAJOR[parseInt(timing)]},
  '2':  function(timing){ return TIMING_CONBINE_RESULT_TABLE.REACTION[parseInt(timing)] },
  '3':  function(timing){ return TIMING_CONBINE_RESULT_TABLE.AUTO[parseInt(timing)] },
  '4':  function(timing){ return TIMING_CONBINE_RESULT_TABLE.MAJORREACTION[parseInt(timing)] },
  '5':  function(timing){ return TIMING_CONBINE_RESULT_TABLE.SETUP[parseInt(timing)] },
  '6':  function(timing){ return TIMING_CONBINE_RESULT_TABLE.CLEANUP[parseInt(timing)] },
  '7':  function(timing){ return TIMING_CONBINE_RESULT_TABLE.INITIATIVE[parseInt(timing)] },
  '8':  function(timing){ return TIMING_CONBINE_RESULT_TABLE.ALWAYS[parseInt(timing)] },
  '9':  function(timing){ return TIMING_CONBINE_RESULT_TABLE.AUTOREACTION[parseInt(timing)] },
  '10': function(timing){ return TIMING_CONBINE_RESULT_TABLE.AUTOBODY[parseInt(timing)] },
  '11': function(timing){ return TIMING_CONBINE_RESULT_TABLE.MAJORINREACTION[parseInt(timing)] },
}

export const TARGET_DECIDE_FUNCS = {
  '0':  function(target){ return TARGET_CONBINE_RESULT_TABLE.NONE[parseInt(target)]},
  '1':  function(target){ return TARGET_CONBINE_RESULT_TABLE.SELF[parseInt(target)]},
  '2':  function(target){ return TARGET_CONBINE_RESULT_TABLE.ONE[parseInt(target)] },
  '3':  function(target){ return TARGET_CONBINE_RESULT_TABLE.THREE[parseInt(target)] },
  '4':  function(target){ return TARGET_CONBINE_RESULT_TABLE.RANGESELECT[parseInt(target)] },
  '5':  function(target){ return TARGET_CONBINE_RESULT_TABLE.SCENESELECT[parseInt(target)] },
  '6':  function(target){ return TARGET_CONBINE_RESULT_TABLE.LEVELPLUSONE[parseInt(target)] }
}

export const SORT_DECIDE_FUNCS = {
  '0':  function(sort){ return SORT_CONBINE_RESULT_TABLE.NONE[parseInt(sort)]},
  '1':  function(sort){ return SORT_CONBINE_RESULT_TABLE.SHOOT[parseInt(sort)]},
  '2':  function(sort){ return SORT_CONBINE_RESULT_TABLE.MELEE[parseInt(sort)] },
  '3':  function(sort){ return SORT_CONBINE_RESULT_TABLE.MELEESHOOT[parseInt(sort)] },
  '4':  function(sort){ return SORT_CONBINE_RESULT_TABLE.GUARD[parseInt(sort)] },
  '5':  function(sort){ return SORT_CONBINE_RESULT_TABLE.DODGE[parseInt(sort)] },
  '6':  function(sort){ return SORT_CONBINE_RESULT_TABLE.OTHERTHANGUARD[parseInt(sort)] },
}

// 組み合わせ可不可チェック関数群
export const SKILL_CONBINABLE_CHECK_FUNCS = {
  '0':  function(skill){ return true },
  '1':  function(skill){ return true }, // 「技能：シンドローム」は別途組み合わせ可不可判断が必要
  '2':  function(skill){ return SKILL_CONBINABLE_RULE_TABLE.MELEE[parseInt(skill)] },
  '3':  function(skill){ return SKILL_CONBINABLE_RULE_TABLE.SHOOT[parseInt(skill)] },
  '4':  function(skill){ return SKILL_CONBINABLE_RULE_TABLE.RC[parseInt(skill)] },
  '5':  function(skill){ return SKILL_CONBINABLE_RULE_TABLE.PERCEPTION[parseInt(skill)] },
  '6':  function(skill){ return SKILL_CONBINABLE_RULE_TABLE.MELEESHOOT[parseInt(skill)] },
  '7':  function(skill){ return SKILL_CONBINABLE_RULE_TABLE.INFOMATION[parseInt(skill)] },
  '8':  function(skill){ return SKILL_CONBINABLE_RULE_TABLE.NEGOTIATION[parseInt(skill)] },
  '9':  function(skill){ return SKILL_CONBINABLE_RULE_TABLE.RCNEGOTIATION[parseInt(skill)] },
  '10': function(skill){ return SKILL_CONBINABLE_RULE_TABLE.AVOID[parseInt(skill)] },
  '11': function(skill){ return SKILL_CONBINABLE_RULE_TABLE.BODY[parseInt(skill)] },
  '12': function(skill){ return SKILL_CONBINABLE_RULE_TABLE.SPIRIT[parseInt(skill)] },
  '13': function(skill){ return SKILL_CONBINABLE_RULE_TABLE.BODYSENSE[parseInt(skill)] },
  '14': function(skill){ return true },
}

export const TIMING_CONBINABLE_CHECK_FUNCS = {
  '0' : function(timing){ return TIMING_CONBINABLE_RULE_TABLE.MINOR[parseInt(timing)]},
  '1' : function(timing){ return TIMING_CONBINABLE_RULE_TABLE.MAJOR[parseInt(timing)]},
  '2' : function(timing){ return TIMING_CONBINABLE_RULE_TABLE.REACTION[parseInt(timing)] },
  '3' : function(timing){ return TIMING_CONBINABLE_RULE_TABLE.AUTO[parseInt(timing)] },
  '4' : function(timing){ return TIMING_CONBINABLE_RULE_TABLE.MAJORREACTION[parseInt(timing)] },
  '5' : function(timing){ return TIMING_CONBINABLE_RULE_TABLE.SETUP[parseInt(timing)] },
  '6' : function(timing){ return TIMING_CONBINABLE_RULE_TABLE.CLEANUP[parseInt(timing)] },
  '7' : function(timing){ return TIMING_CONBINABLE_RULE_TABLE.INITIATIVE[parseInt(timing)] },
  '8' : function(timing){ return TIMING_CONBINABLE_RULE_TABLE.ALWAYS[parseInt(timing)] },
  '9' : function(timing){ return TIMING_CONBINABLE_RULE_TABLE.AUTOREACTION[parseInt(timing)] },
  '10': function(timing){ return TIMING_CONBINABLE_RULE_TABLE.AUTOBODY[parseInt(timing)] },
  '11': function(timing){ return TIMING_CONBINABLE_RULE_TABLE.MAJORINREACTION[parseInt(timing)] },
}

export const SORT_CONBINABLE_CHECK_FUNCS = {
  '0': function(sort){ return SORT_CONBINABLE_RULE_TABLE.NONE[parseInt(sort)]},
  '1': function(sort){ return SORT_CONBINABLE_RULE_TABLE.SHOOT[parseInt(sort)]},
  '2': function(sort){ return SORT_CONBINABLE_RULE_TABLE.MELEE[parseInt(sort)] },
  '3': function(sort){ return SORT_CONBINABLE_RULE_TABLE.MELEESHOOT[parseInt(sort)] },
  '4': function(sort){ return SORT_CONBINABLE_RULE_TABLE.GUARD[parseInt(sort)] },
  '5': function(sort){ return SORT_CONBINABLE_RULE_TABLE.DODGE[parseInt(sort)] },
  '6': function(sort){ return SORT_CONBINABLE_RULE_TABLE.OTHERTHANGUARD[parseInt(sort)] },
}

export const INTEGRATE_DETAIL_FUNC = {
  '0': function(inputList)  { return null },
  '1': function(inputList)  { return DB_INFO.DETAIL['1'] + inputList.join('') },
  '2': function(inputList)  { return DB_INFO.DETAIL['2'] + inputList.join('') },
  '3': function(inputList)  { return DB_INFO.DETAIL['3'] + inputList.join('') },
  '4': function(inputList)  { return DB_INFO.DETAIL['4'] + inputList.join('') },
  '5': function(inputList)  { return DB_INFO.DETAIL['5'] + inputList.join('') },
  '6': function(inputList)  { return DB_INFO.DETAIL['6'] + inputList.join(', ') },
  '7': function(inputList)  { return DB_INFO.DETAIL['7'] + inputList.join('') },
  '8': function(inputList)  { return DB_INFO.DETAIL['8'] + inputList.join('') },
  '9': function(inputList)  { return DB_INFO.DETAIL['9'] + inputList.join('') },
  '10': function(inputList) { return DB_INFO.DETAIL['10'] + inputList.join('') },
  '11': function(inputList) { return DB_INFO.DETAIL['11'] + inputList.join('') },
  '12': function(inputList) { return DB_INFO.DETAIL['12'] + inputList.join('') },
  '13': function(inputList) { return DB_INFO.DETAIL['13'] + inputList.join('') },
  '14': function(inputList) { return DB_INFO.DETAIL['14'] + inputList.join(', ') },
  '15': function(inputList) { return DB_INFO.DETAIL['15'] + inputList.join('') },
  '16': function(inputList) { return DB_INFO.DETAIL['16'] + inputList.join('') },
  '17': function(inputList) { return DB_INFO.DETAIL['17'] + inputList.join('') },
  '18': function(inputList) { return DB_INFO.DETAIL['18'] + inputList.join('') },
  '19': function(inputList) { return DB_INFO.DETAIL['19'] + inputList.join('') },
  '20': function(inputList) { return DB_INFO.DETAIL['20'] },
  '21': function(inputList) { return DB_INFO.DETAIL['21'] + inputList.join('') },
  '22': function(inputList) { return DB_INFO.DETAIL['22'] + inputList.join('') },
  '23': function(inputList) { return DB_INFO.DETAIL['23'] + inputList.join('') },
  '24': function(inputList) { return DB_INFO.DETAIL['24'] + inputList.join('') },
  '25': function(inputList) { return DB_INFO.DETAIL['25'] },
  '26': function(inputList) { return DB_INFO.DETAIL['26'] },
  '27': function(inputList) { return DB_INFO.DETAIL['27'] },
  '28': function(inputList) { return DB_INFO.DETAIL['28'] + inputList.join('') },
  '29': function(inputList) { return DB_INFO.DETAIL['29'] + inputList.join('') },
  '30': function(inputList) { return DB_INFO.DETAIL['30'] + inputList.join('') },
  '31': function(inputList) { return DB_INFO.DETAIL['31'] + inputList.join('') },
  '32': function(inputList) { 
    let numArray = []
    for (let index in inputList) {
      numArray.push(Number(inputList[index]))
    };
    return DB_INFO.DETAIL['32'] + String(Math.max(...numArray))
   },
  '33': function(inputList) { return DB_INFO.DETAIL['33'] + inputList.join('') },
  '34': function(inputList) { return DB_INFO.DETAIL['34'] + inputList.join('') },
  '35': function(inputList) { return DB_INFO.DETAIL['35'] },
  '36': function(inputList) { return DB_INFO.DETAIL['36'] },
  '37': function(inputList) { return DB_INFO.DETAIL['37'] },
  '38': function(inputList) { return DB_INFO.DETAIL['38'] },
  '39': function(inputList) { return DB_INFO.DETAIL['39'] + inputList.join('') },
  '40': function(inputList) { return DB_INFO.DETAIL['40'] + inputList.join('') },
  '41': function(inputList) { return DB_INFO.DETAIL['41'] },
  '42': function(inputList) { return DB_INFO.DETAIL['42'] },
  '43': function(inputList) { return DB_INFO.DETAIL['43'] + 'ルルブ参照' },
  '44': function(inputList) { return DB_INFO.DETAIL['44'] + 'ルルブ参照' },
  '45': function(inputList) { return DB_INFO.DETAIL['45'] + 'ルルブ参照' },
  '46': function(inputList) { return DB_INFO.DETAIL['46'] + inputList.join('') },
  '47': function(inputList) { return DB_INFO.DETAIL['47'] + '組み合わせたエフェクトレベル+2' },
  '48': function(inputList) { return DB_INFO.DETAIL['48'] + inputList.join(', ') },
}