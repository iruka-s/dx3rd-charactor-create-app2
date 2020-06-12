import { generalID, emptyID, effectSyndromeNum, effectLimit } from './CommonConst';

export function numCheck(str) {
    // if (str.match(/[^d]/) !== null) {
    //     // スナックバーにエラー出すならここ
    // }

    let value = str.replace(/[^\d]/g, "");

    while(value.match(/^0/)){
      value = value.replace(/0/, "");
    }

    if(value === ""){
      value = 0;
    }

    return value;
};

// エフェクトが取得可能であるかを判断する
export function effectChecker(effect, syndrome1, syndrome2, optional) {

  if(effect.syndrome === effectSyndromeNum.general) {
    return true;
  }

  if((effect.syndrome !== effectSyndromeNum[syndrome1.english_name])
  && (effect.syndrome !== effectSyndromeNum[syndrome2.english_name])
  && (effect.syndrome !== effectSyndromeNum[optional.english_name])) 
  {
    return false;
  }

  if((syndrome2 !== emptyID) && (effect.limit === effectLimit.pureSyndrome)){
    return false;
  }

  if((optional !== emptyID) && (effect.limit === effectLimit.oneHundredPercent)){
    return false;
  }

  if(effect.syndrome !== effectSyndromeNum[optional.english_name]){
    if(effect.limit === effectLimit.eightyPercent){
      return false;
    }
  }
  console.log("niconiconico")

  return true;
}
