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