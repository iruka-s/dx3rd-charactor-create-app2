import React, { useEffect } from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import EmojiPeople from '@material-ui/icons/EmojiPeople';
import EmojiObjects from '@material-ui/icons/EmojiObjects';
import FitnessCenter from '@material-ui/icons/FitnessCenter';
import Whatshot from '@material-ui/icons/Whatshot';
import Work from '@material-ui/icons/Work';
import People from '@material-ui/icons/People';
import SportsHandball from '@material-ui/icons/SportsHandball';
import SportsKabaddi from '@material-ui/icons/SportsKabaddi';
import Tooltip from '@material-ui/core/Tooltip';
import { Route, Switch } from "react-router-dom";
import useReactRouter from 'use-react-router';

import { numCheck } from './Dx3rdUtils';
import TopPageView from '../components/TopPageView';
import CharactorDetailView from '../components/CharactorDetailView';
import SkillSettingView from '../components/SkillSettingView';
import AbilitySettingView from '../components/AbilitySettingView';
import EffectSettingView from '../components/EffectSettingView';
import ItemSettingView from "../components/ItemSettingView";
import RoisSettingView from "../components/RoisSettingView";
import ComboSettingView from "../components/ComboSettingView";
import { skillTableInputTypes, abilityTableInputTypes, roisTableInputTypes } from "../action/ActionCreators";
import { titleMap, mainSkillSortNum, abilityTableRowNum, ScreenPath, resurrect, abilities, mainSkillSortName, subSkillSortName, skillRow } from '../utils/CommonConst';

const jsonIcon = require('../images/json_icon.png');
const pdfIcon = require('../images/pdf_icon.png');
const txtIcon = require('../images/txt_icon.png');

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: "#740A00",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  title: {
    flexGrow: 1
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  input: {
    display: "none"
  }
}));

export default function Dx3rdDrawer(props) {

  const classes = useStyles();
  const theme = useTheme();
  const { history } = useReactRouter();

  const [menuOpen, setMenuOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [codeName, setCodeName] = React.useState("");
  const [sex, setSex] = React.useState("");
  const [age, setAge] = React.useState("");
  const [cover, setCover] = React.useState("");
  const [origin, setOrigin] = React.useState("");
  const [experience, setExperience] = React.useState("");
  const [encounter, setEncounter] = React.useState("");
  const [works, setWorks] = React.useState();
  const [impulse, setImpulse] = React.useState();
  const [awakening, setAwakening] = React.useState();
  const [mainSkills, setMainSkills] = React.useState([
    { id: mainSkillSortName.MELEE.ID, name: mainSkillSortName.MELEE.NAME, initVal: "0", growVal: "0", otherVal: "0", judgeVal: "0d + 0", memo: "" },
    { id: mainSkillSortName.AVOID.ID, name: mainSkillSortName.AVOID.NAME, initVal: "0", growVal: "0", otherVal: "0", judgeVal: "0d + 0", memo: "" },
    { id: mainSkillSortName.SHOOT.ID, name: mainSkillSortName.SHOOT.NAME, initVal: "0", growVal: "0", otherVal: "0", judgeVal: "0d + 0", memo: "" },
    { id: mainSkillSortName.PERCEPTION.ID, name: mainSkillSortName.PERCEPTION.NAME, initVal: "0", growVal: "0", otherVal: "0", judgeVal: "0d + 0", memo: "" },
    { id: mainSkillSortName.RC.ID, name: mainSkillSortName.RC.NAME, initVal: "0", growVal: "0", otherVal: "0", judgeVal: "0d + 0", memo: "" },
    { id: mainSkillSortName.INTENTION.ID, name: mainSkillSortName.INTENTION.NAME, initVal: "0", growVal: "0", otherVal: "0", judgeVal: "0d + 0", memo: "" },
    { id: mainSkillSortName.NEGOTIATION.ID, name: mainSkillSortName.NEGOTIATION.NAME, initVal: "0", growVal: "0", otherVal: "0", judgeVal: "0d + 0", memo: "" },
    { id: mainSkillSortName.PROCUREMENT.ID, name: mainSkillSortName.PROCUREMENT.NAME, initVal: "0", growVal: "0", otherVal: "0", judgeVal: "0d + 0", memo: "" },
  ]);
  const [subSkills, setSubSkills] = React.useState([]);
  const [userAddSubSkills, setUserAddSubSkills] = React.useState([]);
  const [growValues, setGrowValues] = React.useState([
    {
      point: "0",
      memo: ""
    },
    {
      point: "0",
      memo: ""
    },
  ]);
  const [growRowDeleteDialogOpen, setGrowRowDeleteDialogOpen] = React.useState(false);
  const [syndrome1, setSyndrome1] = React.useState();
  const [syndrome2, setSyndrome2] = React.useState();
  const [optional, setOptional] = React.useState();
  const [abilityValues, setAbilityValues] = React.useState([
    { id: "syndrome1", name: "シンドローム1：", body: "0", sense: "0", spirit: "0", society: "0" },
    { id: "syndrome2", name: "シンドローム2：", body: "0", sense: "0", spirit: "0", society: "0" },
    { id: "optional", name: "オプショナル：" },
    { id: "initialval", name: "初期値(ワークス、衝動、覚醒)", body: "0", sense: "0", spirit: "0", society: "0", erosion: "0" },
    { id: "growval", name: "成長分", body: "0", sense: "0", spirit: "0", society: "0" },
    { id: "effectval", name: "エフェクト分", body: "0", sense: "0", spirit: "0", society: "0", hp: "0", erosion: "0", action: "0", move: "0" },
    { id: "otherval", name: "その他補正", body: "0", sense: "0", spirit: "0", society: "0", hp: "0", erosion: "0", action: "0", move: "0" },
    { id: "total", name: "合計値", body: "0", sense: "0", spirit: "0", society: "0", hp: "0", erosion: "0", action: "0", move: "0" }
  ]);
  const [standbyPoint, setStandbyPoint] = React.useState("0");
  const [selectEffects, setSelectEffects] = React.useState([
    {
      level: "1",
      dbInfo: resurrect
    }
  ]);
  const [selectWeapons, setSelectWeapons] = React.useState([]);
  const [selectArmors, setSelectArmors] = React.useState([]);
  const [selectItems, setSelectItems] = React.useState([]);
  const [selectRois, setSelectRois] = React.useState([
    { srois: "0", name: "", favor: {}, malice: {}, memo: "" },
    { srois: "0", name: "", favor: {}, malice: {}, memo: "" },
    { srois: "0", name: "", favor: {}, malice: {}, memo: "" },
    { srois: "0", name: "", favor: {}, malice: {}, memo: "" },
    { srois: "0", name: "", favor: {}, malice: {}, memo: "" },
    { srois: "0", name: "", favor: {}, malice: {}, memo: "" },
    { srois: "0", name: "", favor: {}, malice: {}, memo: "" }
  ]);
  const [combos, setCombos] = React.useState([
    {
      name: "超電磁砲",
      skill: "1",
      timing: "4",
      erosionPoint: "8",
      target: "5",
      range: "3",
      difficulty: "1",
      sort: '6',
      detail: "装甲無視,BD:邪毒ランク3,BD:+放心,隠密付与,クリ値-3(下限7)",
      effects: [
        "雷の残滓 Lv5",
        "スタンボルト Lv1",
        "死点撃ち Lv3",
        "御使いの声 Lv3",
        "コンセントレイト Lv3",
      ],
    },
    {
      name: "スパイラルカット",
      skill: "2",
      timing: "2",
      erosionPoint: "5",
      target: "2",
      range: "1",
      difficulty: "2",
      sort: '6',
      detail: "装甲無視,BD:邪毒ランク3,BD:+放心,隠密付与,クリ値-3(下限7)",
      effects: [
        "コンバットシステム Lv8",
        "アドヴァイス Lv2",
      ],
    },
    {
      name: "不穏な呪言",
      skill: "8",
      timing: "11",
      erosionPoint: "7",
      target: "4",
      range: "3",
      difficulty: "1",
      sort: '6',
      detail: "装甲無視,BD:邪毒ランク3,BD:+放心,隠密付与,クリ値-3(下限7)",
      effects: [
        "トランキリティ Lv3",
        "毒の刃 Lv4",
        "コンセントレイト Lv2",
      ],
    }
  ]);

  // ワークス初期化
  useEffect(() => {

    setWorks(props.dbWorks[0]);

  }, [props.dbWorks]);

  // 衝動初期化
  useEffect(() => {

    setImpulse(props.dbImpulses[0]);

  }, [props.dbImpulses]);

  // 覚醒初期化
  useEffect(() => {

    setAwakening(props.dbAwakenings[0]);

  }, [props.dbAwakenings]);

  // シンドローム初期化
  useEffect(() => {

    setSyndrome1(props.dbSyndromes[0]);
    setSyndrome2(props.dbSyndromes[0]);
    setOptional(props.dbSyndromes[0]);

  }, [props.dbSyndromes]);

  // ポジティブ感情初期化
  useEffect(() => {

    let list = selectRois;

    for (var num in list) {
      list[Number(num)].favor = props.dbPositiveEmotions[0];
    }

    setSelectRois(Object.assign([], list));

  }, [props.dbPositiveEmotions]);

  // ネガティブ感情初期化
  useEffect(() => {

    let list = selectRois;

    for (var num in list) {
      list[Number(num)].malice = props.dbNegativeEmotions[0];
    }

    setSelectRois(Object.assign([], list));

  }, [props.dbNegativeEmotions]);

  const createSkillList = (useWorks) => {
    let list = [];

    if (useWorks.skill1 !== "") {
      list.push({ id: useWorks.skill1, value: useWorks.value1 });
    }

    if (useWorks.skill2 !== "") {
      list.push({ id: useWorks.skill2, value: useWorks.value2 });
    }

    if (useWorks.skill3 !== "") {
      list.push({ id: useWorks.skill3, value: useWorks.value3 });
    }

    if (useWorks.skill4 !== "") {
      list.push({ id: useWorks.skill4, value: useWorks.value4 });
    }

    if (useWorks.skill5 !== "") {
      list.push({ id: useWorks.skill5, value: useWorks.value5 });
    }

    return list;
  };

  const initializeMainSkill = (mainSkillList) => {

    let list = mainSkillList;

    for (var index in list) {
      list[index].initVal = "0";
    }

    return list;

  };

  // ワークス変更時の技能設定
  const setSkillValue = (value, tempAbilities) => {
    let tempMainSkillList = initializeMainSkill(mainSkills);
    let tempSubSkillList = subSkills;

    let worksSkillList = createSkillList(value);

    var tempSubSkill;

    for (var index in worksSkillList) {

      switch (worksSkillList[index].id.split(":")[0]) {
        case mainSkillSortName.MELEE.ID:
          tempMainSkillList[mainSkillSortNum.MELEE].initVal = worksSkillList[index].value;
          tempMainSkillList[mainSkillSortNum.MELEE].judgeVal
            = makeJudgeVal(tempAbilities[abilityTableRowNum.TOTAL].body, tempMainSkillList[mainSkillSortNum.MELEE].initVal,
              tempMainSkillList[mainSkillSortNum.MELEE].growVal, tempMainSkillList[mainSkillSortNum.MELEE].otherVal);
          break;

        case mainSkillSortName.AVOID.ID:
          tempMainSkillList[mainSkillSortNum.AVOID].initVal = worksSkillList[index].value;
          tempMainSkillList[mainSkillSortNum.AVOID].judgeVal
            = makeJudgeVal(tempAbilities[abilityTableRowNum.TOTAL].body, tempMainSkillList[mainSkillSortNum.AVOID].initVal,
              tempMainSkillList[mainSkillSortNum.AVOID].growVal, tempMainSkillList[mainSkillSortNum.AVOID].otherVal);
          break;

        case mainSkillSortName.SHOOT.ID:
          tempMainSkillList[mainSkillSortNum.SHOOT].initVal = worksSkillList[index].value;
          tempMainSkillList[mainSkillSortNum.SHOOT].judgeVal
            = makeJudgeVal(tempAbilities[abilityTableRowNum.TOTAL].sense, tempMainSkillList[mainSkillSortNum.SHOOT].initVal,
              tempMainSkillList[mainSkillSortNum.SHOOT].growVal, tempMainSkillList[mainSkillSortNum.SHOOT].otherVal);
          break;

        case mainSkillSortName.PERCEPTION.ID:
          tempMainSkillList[mainSkillSortNum.PERCEPTION].initVal = worksSkillList[index].value;
          tempMainSkillList[mainSkillSortNum.PERCEPTION].judgeVal
            = makeJudgeVal(tempAbilities[abilityTableRowNum.TOTAL].sense, tempMainSkillList[mainSkillSortNum.PERCEPTION].initVal,
              tempMainSkillList[mainSkillSortNum.PERCEPTION].growVal, tempMainSkillList[mainSkillSortNum.PERCEPTION].otherVal);
          break;

        case mainSkillSortName.RC.ID:
          tempMainSkillList[mainSkillSortNum.RC].initVal = worksSkillList[index].value;
          tempMainSkillList[mainSkillSortNum.RC].judgeVal
            = makeJudgeVal(tempAbilities[abilityTableRowNum.TOTAL].spirit, tempMainSkillList[mainSkillSortNum.RC].initVal,
              tempMainSkillList[mainSkillSortNum.RC].growVal, tempMainSkillList[mainSkillSortNum.RC].otherVal);
          break;

        case mainSkillSortName.INTENTION.ID:
          tempMainSkillList[mainSkillSortNum.INTENTION].initVal = worksSkillList[index].value;
          tempMainSkillList[mainSkillSortNum.INTENTION].judgeVal
            = makeJudgeVal(tempAbilities[abilityTableRowNum.TOTAL].spirit, tempMainSkillList[mainSkillSortNum.INTENTION].initVal,
              tempMainSkillList[mainSkillSortNum.INTENTION].growVal, tempMainSkillList[mainSkillSortNum.INTENTION].otherVal);
          break;

        case mainSkillSortName.NEGOTIATION.ID:
          tempMainSkillList[mainSkillSortNum.NEGOTIATION].initVal = worksSkillList[index].value;
          tempMainSkillList[mainSkillSortNum.NEGOTIATION].judgeVal
            = makeJudgeVal(tempAbilities[abilityTableRowNum.TOTAL].society, tempMainSkillList[mainSkillSortNum.NEGOTIATION].initVal,
              tempMainSkillList[mainSkillSortNum.NEGOTIATION].growVal, tempMainSkillList[mainSkillSortNum.NEGOTIATION].otherVal);
          break;

        case mainSkillSortName.PROCUREMENT.ID:
          tempMainSkillList[mainSkillSortNum.PROCUREMENT].initVal = worksSkillList[index].value;
          tempMainSkillList[mainSkillSortNum.PROCUREMENT].judgeVal
            = makeJudgeVal(tempAbilities[abilityTableRowNum.TOTAL].society, tempMainSkillList[mainSkillSortNum.PROCUREMENT].initVal,
              tempMainSkillList[mainSkillSortNum.PROCUREMENT].growVal, tempMainSkillList[mainSkillSortNum.PROCUREMENT].otherVal);
          break;

        case subSkillSortName.DRIVING.ID:
          tempSubSkill = { id: subSkillSortName.DRIVING.ID, name: subSkillSortName.DRIVING.NAME + "：" + worksSkillList[index].id.split(":")[1], initVal: worksSkillList[index].value, growVal: "0", otherVal: "0", judgeVal: "", memo: "" };
          tempSubSkill.judgeVal = makeJudgeVal(tempAbilities[abilityTableRowNum.TOTAL][subSkillAbilityCheck(tempSubSkill.id)],
            tempSubSkill.initVal, tempSubSkill.growVal, tempSubSkill.otherVal);
          tempSubSkillList.push(tempSubSkill);
          break;

        case subSkillSortName.ART.ID:
          tempSubSkill = { id: subSkillSortName.ART.ID, name: subSkillSortName.ART.NAME + "：" + worksSkillList[index].id.split(":")[1], initVal: worksSkillList[index].value, growVal: "0", otherVal: "0", judgeVal: "", memo: "" };
          tempSubSkill.judgeVal = makeJudgeVal(tempAbilities[abilityTableRowNum.TOTAL][subSkillAbilityCheck(tempSubSkill.id)],
            tempSubSkill.initVal, tempSubSkill.growVal, tempSubSkill.otherVal);
          tempSubSkillList.push(tempSubSkill);
          break;

        case subSkillSortName.KNOWLEDGE.ID:
          tempSubSkill = { id: subSkillSortName.KNOWLEDGE.ID, name: subSkillSortName.KNOWLEDGE.NAME + "：" + worksSkillList[index].id.split(":")[1], initVal: worksSkillList[index].value, growVal: "0", otherVal: "0", judgeVal: "", memo: "" };
          tempSubSkill.judgeVal = makeJudgeVal(tempAbilities[abilityTableRowNum.TOTAL][subSkillAbilityCheck(tempSubSkill.id)],
            tempSubSkill.initVal, tempSubSkill.growVal, tempSubSkill.otherVal);
          tempSubSkillList.push(tempSubSkill);
          break;

        case subSkillSortName.INFOMATION.ID:
          tempSubSkill = { id: subSkillSortName.INFOMATION.ID, name: subSkillSortName.INFOMATION.NAME + "：" + worksSkillList[index].id.split(":")[1], initVal: worksSkillList[index].value, growVal: "0", otherVal: "0", judgeVal: "", memo: "" };
          tempSubSkill.judgeVal = makeJudgeVal(tempAbilities[abilityTableRowNum.TOTAL][subSkillAbilityCheck(tempSubSkill.id)],
            tempSubSkill.initVal, tempSubSkill.growVal, tempSubSkill.otherVal);
          tempSubSkillList.push(tempSubSkill);
          break;

        default:
          break;
      }
    }

    setMainSkills(Object.assign([], tempMainSkillList));
    setSubSkills(Object.assign([], tempSubSkillList));

    return tempMainSkillList;
  };

  const setInitErosion = (impulseVal, awakeningVal) => {

    let list = abilityValues;

    list[abilityTableRowNum.INITIALVAL].erosion
      = String(Number(impulseVal) + Number(awakeningVal));

    sumAbility(list);
    setAbilityValues(Object.assign([], list));

    // 常備化ポイント再計算
    let totalProcurement = 0
    totalProcurement = totalProcurement + Number(mainSkills[mainSkillSortNum.PROCUREMENT].initVal);
    totalProcurement = totalProcurement + Number(mainSkills[mainSkillSortNum.PROCUREMENT].growVal);
    totalProcurement = totalProcurement + Number(mainSkills[mainSkillSortNum.PROCUREMENT].otherVal);

    calcStandbyPoint(Number(list[abilityTableRowNum.TOTAL].society), totalProcurement);
  };

  const resetAbility = (list) => {
    list[abilityTableRowNum.INITIALVAL].body = "0";
    list[abilityTableRowNum.INITIALVAL].sense = "0";
    list[abilityTableRowNum.INITIALVAL].spirit = "0";
    list[abilityTableRowNum.INITIALVAL].society = "0";

    return list;
  };

  const sumAbility = (list) => {
    list[abilityTableRowNum.TOTAL].body =
      String(Number(list[abilityTableRowNum.SYNDROME1].body)
        + Number(list[abilityTableRowNum.SYNDROME2].body)
        + Number(list[abilityTableRowNum.INITIALVAL].body)
        + Number(list[abilityTableRowNum.GROWVAL].body)
        + Number(list[abilityTableRowNum.EFFECTVAL].body)
        + Number(list[abilityTableRowNum.OTHERVAL].body));

    list[abilityTableRowNum.TOTAL].sense =
      String(Number(list[abilityTableRowNum.SYNDROME1].sense)
        + Number(list[abilityTableRowNum.SYNDROME2].sense)
        + Number(list[abilityTableRowNum.INITIALVAL].sense)
        + Number(list[abilityTableRowNum.GROWVAL].sense)
        + Number(list[abilityTableRowNum.EFFECTVAL].sense)
        + Number(list[abilityTableRowNum.OTHERVAL].sense));

    list[abilityTableRowNum.TOTAL].spirit =
      String(Number(list[abilityTableRowNum.SYNDROME1].spirit)
        + Number(list[abilityTableRowNum.SYNDROME2].spirit)
        + Number(list[abilityTableRowNum.INITIALVAL].spirit)
        + Number(list[abilityTableRowNum.GROWVAL].spirit)
        + Number(list[abilityTableRowNum.EFFECTVAL].spirit)
        + Number(list[abilityTableRowNum.OTHERVAL].spirit));

    list[abilityTableRowNum.TOTAL].society =
      String(Number(list[abilityTableRowNum.SYNDROME1].society)
        + Number(list[abilityTableRowNum.SYNDROME2].society)
        + Number(list[abilityTableRowNum.INITIALVAL].society)
        + Number(list[abilityTableRowNum.GROWVAL].society)
        + Number(list[abilityTableRowNum.EFFECTVAL].society)
        + Number(list[abilityTableRowNum.OTHERVAL].society));

    list[abilityTableRowNum.TOTAL].hp =
      String((Number(list[abilityTableRowNum.TOTAL].body) * 2)
        + Number(list[abilityTableRowNum.TOTAL].spirit) + 20
        + Number(list[abilityTableRowNum.EFFECTVAL].hp)
        + Number(list[abilityTableRowNum.OTHERVAL].hp));

    list[abilityTableRowNum.TOTAL].erosion =
      String(Number(list[abilityTableRowNum.INITIALVAL].erosion)
        + Number(list[abilityTableRowNum.EFFECTVAL].erosion)
        + Number(list[abilityTableRowNum.OTHERVAL].erosion));

    list[abilityTableRowNum.TOTAL].action =
      String((Number(list[abilityTableRowNum.TOTAL].sense) * 2)
        + Number(list[abilityTableRowNum.TOTAL].spirit)
        + Number(list[abilityTableRowNum.EFFECTVAL].action)
        + Number(list[abilityTableRowNum.OTHERVAL].action));

    let nomalMovePoint = Number(list[abilityTableRowNum.TOTAL].action) + 5
      + Number(list[abilityTableRowNum.EFFECTVAL].move)
      + Number(list[abilityTableRowNum.OTHERVAL].move);

    list[abilityTableRowNum.TOTAL].move = String(nomalMovePoint) + "/" + String(nomalMovePoint * 2);
  }

  const setSyndrome1Ability = (value) => {
    let list = abilityValues;

    list[abilityTableRowNum.SYNDROME1].body = value.body;
    list[abilityTableRowNum.SYNDROME1].sense = value.sense;
    list[abilityTableRowNum.SYNDROME1].spirit = value.spirit;
    list[abilityTableRowNum.SYNDROME1].society = value.society;

    sumAbility(list);
    setAbilityValues(Object.assign([], list));
    calcAllSkillVal(list);

    // 常備化ポイント再計算
    let totalProcurement = 0
    totalProcurement = totalProcurement + Number(mainSkills[mainSkillSortNum.PROCUREMENT].initVal);
    totalProcurement = totalProcurement + Number(mainSkills[mainSkillSortNum.PROCUREMENT].growVal);
    totalProcurement = totalProcurement + Number(mainSkills[mainSkillSortNum.PROCUREMENT].otherVal);

    calcStandbyPoint(Number(list[abilityTableRowNum.TOTAL].society), totalProcurement);
  };

  const setSyndrome2Ability = (value) => {
    let list = abilityValues;

    list[abilityTableRowNum.SYNDROME2].body = value.body;
    list[abilityTableRowNum.SYNDROME2].sense = value.sense;
    list[abilityTableRowNum.SYNDROME2].spirit = value.spirit;
    list[abilityTableRowNum.SYNDROME2].society = value.society;

    sumAbility(list);
    setAbilityValues(Object.assign([], list));
    calcAllSkillVal(list);

    // 常備化ポイント再計算
    let totalProcurement = 0
    totalProcurement = totalProcurement + Number(mainSkills[mainSkillSortNum.PROCUREMENT].initVal);
    totalProcurement = totalProcurement + Number(mainSkills[mainSkillSortNum.PROCUREMENT].growVal);
    totalProcurement = totalProcurement + Number(mainSkills[mainSkillSortNum.PROCUREMENT].otherVal);

    calcStandbyPoint(Number(list[abilityTableRowNum.TOTAL].society), totalProcurement);
  };

  const setWorksAbility = (value) => {

    let list = abilityValues;

    list = resetAbility(list);

    switch (value.ability) {

      case abilities.BODY:
        list[abilityTableRowNum.INITIALVAL].body = "1";
        break;

      case abilities.SENSE:
        list[abilityTableRowNum.INITIALVAL].sense = "1";
        break;

      case abilities.SPIRIT:
        list[abilityTableRowNum.INITIALVAL].spirit = "1";
        break;

      case abilities.SOCIETY:
        list[abilityTableRowNum.INITIALVAL].society = "1";
        break;

      default:
        break;
    }

    sumAbility(list);
    setAbilityValues(Object.assign([], list));

    let tempMainSkillList = setSkillValue(value, list);

    // 常備化ポイント再計算
    let totalProcurement = 0
    totalProcurement = totalProcurement + Number(tempMainSkillList[mainSkillSortNum.PROCUREMENT].initVal);
    totalProcurement = totalProcurement + Number(tempMainSkillList[mainSkillSortNum.PROCUREMENT].growVal);
    totalProcurement = totalProcurement + Number(tempMainSkillList[mainSkillSortNum.PROCUREMENT].otherVal);

    calcStandbyPoint(Number(list[abilityTableRowNum.TOTAL].society), totalProcurement);
  }

  const calcStandbyPoint = (society, procurement) => {
    setStandbyPoint(String((society * 2) + (procurement * 2)));
  };

  const handleDrawerOpen = () => {
    setMenuOpen(true);
  };

  const handleDrawerClose = () => {
    setMenuOpen(false);
  };

  const addSelectWorks = (value) => {
    setWorksAbility(value);
    setWorks(value);
  };

  const selectUserAddSubSkill = (value, index) => {
    let list = userAddSubSkills;

    list[index].id = value;
    list[index].name = subSkillSortName[value].NAME;
    list[index].judgeVal
      = makeJudgeVal(abilityValues[abilityTableRowNum.TOTAL][subSkillAbilityCheck(list[index].id)],
        list[index].initVal, list[index].growVal, list[index].otherVal);

    setUserAddSubSkills(Object.assign([], list));
  };

  const addSelectName = (value) => {
    setName(value);
  };

  const addSelectCodeName = (value) => {
    setCodeName(value);
  };

  const addSelectSex = (value) => {
    setSex(value);
  };

  const addSelectAge = (value) => {
    setAge(value);
  };

  const addSelectCover = (value) => {
    setCover(value);
  };

  const addSelectOrigin = (value) => {
    setOrigin(value);
  };

  const addSelectExperience = (value) => {
    setExperience(value);
  };

  const addSelectEncounter = (value) => {
    setEncounter(value);
  };

  const addSelectImpulse = (value) => {
    setImpulse(value);
    setInitErosion(value.erosion_point, awakening.erosion_point);
  };

  const addSelectAwakening = (value) => {
    setAwakening(value);
    setInitErosion(impulse.erosion_point, value.erosion_point);
  };

  const makeJudgeVal = (abilityVal, initVal, growVal, otherVal) => {
    return (abilityVal + "d + " + String(Number(initVal) + Number(growVal) + Number(otherVal)));
  }

  const calcAllSkillVal = (tempAbilities) => {
    // メインスキルの技能値計算
    let tempMainSkillList = mainSkills;

    tempMainSkillList[mainSkillSortNum.MELEE].judgeVal
      = makeJudgeVal(tempAbilities[abilityTableRowNum.TOTAL].body, tempMainSkillList[mainSkillSortNum.MELEE].initVal,
        tempMainSkillList[mainSkillSortNum.MELEE].growVal, tempMainSkillList[mainSkillSortNum.MELEE].otherVal);

    tempMainSkillList[mainSkillSortNum.AVOID].judgeVal
      = makeJudgeVal(tempAbilities[abilityTableRowNum.TOTAL].body, tempMainSkillList[mainSkillSortNum.AVOID].initVal,
        tempMainSkillList[mainSkillSortNum.AVOID].growVal, tempMainSkillList[mainSkillSortNum.AVOID].otherVal);

    tempMainSkillList[mainSkillSortNum.SHOOT].judgeVal
      = makeJudgeVal(tempAbilities[abilityTableRowNum.TOTAL].sense, tempMainSkillList[mainSkillSortNum.SHOOT].initVal,
        tempMainSkillList[mainSkillSortNum.SHOOT].growVal, tempMainSkillList[mainSkillSortNum.SHOOT].otherVal);

    tempMainSkillList[mainSkillSortNum.PERCEPTION].judgeVal
      = makeJudgeVal(tempAbilities[abilityTableRowNum.TOTAL].sense, tempMainSkillList[mainSkillSortNum.PERCEPTION].initVal,
        tempMainSkillList[mainSkillSortNum.PERCEPTION].growVal, tempMainSkillList[mainSkillSortNum.PERCEPTION].otherVal);

    tempMainSkillList[mainSkillSortNum.RC].judgeVal
      = makeJudgeVal(tempAbilities[abilityTableRowNum.TOTAL].spirit, tempMainSkillList[mainSkillSortNum.RC].initVal,
        tempMainSkillList[mainSkillSortNum.RC].growVal, tempMainSkillList[mainSkillSortNum.RC].otherVal);

    tempMainSkillList[mainSkillSortNum.INTENTION].judgeVal
      = makeJudgeVal(tempAbilities[abilityTableRowNum.TOTAL].spirit, tempMainSkillList[mainSkillSortNum.INTENTION].initVal,
        tempMainSkillList[mainSkillSortNum.INTENTION].growVal, tempMainSkillList[mainSkillSortNum.INTENTION].otherVal);

    tempMainSkillList[mainSkillSortNum.NEGOTIATION].judgeVal
      = makeJudgeVal(tempAbilities[abilityTableRowNum.TOTAL].society, tempMainSkillList[mainSkillSortNum.NEGOTIATION].initVal,
        tempMainSkillList[mainSkillSortNum.NEGOTIATION].growVal, tempMainSkillList[mainSkillSortNum.NEGOTIATION].otherVal);

    tempMainSkillList[mainSkillSortNum.PROCUREMENT].judgeVal
      = makeJudgeVal(tempAbilities[abilityTableRowNum.TOTAL].society, tempMainSkillList[mainSkillSortNum.PROCUREMENT].initVal,
        tempMainSkillList[mainSkillSortNum.PROCUREMENT].growVal, tempMainSkillList[mainSkillSortNum.PROCUREMENT].otherVal);

    setMainSkills(Object.assign([], tempMainSkillList));

    // ワークス変更で追加されたサブスキルの技能値計算
    let tempSubSkillList = subSkills;

    for (var index in tempSubSkillList) {
      tempSubSkillList[index].judgeVal
        = makeJudgeVal(tempAbilities[abilityTableRowNum.TOTAL][subSkillAbilityCheck(tempSubSkillList[index].id)],
          tempSubSkillList[index].initVal, tempSubSkillList[index].growVal, tempSubSkillList[index].otherVal);
    }

    setSubSkills(Object.assign([], tempSubSkillList));

    // ユーザーが追加したサブスキルの技能値計算
    let tempUserAddSubSkillList = userAddSubSkills;
    for (var index in tempUserAddSubSkillList) {
      tempUserAddSubSkillList[index].judgeVal
        = makeJudgeVal(tempAbilities[abilityTableRowNum.TOTAL][subSkillAbilityCheck(tempUserAddSubSkillList[index].id)],
          tempUserAddSubSkillList[index].initVal, tempUserAddSubSkillList[index].growVal, tempUserAddSubSkillList[index].otherVal);
    }

    setUserAddSubSkills(Object.assign([], tempUserAddSubSkillList));
  };

  const handleToChangeMainSkillInput = (type, value) => {

    let list = mainSkills;

    switch (type) {

      // melee
      case skillTableInputTypes.MELEEGROWVAL:
        list[mainSkillSortNum.MELEE].growVal = numCheck(value);
        list[mainSkillSortNum.MELEE].judgeVal
          = makeJudgeVal(abilityValues[abilityTableRowNum.TOTAL].body, list[mainSkillSortNum.MELEE].initVal,
            list[mainSkillSortNum.MELEE].growVal, list[mainSkillSortNum.MELEE].otherVal);
        break;

      case skillTableInputTypes.MELEEOTHERVAL:
        list[mainSkillSortNum.MELEE].otherVal = numCheck(value);
        list[mainSkillSortNum.MELEE].judgeVal
          = makeJudgeVal(abilityValues[abilityTableRowNum.TOTAL].body, list[mainSkillSortNum.MELEE].initVal,
            list[mainSkillSortNum.MELEE].growVal, list[mainSkillSortNum.MELEE].otherVal);
        break;

      case skillTableInputTypes.MELEEMEMO:
        list[mainSkillSortNum.MELEE].memo = value;
        break;

      // avoid
      case skillTableInputTypes.AVOIDGROWVAL:
        list[mainSkillSortNum.AVOID].growVal = numCheck(value);
        list[mainSkillSortNum.AVOID].judgeVal
          = makeJudgeVal(abilityValues[abilityTableRowNum.TOTAL].body, list[mainSkillSortNum.AVOID].initVal,
            list[mainSkillSortNum.AVOID].growVal, list[mainSkillSortNum.AVOID].otherVal);
        break;

      case skillTableInputTypes.AVOIDOTHERVAL:
        list[mainSkillSortNum.AVOID].otherVal = numCheck(value);
        list[mainSkillSortNum.AVOID].judgeVal
          = makeJudgeVal(abilityValues[abilityTableRowNum.TOTAL].body, list[mainSkillSortNum.AVOID].initVal,
            list[mainSkillSortNum.AVOID].growVal, list[mainSkillSortNum.AVOID].otherVal);
        break;

      case skillTableInputTypes.AVOIDMEMO:
        list[mainSkillSortNum.AVOID].memo = value;
        break;

      // shoot
      case skillTableInputTypes.SHOOTGROWVAL:
        list[mainSkillSortNum.SHOOT].growVal = numCheck(value);
        list[mainSkillSortNum.SHOOT].judgeVal
          = makeJudgeVal(abilityValues[abilityTableRowNum.TOTAL].sense, list[mainSkillSortNum.SHOOT].initVal,
            list[mainSkillSortNum.SHOOT].growVal, list[mainSkillSortNum.SHOOT].otherVal);
        break;

      case skillTableInputTypes.SHOOTOTHERVAL:
        list[mainSkillSortNum.SHOOT].otherVal = numCheck(value);
        list[mainSkillSortNum.SHOOT].judgeVal
          = makeJudgeVal(abilityValues[abilityTableRowNum.TOTAL].sense, list[mainSkillSortNum.SHOOT].initVal,
            list[mainSkillSortNum.SHOOT].growVal, list[mainSkillSortNum.SHOOT].otherVal);
        break;

      case skillTableInputTypes.SHOOTMEMO:
        list[mainSkillSortNum.SHOOT].memo = value;
        break;

      // perception
      case skillTableInputTypes.PERCEPTIONGROWVAL:
        list[mainSkillSortNum.PERCEPTION].growVal = numCheck(value);
        list[mainSkillSortNum.PERCEPTION].judgeVal
          = makeJudgeVal(abilityValues[abilityTableRowNum.TOTAL].sense, list[mainSkillSortNum.PERCEPTION].initVal,
            list[mainSkillSortNum.PERCEPTION].growVal, list[mainSkillSortNum.PERCEPTION].otherVal);
        break;

      case skillTableInputTypes.PERCEPTIONOTHERVAL:
        list[mainSkillSortNum.PERCEPTION].otherVal = numCheck(value);
        list[mainSkillSortNum.PERCEPTION].judgeVal
          = makeJudgeVal(abilityValues[abilityTableRowNum.TOTAL].sense, list[mainSkillSortNum.PERCEPTION].initVal,
            list[mainSkillSortNum.PERCEPTION].growVal, list[mainSkillSortNum.PERCEPTION].otherVal);
        break;

      case skillTableInputTypes.PERCEPTIONMEMO:
        list[mainSkillSortNum.PERCEPTION].memo = value;
        break;

      // RC
      case skillTableInputTypes.RCGROWVAL:
        list[mainSkillSortNum.RC].growVal = numCheck(value);
        list[mainSkillSortNum.RC].judgeVal
          = makeJudgeVal(abilityValues[abilityTableRowNum.TOTAL].spirit, list[mainSkillSortNum.RC].initVal,
            list[mainSkillSortNum.RC].growVal, list[mainSkillSortNum.RC].otherVal);
        break;

      case skillTableInputTypes.RCOTHERVAL:
        list[mainSkillSortNum.RC].otherVal = numCheck(value);
        list[mainSkillSortNum.RC].judgeVal
          = makeJudgeVal(abilityValues[abilityTableRowNum.TOTAL].spirit, list[mainSkillSortNum.RC].initVal,
            list[mainSkillSortNum.RC].growVal, list[mainSkillSortNum.RC].otherVal);
        break;

      case skillTableInputTypes.RCMEMO:
        list[mainSkillSortNum.RC].memo = value;
        break;

      // intention
      case skillTableInputTypes.INTENTIONGROWVAL:
        list[mainSkillSortNum.INTENTION].growVal = numCheck(value);
        list[mainSkillSortNum.INTENTION].judgeVal
          = makeJudgeVal(abilityValues[abilityTableRowNum.TOTAL].spirit, list[mainSkillSortNum.INTENTION].initVal,
            list[mainSkillSortNum.INTENTION].growVal, list[mainSkillSortNum.INTENTION].otherVal);
        break;

      case skillTableInputTypes.INTENTIONOTHERVAL:
        list[mainSkillSortNum.INTENTION].otherVal = numCheck(value);
        list[mainSkillSortNum.INTENTION].judgeVal
          = makeJudgeVal(abilityValues[abilityTableRowNum.TOTAL].spirit, list[mainSkillSortNum.INTENTION].initVal,
            list[mainSkillSortNum.INTENTION].growVal, list[mainSkillSortNum.INTENTION].otherVal);
        break;

      case skillTableInputTypes.INTENTIONMEMO:
        list[mainSkillSortNum.INTENTION].memo = value;
        break;

      // negotiation
      case skillTableInputTypes.NEGOTIATIONGROWVAL:
        list[mainSkillSortNum.NEGOTIATION].growVal = numCheck(value);
        list[mainSkillSortNum.NEGOTIATION].judgeVal
          = makeJudgeVal(abilityValues[abilityTableRowNum.TOTAL].society, list[mainSkillSortNum.NEGOTIATION].initVal,
            list[mainSkillSortNum.NEGOTIATION].growVal, list[mainSkillSortNum.NEGOTIATION].otherVal);
        break;

      case skillTableInputTypes.NEGOTIATIONOTHERVAL:
        list[mainSkillSortNum.NEGOTIATION].otherVal = numCheck(value);
        list[mainSkillSortNum.NEGOTIATION].judgeVal
          = makeJudgeVal(abilityValues[abilityTableRowNum.TOTAL].society, list[mainSkillSortNum.NEGOTIATION].initVal,
            list[mainSkillSortNum.NEGOTIATION].growVal, list[mainSkillSortNum.NEGOTIATION].otherVal);
        break;

      case skillTableInputTypes.NEGOTIATIONMEMO:
        list[mainSkillSortNum.NEGOTIATION].memo = value;
        break;

      // procurement
      case skillTableInputTypes.PROCUREMENTGROWVAL:
        list[mainSkillSortNum.PROCUREMENT].growVal = numCheck(value);
        list[mainSkillSortNum.PROCUREMENT].judgeVal
          = makeJudgeVal(abilityValues[abilityTableRowNum.TOTAL].society, list[mainSkillSortNum.PROCUREMENT].initVal,
            list[mainSkillSortNum.PROCUREMENT].growVal, list[mainSkillSortNum.PROCUREMENT].otherVal);
        break;

      case skillTableInputTypes.PROCUREMENTOTHERVAL:
        list[mainSkillSortNum.PROCUREMENT].otherVal = numCheck(value);
        list[mainSkillSortNum.PROCUREMENT].judgeVal
          = makeJudgeVal(abilityValues[abilityTableRowNum.TOTAL].society, list[mainSkillSortNum.PROCUREMENT].initVal,
            list[mainSkillSortNum.PROCUREMENT].growVal, list[mainSkillSortNum.PROCUREMENT].otherVal);
        break;

      case skillTableInputTypes.PROCUREMENTMEMO:
        list[mainSkillSortNum.PROCUREMENT].memo = value;
        break;

      default:
        break;

    }
    setMainSkills(Object.assign([], list));

    // 常備化ポイント設定
    let totalProcurement = 0
    totalProcurement = totalProcurement + Number(list[mainSkillSortNum.PROCUREMENT].initVal);
    totalProcurement = totalProcurement + Number(list[mainSkillSortNum.PROCUREMENT].growVal);
    totalProcurement = totalProcurement + Number(list[mainSkillSortNum.PROCUREMENT].otherVal);

    calcStandbyPoint(Number(abilityValues[abilityTableRowNum.TOTAL].society), totalProcurement);
  };

  const subSkillAbilityCheck = (skillId) => {
    switch (skillId) {

      case subSkillSortName.DRIVING.ID:
        return abilities.BODY;

      case subSkillSortName.ART.ID:
        return abilities.SENSE;

      case subSkillSortName.KNOWLEDGE.ID:
        return abilities.SPIRIT;

      case subSkillSortName.INFOMATION.ID:
        return abilities.SOCIETY;

      default:
    }
  };

  const handleToChangeSubSkillInput = (index, type, value) => {

    let list = subSkills;

    switch (type) {
      case skillRow.growVal.id:
        list[index].growVal = numCheck(value);
        list[index].judgeVal
          = makeJudgeVal(abilityValues[abilityTableRowNum.TOTAL][subSkillAbilityCheck(list[index].id)],
            list[index].initVal, list[index].growVal, list[index].otherVal);
        break;

      case skillRow.otherVal.id:
        list[index].otherVal = numCheck(value);
        list[index].judgeVal
          = makeJudgeVal(abilityValues[abilityTableRowNum.TOTAL][subSkillAbilityCheck(list[index].id)],
            list[index].initVal, list[index].growVal, list[index].otherVal);
        break;

      case skillRow.memo.id:
        list[index].memo = value;
        break;

      default:
        break;
    }

    setSubSkills(Object.assign([], list));
  }

  const handleToChangeUserAddSubSkillInput = (index, type, value) => {

    let list = userAddSubSkills;

    switch (type) {
      case skillRow.growVal.id:
        list[index].growVal = numCheck(value);
        list[index].judgeVal
          = makeJudgeVal(abilityValues[abilityTableRowNum.TOTAL][subSkillAbilityCheck(list[index].id)],
            list[index].initVal, list[index].growVal, list[index].otherVal);
        break;

      case skillRow.otherVal.id:
        list[index].otherVal = numCheck(value);
        list[index].judgeVal
          = makeJudgeVal(abilityValues[abilityTableRowNum.TOTAL][subSkillAbilityCheck(list[index].id)],
            list[index].initVal, list[index].growVal, list[index].otherVal);
        break;

      case skillRow.memo.id:
        list[index].memo = value;
        break;

      default:
        break;
    }

    setUserAddSubSkills(Object.assign([], list));
  }

  const handleToChangeAbilityInput = (type, value) => {
    let list = abilityValues;

    switch (type) {
      case abilityTableInputTypes.GROWBODY:
        list[abilityTableRowNum.GROWVAL].body = numCheck(value);
        break;

      case abilityTableInputTypes.GROWSENSE:
        list[abilityTableRowNum.GROWVAL].sense = numCheck(value);
        break;

      case abilityTableInputTypes.GROWSPIRIT:
        list[abilityTableRowNum.GROWVAL].spirit = numCheck(value);
        break;

      case abilityTableInputTypes.GROWSOCIETY:
        list[abilityTableRowNum.GROWVAL].society = numCheck(value);
        break;

      case abilityTableInputTypes.OTHERVALBODY:
        list[abilityTableRowNum.OTHERVAL].body = numCheck(value);
        break;

      case abilityTableInputTypes.OTHERVALSENSE:
        list[abilityTableRowNum.OTHERVAL].sense = numCheck(value);
        break;

      case abilityTableInputTypes.OTHERVALSPIRIT:
        list[abilityTableRowNum.OTHERVAL].spirit = numCheck(value);
        break;

      case abilityTableInputTypes.OTHERVALSOCIETY:
        list[abilityTableRowNum.OTHERVAL].society = numCheck(value);
        break;

      case abilityTableInputTypes.OTHERVALHP:
        list[abilityTableRowNum.OTHERVAL].hp = numCheck(value);
        break;

      case abilityTableInputTypes.OTHERVALEROSION:
        list[abilityTableRowNum.OTHERVAL].erosion = numCheck(value);
        break;

      case abilityTableInputTypes.OTHERVALACTION:
        list[abilityTableRowNum.OTHERVAL].action = numCheck(value);
        break;

      case abilityTableInputTypes.OTHERVALMOVE:
        list[abilityTableRowNum.OTHERVAL].move = numCheck(value);
        break;

      default:
        break;
    }
    sumAbility(list);
    setAbilityValues(Object.assign([], list));
    calcAllSkillVal(list);

    // 常備化ポイント再計算
    let totalProcurement = 0
    totalProcurement = totalProcurement + Number(mainSkills[mainSkillSortNum.PROCUREMENT].initVal);
    totalProcurement = totalProcurement + Number(mainSkills[mainSkillSortNum.PROCUREMENT].growVal);
    totalProcurement = totalProcurement + Number(mainSkills[mainSkillSortNum.PROCUREMENT].otherVal);

    calcStandbyPoint(Number(list[abilityTableRowNum.TOTAL].society), totalProcurement);
  };

  const handleToChangeRoisInput = (type, index, value) => {
    let list = selectRois;

    switch (type) {

      case roisTableInputTypes.SROIS:

        if (list[index].srois === "0") {
          list[index].srois = "1";
        }
        else {
          list[index].srois = "0";
        }

        for (var num in list) {
          if (num !== String(index)) {
            list[Number(num)].srois = "0";
          }
        }
        break;

      case roisTableInputTypes.NAME:
        list[index].name = value;
        break;

      case roisTableInputTypes.MEMO:
        list[index].memo = value;
        break;

      default:
        break;
    }

    setSelectRois(Object.assign([], list));
  };

  // 追加ボタン押下時に成長行を追加する
  const handleToAddGrowRow = () => {

    let list = growValues;

    list.push({ point: "0", memo: "" });
    setGrowValues(Object.assign([], list));
  };

  // 追加ボタン押下時に成長行を追加する
  const handleToSubSkillRow = () => {

    let list = userAddSubSkills;
    let tempSubSkill = { id: subSkillSortName.DRIVING.ID, name: subSkillSortName.DRIVING.NAME + "任意", initVal: "0", growVal: "0", otherVal: "0", judgeVal: "", memo: "" };

    tempSubSkill.judgeVal
      = makeJudgeVal(abilityValues[abilityTableRowNum.TOTAL].body,
        tempSubSkill.initVal, tempSubSkill.growVal, tempSubSkill.otherVal);
    list.push(tempSubSkill);
    setUserAddSubSkills(Object.assign([], list));
  };

  // 削除ボタン押下時にダイアログを表示
  // OK：末尾要素削除、キャンセル：削除実行しない
  const deleteGrowRow = (deleteFlag) => {

    if (deleteFlag) {
      let list = growValues;
      list.pop();
      setGrowValues(list);
    }
    setGrowRowDeleteDialogOpen(false);
  };

  // 削除確認ダイアログを開く
  const handleToOpenDeleteDialog = () => {
    setGrowRowDeleteDialogOpen(true);
  };

  // 成長点入力時にsetする
  const setGrowPoint = (targetIndex, value) => {

    let list = growValues;

    for (var index in list) {

      if (index == targetIndex) {
        list[index].point = numCheck(value);
        break;
      }
    }
    setGrowValues(Object.assign([], list));
  };

  // メモ入力時にsetする
  const handleToGrowMemo = (targetIndex, value) => {

    let list = growValues;

    for (var index in list) {

      if (index == targetIndex) {
        list[index].memo = value;
        break;
      }
    }
    setGrowValues(Object.assign([], list));
  };

  // レベルを保存
  const levelUpdate = (index, value) => {
    let list = selectEffects;
    list[index].level = numCheck(value);
    setSelectEffects(Object.assign([], list));
  }

  // 削除ボタン押下時にエフェクト行を削除する
  const removeSelectEffects = (index) => {
    let list = selectEffects;
    list.splice(index, 1);
    setSelectEffects(Object.assign([], list));
  }

  // 削除ボタン押下時にサブスキル行を削除する
  const removeSubSkills = (index) => {
    let list = subSkills;
    list.splice(index, 1);
    setSubSkills(Object.assign([], list));
  }

  // 削除ボタン押下時にユーザーが追加したサブスキル行を削除する
  const removeUserAddSubSkills = (index) => {
    let list = userAddSubSkills;
    list.splice(index, 1);
    setUserAddSubSkills(Object.assign([], list));
  }

  // 武器追加ダイアログで武器を追加する
  const addSelectWeapons = (addWeaponList) => {
    let list = selectWeapons;
    setSelectWeapons(Object.assign([], list.concat(addWeaponList)));
  }

  // 削除ボタン押下時に武器行を削除する
  const removeSelectWeapons = (index) => {
    let list = selectWeapons;
    list.splice(index, 1);
    setSelectWeapons(Object.assign([], list));
  }

  // 防具追加ダイアログで防具を追加する
  const addSelectArmors = (addArmorList) => {
    let list = selectArmors;
    setSelectArmors(Object.assign([], list.concat(addArmorList)));
  }

  // 削除ボタン押下時に防具行を削除する
  const removeSelectArmors = (index) => {
    let list = selectArmors;
    list.splice(index, 1);
    setSelectArmors(Object.assign([], list));
  }

  // 防具追加ダイアログで防具を追加する
  const addSelectItems = (addItemList) => {
    let list = selectItems;
    setSelectItems(Object.assign([], list.concat(addItemList)));
  }

  // 削除ボタン押下時にアイテム行を削除する
  const removeSelectItems = (index) => {
    let list = selectItems;
    list.splice(index, 1);
    setSelectItems(Object.assign([], list));
  }

  // 削除ボタン押下時に攻撃コンボ行を削除する
  const removeCombo = (index) => {
    let list = combos;
    list.splice(index, 1);
    setCombos(Object.assign([], list));
  }

  // ここでDBのシンドロームから能力値を抜き出し、abilityValueを更新する
  const handleSyndromeChange = (num, value) => {
    if (num === 1) {
      setSyndrome1(value);
      setSyndrome1Ability(value);
      if (value.english_name === "empty") {
        setSyndrome2(value);
        setSyndrome2Ability(value);
        setOptional(value);
      }
    }
    if (num === 2) {
      setSyndrome2(value);
      setSyndrome2Ability(value);
      if (value.english_name === "empty") {
        setOptional(value);
      }
    }
    if (num === 3) {
      setOptional(value);
    }
  };

  // 選択した好意を保存
  const selectFavor = (index, value) => {
    let list = selectRois;

    list[index].favor = value;
    setSelectRois(Object.assign([], list));
  }

  // 選択した悪意を保存
  const selectMalice = (index, value) => {
    let list = selectRois;

    list[index].malice = value;
    setSelectRois(Object.assign([], list));
  }

  const handleToPage = (id) => {
    switch (id) {
      // キャラクター詳細
      case ScreenPath.DETAIL.id:
        history.push(ScreenPath.DETAIL.path);
        break;

      // 技能値
      case ScreenPath.SKILL.id:
        history.push(ScreenPath.SKILL.path);
        break;

      // 能力値
      case ScreenPath.ABILITY.id:
        history.push(ScreenPath.ABILITY.path);
        break;

      // エフェクト
      case ScreenPath.EFFECT.id:
        history.push(ScreenPath.EFFECT.path);
        break;

      // アイテム
      case ScreenPath.ITEMS.id:
        history.push(ScreenPath.ITEMS.path);
        break;

      // ロイス
      case ScreenPath.ROIS.id:
        history.push(ScreenPath.ROIS.path);
        break;

      // コンボ
      case ScreenPath.COMBO.id:
        history.push(ScreenPath.COMBO.path);
        break;

      // プレイ
      case ScreenPath.PLAY.id:
        history.push(ScreenPath.PLAY.path);
        break;

      // エラー
      default:
        break;
    }
  };

  const handleUploadJsonFile = (e) => {
    
    var reader = new FileReader();
    reader.readAsText(e.target.files[0]);

    reader.addEventListener('load', function() {
      var characterData = JSON.parse(reader.result);
      setName(characterData.name);
      setCodeName(characterData.codeName);
      setSex(characterData.sex);
      setAge(characterData.age);
      setCover(characterData.cover);
      setOrigin(characterData.origin);
      setExperience(characterData.experience);
      setEncounter(characterData.encounter);
      setMainSkills(characterData.mainSkills);
      setSubSkills(characterData.subSkills);
      setUserAddSubSkills(characterData.userAddSubSkills);
      setGrowValues(characterData.growValues);
      setAbilityValues(characterData.abilityValues);
      setSelectEffects(characterData.selectEffects);
      setSelectWeapons(characterData.selectWeapons);
      setSelectArmors(characterData.selectArmors);
      setSelectItems(characterData.selectItems);
      setStandbyPoint(characterData.standbyPoint);

      // プルダウン要素
      setWorks(props.getDBWorksValue(characterData.works.name));
      setImpulse(props.getDBImpulseValue(characterData.impulse.name));
      setAwakening(props.getDBAwakeningValue(characterData.awakening.name));
      setSyndrome1(props.getDBSyndromeValue(characterData.syndrome1.name));
      setSyndrome2(props.getDBSyndromeValue(characterData.syndrome2.name));
      setOptional(props.getDBSyndromeValue(characterData.optional.name));


      let copySelectRois = characterData.selectRois;

      for(var index in copySelectRois){
        copySelectRois[index].favor = props.getDBPositiveEmotionValue(characterData.selectRois[index].favor.name);
        copySelectRois[index].malice = props.getDBNegativeEmotionValue(characterData.selectRois[index].malice.name);
      }
      setSelectRois(Object.assign([], copySelectRois));
    });

  }

  const handleDownloadJsonFile = () => {

    // ファイルネーム作成
    var fileName = name;
    if(fileName === ""){
      fileName = "名無しさん";
    }
    fileName = fileName + ".json";

    // Jsonの中身作成
    var jsonFileContent = {};
    jsonFileContent["name"] = name;
    jsonFileContent["codeName"] = codeName;
    jsonFileContent["sex"] = sex;
    jsonFileContent["age"] = age;
    jsonFileContent["cover"] = cover;
    jsonFileContent["origin"] = origin;
    jsonFileContent["experience"] = experience;
    jsonFileContent["encounter"] = encounter;
    jsonFileContent["works"] = works;
    jsonFileContent["impulse"] = impulse;
    jsonFileContent["awakening"] = awakening;
    jsonFileContent["mainSkills"] = mainSkills;
    jsonFileContent["subSkills"] = subSkills;
    jsonFileContent["userAddSubSkills"] = userAddSubSkills;
    jsonFileContent["growValues"] = growValues;
    jsonFileContent["syndrome1"] = syndrome1;
    jsonFileContent["syndrome2"] = syndrome2;
    jsonFileContent["optional"] = optional;
    jsonFileContent["abilityValues"] = abilityValues;
    jsonFileContent["selectEffects"] = selectEffects;
    jsonFileContent["selectWeapons"] = selectWeapons;
    jsonFileContent["selectArmors"] = selectArmors;
    jsonFileContent["selectItems"] = selectItems;
    jsonFileContent["standbyPoint"] = standbyPoint;
    jsonFileContent["selectRois"] = selectRois;

    const data = new Blob([JSON.stringify(jsonFileContent)], { type: 'text/json' });
    const jsonURL = window.URL.createObjectURL(data);
    const link = document.createElement('a');
    document.body.appendChild(link);
    link.href = jsonURL;
    link.setAttribute('download', fileName);
    link.click();
    document.body.removeChild(link);
  };

  const handleTest = () => {
    console.log("push now");
  };

  const drawer = (
    <div>
      <List>
        <ListItem button key={ScreenPath.DETAIL.id} onClick={() => handleToPage(ScreenPath.DETAIL.id)}>
          <ListItemIcon>
            <Tooltip title="キャラクター詳細">
              <EmojiPeople />
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary={"キャラクター詳細"} />
        </ListItem>

        <ListItem button key={ScreenPath.SKILL.id} onClick={() => handleToPage(ScreenPath.SKILL.id)}>
          <ListItemIcon>
            <Tooltip title="技能値">
              <EmojiObjects />
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary={"技能値"} />
        </ListItem>

        <ListItem button key={ScreenPath.ABILITY.id} onClick={() => handleToPage(ScreenPath.ABILITY.id)}>
          <ListItemIcon>
            <Tooltip title="能力値">
              <FitnessCenter />
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary={"能力値"} />
        </ListItem>

        <ListItem button key={ScreenPath.EFFECT.id} onClick={() => handleToPage(ScreenPath.EFFECT.id)}>
          <ListItemIcon>
            <Tooltip title="エフェクト">
              <Whatshot />
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary={"エフェクト"} />
        </ListItem>

        <ListItem button key={ScreenPath.ITEMS.id} onClick={() => handleToPage(ScreenPath.ITEMS.id)}>
          <ListItemIcon>
            <Tooltip title="アイテム">
              <Work />
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary={"アイテム"} />
        </ListItem>

        <ListItem button key={ScreenPath.ROIS.id} onClick={() => handleToPage(ScreenPath.ROIS.id)}>
          <ListItemIcon>
            <Tooltip title="ロイス">
              <People />
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary={"ロイス"} />
        </ListItem>

        <ListItem button key={ScreenPath.COMBO.id} onClick={() => handleToPage(ScreenPath.COMBO.id)}>
          <ListItemIcon>
            <Tooltip title="コンボ">
              <SportsHandball style={useStyles.menuButton} />
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary={"コンボ"} />
        </ListItem>

        <ListItem button disabled key={ScreenPath.PLAY.id} onClick={() => handleToPage(ScreenPath.PLAY.id)}>
          <ListItemIcon>
            {/* <Tooltip title="プレイ">
              <SportsKabaddi />
            </Tooltip> */}
            <Tooltip title="かいはつちゅう">
              <SportsKabaddi />
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary={"プレイ"} />
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem button key={"outputCsv"} onClick={handleDownloadJsonFile}>
          <ListItemIcon>
            <Tooltip title="JSON出力">
              <img
                src={jsonIcon}
                alt="JSONOutput"
              />
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary={"JSON出力"} />
        </ListItem>

        <ListItem button disabled key={"outputTxt"} onClick={handleTest}>
          <ListItemIcon>
            <Tooltip title="Txt出力">
              <img
                src={txtIcon}
                alt="TXTOutput"
              />
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary={"Txt出力"} />
        </ListItem>

        <ListItem button disabled key={"outputPdf"} onClick={handleTest}>
          <ListItemIcon>
            <Tooltip title="PDF出力">
              <img
                src={pdfIcon}
                alt="PDFOutput"
              />
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary={"PDF出力"} />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: menuOpen,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: menuOpen,
            })}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            {titleMap.app}
          </Typography>

          <input accept="text/json" className={classes.input} id="icon-button-file" type="file" onChange={handleUploadJsonFile} />
          <label htmlFor="icon-button-file">
            <Tooltip title="JSON アップロード">
              <IconButton 
                color="inherit" 
                aria-label="upload json" 
                component="span"
              >
                <CloudUploadIcon />
              </IconButton>
            </Tooltip>
          </label>

        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: menuOpen,
          [classes.drawerClose]: !menuOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: menuOpen,
            [classes.drawerClose]: !menuOpen,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        {drawer}
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route
            exact
            path={ScreenPath.TOP.path}
            render={
              () => <TopPageView/>
            }
          />
          <Route
            exact
            path={ScreenPath.DETAIL.path}
            render={() => <CharactorDetailView
              growValues={growValues}
              growRowDeleteDialogOpen={growRowDeleteDialogOpen}
              handleToOpenDeleteDialog={handleToOpenDeleteDialog}
              setGrowPoint={setGrowPoint}
              handleToGrowMemo={handleToGrowMemo}
              handleToAddGrowRow={handleToAddGrowRow}
              deleteGrowRow={deleteGrowRow}
              dbImpulses={props.dbImpulses}
              dbAwakenings={props.dbAwakenings}
              dbWorks={props.dbWorks}
              name={name}
              addSelectName={addSelectName}
              codeName={codeName}
              addSelectCodeName={addSelectCodeName}
              sex={sex}
              addSelectSex={addSelectSex}
              age={age}
              addSelectAge={addSelectAge}
              cover={cover}
              addSelectCover={addSelectCover}
              origin={origin}
              addSelectOrigin={addSelectOrigin}
              experience={experience}
              addSelectExperience={addSelectExperience}
              encounter={encounter}
              addSelectEncounter={addSelectEncounter}
              works={works}
              addSelectWorks={addSelectWorks}
              impulse={impulse}
              addSelectImpulse={addSelectImpulse}
              awakening={awakening}
              addSelectAwakening={addSelectAwakening}
              abilityValues={abilityValues}
              mainSkills={mainSkills}
              subSkills={subSkills}
              userAddSubSkills={userAddSubSkills}
              selectEffects={selectEffects}
              selectWeapons={selectWeapons}
              selectArmors={selectArmors}
              selectItems={selectItems}
              standbyPoint={standbyPoint}
            />}
          />
          <Route
            exact
            path={ScreenPath.SKILL.path}
            render={
              () => <SkillSettingView
                handleToChangeMainSkillInput={handleToChangeMainSkillInput}
                handleToChangeSubSkillInput={handleToChangeSubSkillInput}
                mainSkills={mainSkills}
                subSkills={subSkills}
                removeSubSkills={removeSubSkills}
                removeUserAddSubSkills={removeUserAddSubSkills}
                userAddSubSkills={userAddSubSkills}
                selectUserAddSubSkill={selectUserAddSubSkill}
                handleToSubSkillRow={handleToSubSkillRow}
                handleToChangeUserAddSubSkillInput={handleToChangeUserAddSubSkillInput}
              />
            }
          />
          <Route
            exact
            path={ScreenPath.ABILITY.path}
            render={
              () => <AbilitySettingView
                dbSyndromes={props.dbSyndromes}
                syndrome1={syndrome1}
                syndrome2={syndrome2}
                optional={optional}
                abilityValues={abilityValues}
                handleSyndromeChange={handleSyndromeChange}
                handleToChangeAbilityInput={handleToChangeAbilityInput}
              />
            }
          />
          <Route
            exact
            path={ScreenPath.EFFECT.path}
            render={
              () => <EffectSettingView
                dbEffects={props.dbEffects}
                syndrome1={syndrome1}
                syndrome2={syndrome2}
                optional={optional}
                selectEffects={selectEffects}
                setSelectEffects={setSelectEffects}
                levelUpdate={levelUpdate}
                removeSelectEffects={removeSelectEffects}
              />
            }
          />
          <Route
            exact
            path={ScreenPath.ITEMS.path}
            render={
              () => <ItemSettingView
                dbWeapons={props.dbWeapons}
                dbArmors={props.dbArmors}
                dbItems={props.dbItems}
                selectWeapons={selectWeapons}
                addSelectWeapons={addSelectWeapons}
                selectArmors={selectArmors}
                addSelectArmors={addSelectArmors}
                selectItems={selectItems}
                addSelectItems={addSelectItems}
                removeSelectWeapons={removeSelectWeapons}
                removeSelectArmors={removeSelectArmors}
                removeSelectItems={removeSelectItems}
              />
            }
          />
          <Route
            exact
            path={ScreenPath.ROIS.path}
            render={
              () => <RoisSettingView
                dbPositiveEmotions={props.dbPositiveEmotions}
                dbNegativeEmotions={props.dbNegativeEmotions}
                selectRois={selectRois}
                setSelectRois={setSelectRois}
                selectFavor={selectFavor}
                selectMalice={selectMalice}
                handleToChangeRoisInput={handleToChangeRoisInput}
              />
            }
          />
          <Route
            exact
            path={ScreenPath.COMBO.path}
            render={
              () => <ComboSettingView
                selectEffects={selectEffects}
                combos={combos}
                removeCombo={removeCombo}
              />
            }
          />
        </Switch>
      </main>
    </div>
  );
}
