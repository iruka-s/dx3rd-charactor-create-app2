import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const styles = theme => ({});

const topStyle = {
  background: "#222222"
};

class TopPageView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div>
        <div style={topStyle}>
          <Grid container spacing={5}>
            
            <Grid item xs={2}/>
            <Grid item xs={8}>
              <Typography variant="h3" gutterBottom>
                <font color="#b4b4b4">―――『ダブルクロス』、</font>
              </Typography>
            </Grid>
            <Grid item xs={2}/>

            <Grid item xs={2}/>
            <Grid item xs={8}>
              <Typography variant="h3" align="right">
              <font color="#b4b4b4">それは</font>
              <font color="#ff0000">『裏切り』</font>
              <font color="#b4b4b4">を意味する言葉</font>
              </Typography>
            </Grid>
            <Grid item xs={2}/>
          </Grid>
        </div>

        <Grid container spacing={5}>
          <Grid item xs={12}/>
          <Grid item xs={12}/>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={1}/>
            <Grid item xs={10}>
              <Typography variant="h4">
                <font color="#000000">TRPG『ダブルクロス』ルールブック1に対応したキャラクター作成ツールです</font>
              </Typography>
            </Grid>
          <Grid item xs={1}/>

          <Grid item xs={1}/>
            <Grid item xs={10}>
              <Typography variant="h4">
                <font color="#000000">サイドメニューのページから以下のようなことができます</font>
              </Typography>
            </Grid>
          <Grid item xs={1}/>

          <Grid item xs={1}/>
            <Grid item xs={10}>
              <ul type="circle">
                <li><font size="6">名前、出身、シンドローム、エフェクト等の基本的な設定</font></li>
                <li><font size="6">エフェクトや武器の取得に使用した経験点や常備化Pの自動集計</font></li>
                <li><font size="6">取得したエフェクトを組み合わせたコンボの作成</font></li>
                <li><font size="6">作成したキャラクターをJSON形式で保存</font></li>
              </ul>
            </Grid>
          <Grid item xs={1}/>

          <Grid item xs={1}/>
            <Grid item xs={10}>
              <Typography variant="h4">
                <font>画面右上の雲ボタンを押して保存したJSONファイルを読み込むことも可能です。</font>
              </Typography>
            </Grid>
          <Grid item xs={1}/>
        </Grid>

      </div>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(TopPageView));