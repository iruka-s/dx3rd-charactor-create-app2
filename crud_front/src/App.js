import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

import Dx3rdDrawer from "./utils/Dx3rdDrawer";

// シンドローム、エフェクト名、最大レベル、タイミング、技能、
// 難易度、対象、射程、侵食値、制限、回数、その他、種別、
// 効果種別1、効果1、効果種別2、効果2、効果種別3、効果3
// const dbEffects = [
//   ["angelhighlow", "幻惑の光", "1", "1", "4", "2", "0", "3", "2", "0", "0", "0", "1", "15", "BD:放心", "0", "", "0", ""],
//   ["angelhighlow", "神の眼", "1", "2", "5", "2", "1", "1", "2", "0", "0", "0", "0", "19", "<知覚>", "0", "", "0", ""],
//   ["angelhighlow", "光芒の疾走", "3", "0", "0", "1", "1", "1", "1", "0", "1", "0", "0", "22", "離脱可、エンゲージと封鎖無視", "0", "", "0", ""],
//   ["angelhighlow", "主の恩恵", "3", "0", "0", "1", "1", "1", "2", "0", "0", "0", "0", "2", "+LV", "0", "", "0", ""],
//   ["angelhighlow", "主の右腕", "5", "1", "1", "2", "0", "0", "2", "0", "0", "0", "0", "3", "LV×2", "0", "", "0", ""],
//   ["angelhighlow", "水晶の眼", "3", "4", "5", "0", "0", "0", "2", "0", "0", "0", "0", "2", "+LV", "0", "", "0", ""],
//   ["angelhighlow", "スターダストレイン", "3", "1", "4", "2", "7", "3", "6", "0", "3", "0", "1", "23", "視界", "24", "シーン(選択)", "3", "LV×5-20"],
//   ["balor", "因果歪曲", "3", "1", "1", "0", "5", "0", "3", "0", "2", "0", "0", "24", "範囲(選択)", "26", "", "0", ""],
//   ["balor", "巨人の斧", "3", "1", "6", "2", "0", "2", "3", "0", "0", "0", "3", "3", "+LV×3", "2", "-2", "0", ""],
//   ["balor", "黒の鉄槌", "5", "1", "4", "2", "0", "3", "1", "0", "0", "0", "1", "3", "+LV×2+2", "26", "", "0", ""],
//   ["balor", "孤独の魔眼", "3", "3", "0", "1", "8", "3", "4", "0", "2", "0", "0", "24", "範囲,範囲(選択)→自分単体", "0", "", "0", ""],
//   ["balor", "漆黒の拳", "10", "1", "2", "2", "2", "2", "3", "0", "0", "0", "2", "3", "+LV", "39", "", "0", ""],
//   ["blackdog", "イオノクラフト", "5", "0", "0", "1", "1", "1", "1", "0", "0", "0", "0", "22", "", "8", "+LV+2", "5", "AD:飛行状態"],
//   ["blackdog", "アームズリンク", "3", "1", "6", "2", "0", "2", "2", "0", "0", "5", "3", "2", "+LV", "0", "", "0", ""],
//   ["blackdog", "雷の加護", "3", "0", "0", "1", "1", "1", "2", "0", "0", "0", "0", "2", "+LV", "0", "", "0", ""],
//   ["blackdog", "雷の槍", "5", "1", "4", "2", "0", "3", "2", "0", "0", "0", "1", "3", "+LV×2+4", "2", "-1", "23", ""]
// ];

// ID,名称,種別,技能,命中,攻撃力,ガード値,射程,購入,常備化
// const dbWeapons = [
//   ["1", "素手", "0", "<白兵>", "0", "-5", "0", "至近", "購入不可", "0"],
//   ["2", "クロスボウ", "1", "<射撃>", "-2", "2", "-", "40m", "7", "4"]
// ];

// ID,名称,種別,ドッジ,行動,装甲値,購入,常備化
// const dbArmors = [
//   ["1", "強化服", "0", "-", "-", "1", "5", "1"]
// ];

// ID,名称,種別,技能,購入,常備化
// const dbItems = [
//   ["1", "自転車", "0", "<運転:二輪>", "5", "1"]
// ];

// ID, 感情
// const dbPositiveEmotion = [
//   ["0", "未選択"], ["1", "傾倒"], ["2", "好奇心"], ["3", "憧憬"],
//   ["4", "尊敬"], ["5", "連帯感"], ["6", "慈愛"], ["7", "感服"],
//   ["8", "純愛"], ["9", "友情"], ["10", "慕情"], ["11", "同情"],
//   ["12", "遺志"], ["13", "庇護"], ["14", "幸福感"], ["15", "信頼"],
//   ["16", "執着"], ["17", "親近感"], ["18", "誠意"], ["19", "好意"],
//   ["20", "有為"], ["21", "尽力"], ["22", "懐旧"], ["23", "任意"]
// ];

// ID, 感情
// const dbNegativeEmotion = [
//   ["0", "未選択"], ["1", "侮蔑"], ["2", "食傷"], ["3", "脅威"],
//   ["4", "嫉妬"], ["5", "悔悟"], ["6", "恐怖"], ["7", "不安"],
//   ["8", "劣等感"], ["9", "疎外感"], ["10", "恥辱"], ["11", "憐憫"],
//   ["12", "偏愛"], ["13", "憎悪"], ["14", "隔意"], ["15", "嫌悪"],
//   ["16", "猜疑心"], ["17", "厭気"], ["18", "不信感"], ["19", "不快感"],
//   ["20", "憤懣"], ["21", "敵愾心"], ["22", "無関心"], ["23", "任意"]
// ];

// ID, 名称, 侵食値
// const dbImpulse = [
//   ["0", "未選択", "0"], ["1", "憤怒", "18"], ["2", "素体", "17"], ["3", "感染", "16"],
//   ["4", "渇望", "14"], ["5", "無知", "15"], ["6", "犠牲", "16"], ["7", "命令", "15"],
//   ["8", "忘却", "17"], ["9", "探求", "14"], ["10", "償い", "18"], ["11", "生誕", "17"],
// ];

// ID, 名称, 侵食値
// const dbAwakening = [
//   ["0", "未選択", "0"], ["1", "解放", "18"], ["2", "吸血", "17"], ["3", "飢餓", "14"],
//   ["4", "殺戮", "18"], ["5", "破壊", "16"], ["6", "加虐", "15"], ["7", "嫌悪", "15"],
//   ["8", "闘争", "16"], ["9", "妄想", "14"], ["10", "自傷", "16"], ["11", "恐怖", "17"],
//   ["12", "憎悪", "18"],
// ];

// ID, 名称, 能力値, 技能1, 値1, 技能2, 値2, 技能3, 値3, 技能4, 値4, 技能5, 値5
// const dbWorks = [
//   ["0", "未選択", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
//   ["1", "小学生", "sense", "PERCEPTION", "2", "INTENTION", "1", "RC", "1", "INFOMATION:噂話", "1", "-", "-"],
//   ["2", "中学生", "sense", "PERCEPTION", "1", "INTENTION", "1", "RC", "2", "INFOMATION:噂話", "1", "-", "-"],
//   ["3", "高校生", "body", "AVOID", "1", "PERCEPTION", "1", "RC", "2", "INFOMATION:噂話", "1", "-", "-"],
//   ["4", "不良学生", "body", "MELEE", "1", "DRIVING:任意", "2", "PERCEPTION", "1", "INTENTION", "1", "INFOMATION:裏社会", "1"],
//   ["5", "大学生", "spirit", "AVOID", "1", "DRIVING:任意", "2", "INTENTION", "1", "KNOWLEDGE:任意", "2", "INFOMATION:学問", "1"],
//   ["6", "フリーター", "body", "MELEE", "1", "DRIVING:任意", "2", "INTENTION", "1", "KNOWLEDGE:任意", "2", "INFOMATION:ウェブ", "1"],
//   ["7", "教師", "spirit", "DRIVING:任意", "2", "KNOWLEDGE:任意", "2", "NEGOTIATION", "1", "PROCUREMENT", "1", "INFOMATION:学問", "1"],
//   ["8", "主婦・主夫", "society", "ART:任意", "2", "INTENTION", "1", "NEGOTIATION", "2", "INFOMATION:噂話", "1", "-", "-"],
//   ["9", "UGNチルドレンA", "body", "MELEE", "2", "AVOID", "1", "RC", "1", "INFOMATION:UGN", "1", "-", "-"],
// ];

// ID, 名称, 肉体, 感覚, 精神, 社会
// const dbSyndrome = [
//   ["empty", "未選択", "0", "0", "0", "0" ],
//   ["angelhighlow", "エンジェルハイロゥ", "0", "3", "1", "0" ],
//   ["balor", "バロール", "0", "1", "2", "1" ],
//   ["blackdog", "ブラックドッグ", "2", "1", "1", "0" ],
//   ["bramstoker", "ブラム=ストーカー", "1", "2", "1", "0" ],
//   ["chimera", "キュマイラ", "3", "0", "0", "1" ],
//   ["exile", "エグザイル", "2", "1", "0", "1" ],
//   ["hanuman", "ハヌマーン", "1", "1", "1", "1" ],
//   ["morpheus", "モルフェウス", "1", "2", "0", "1" ],
// ];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dbSyndromes: [],
      dbEffects: [],
      dbWeapons: [],
      dbArmors: [],
      dbItems: [],
      dbPositiveEmotions: [],
      dbNegativeEmotions: [],
      dbImpulses: [],
      dbAwakenings: [],
      dbWorks: [],
    };

    axios.get('http://localhost:3001/syndromes')
    .then((results) => {
      this.setState({ dbSyndromes: results.data });
    })
    .catch((data) =>{
      console.log(data);
    });

    axios.get('http://localhost:3001/effects')
    .then((results) => {
      this.setState({ dbEffects: results.data });
    })
    .catch((data) =>{
      console.log(data);
    });

    axios.get('http://localhost:3001/weapons')
    .then((results) => {
      this.setState({ dbWeapons: results.data });
    })
    .catch((data) =>{
      console.log(data);
    });

    axios.get('http://localhost:3001/armors')
    .then((results) => {
      this.setState({ dbArmors: results.data });
    })
    .catch((data) =>{
      console.log(data);
    });

    axios.get('http://localhost:3001/items')
    .then((results) => {
      this.setState({ dbItems: results.data });
    })
    .catch((data) =>{
      console.log(data);
    });

    axios.get('http://localhost:3001/positive_emotions')
    .then((results) => {
      this.setState({ dbPositiveEmotions: results.data });
    })
    .catch((data) =>{
      console.log(data);
    });

    axios.get('http://localhost:3001/negative_emotions')
    .then((results) => {
      this.setState({ dbNegativeEmotions: results.data });
    })
    .catch((data) =>{
      console.log(data);
    });

    axios.get('http://localhost:3001/impulses')
    .then((results) => {
      this.setState({ dbImpulses: results.data });
      // console.log(results.data[0]);
    })
    .catch((data) =>{
      console.log(data);
    });

    axios.get('http://localhost:3001/awakenings')
    .then((results) => {
      this.setState({ dbAwakenings: results.data });
    })
    .catch((data) =>{
      console.log(data);
    });

    axios.get('http://localhost:3001/works')
    .then((results) => {
      this.setState({ dbWorks: results.data });
    })
    .catch((data) =>{
      console.log(data);
    });

  }

  render() {
    
    return (
      <Router>
      <Dx3rdDrawer
        dbEffects={this.state.dbEffects}
        dbWeapons={this.state.dbWeapons}
        dbArmors={this.state.dbArmors}
        dbItems={this.state.dbItems}
        dbPositiveEmotions={this.state.dbPositiveEmotions}
        dbNegativeEmotions={this.state.dbNegativeEmotions}
        dbImpulses={this.state.dbImpulses}
        dbAwakenings={this.state.dbAwakenings}
        dbWorks={this.state.dbWorks}
        dbSyndromes={this.state.dbSyndromes}
      />
    </Router>
    );
  }
}

export default App;
