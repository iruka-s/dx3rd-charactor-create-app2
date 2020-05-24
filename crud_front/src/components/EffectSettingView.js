import React from 'react';
import { TextField, Table, TableBody, TableHead, Paper, Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';

import { Dx3rdTableRow, Dx3rdTableCell } from './Dx3rdStyledComponent';
import AddEffectDialog from './AddEffectDialog';
import { effectRow, generalID, timingArray, targetArray, rangeArray, limitArray, skillArray } from '../utils/CommonConst';

// inputValueの初期値はワークスに応じて変わる必要がある
const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

class EffectSettingView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.getMySyndromeEffectList = this.getMySyndromeEffectList.bind(this);
  }

  // DBから自分のシンドロームのエフェクトを取得
  getMySyndromeEffectList() {

    let list = [];

    for (var index in this.props.dbEffects) {

      // 能力値設定画面で選択したシンドロームと一致しているエフェクトを追加
      if ((this.props.dbEffects[index].syndrome === this.props.syndrome1.english_name)
        || (this.props.dbEffects[index].syndrome === this.props.syndrome2.english_name)
        || (this.props.dbEffects[index].syndrome === this.props.optional.english_name)
        || (this.props.dbEffects[index].syndrome === generalID)) {
        list.push(this.props.dbEffects[index]);
      }
    }
    return list;
  }

  render() {

    const { classes } = this.props;

    let mySyndromeEffectList = this.getMySyndromeEffectList();

    return (
      <div>

        <AddEffectDialog
          mySyndromeEffectList={mySyndromeEffectList}
          selectEffects={this.props.selectEffects}
          setSelectEffects={this.props.setSelectEffects}
          syndrome1Name={this.props.syndrome1.name}
          syndrome2Name={this.props.syndrome2.name}
          optionalName={this.props.optional.name}
        />

        <Paper className={classes.root}>
          <Table className={classes.table} aria-label="skill table">

            <TableHead>
              <Dx3rdTableRow>
                <Dx3rdTableCell width="15%" align="center">{effectRow.name.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="6%" align="center">{effectRow.level.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="12%" align="center">{effectRow.timing.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="7%" align="center">{effectRow.judge.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="9%" align="center">{effectRow.target.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="9%" align="center">{effectRow.range.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="4%" align="center">{effectRow.erosion.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="5%" align="center">{effectRow.limit.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="28%" align="center">{effectRow.effect.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="5%" align="center"></Dx3rdTableCell>
              </Dx3rdTableRow>
            </TableHead>

            <TableBody>

              {this.props.selectEffects.map((effect, index) => {

                return (
                  <Dx3rdTableRow>

                    {/* エフェクト名 */}
                    <Dx3rdTableCell align="center">
                      {effect.dbInfo.name}
                    </Dx3rdTableCell>

                    {/* レベル */}
                    {(effect.dbInfo.syndrome === "none") ?

                      <Dx3rdTableCell align="center">
                        <TextField
                          fullWidth
                          label=""
                          value={""}
                          disabled
                          inputProps={{ min: 1, maxLength: 2 }}
                        />
                      </Dx3rdTableCell>
                      :
                      <Dx3rdTableCell align="center">
                        <TextField
                          fullWidth
                          label=""
                          value={effect.level}
                          inputProps={{ maxLength: 2 }}
                          onChange={(e) => this.props.levelUpdate(index, e.target.value)}
                        />
                      </Dx3rdTableCell>
                    }

                    {(effect.dbInfo.syndrome === "none") ?
                      // タイミング
                      <Dx3rdTableCell align="center">
                        -
                      </Dx3rdTableCell>
                      :
                      // タイミング
                      <Dx3rdTableCell align="center">
                        {timingArray[Number(effect.dbInfo.timing)]}
                      </Dx3rdTableCell>
                    }

                    {/* 技能 */}
                    <Dx3rdTableCell align="center">
                      {skillArray[Number(effect.dbInfo.skill)]}
                    </Dx3rdTableCell>

                    {/* 対象 */}
                    <Dx3rdTableCell align="center">
                      {targetArray[Number(effect.dbInfo.target)]}
                    </Dx3rdTableCell>

                    {/* 射程 */}
                    <Dx3rdTableCell align="center">
                      {rangeArray[Number(effect.dbInfo.range)]}
                    </Dx3rdTableCell>

                    {/* 侵食値 */}
                    <Dx3rdTableCell align="center">
                      {effect.dbInfo.erosion_point}
                    </Dx3rdTableCell>

                    {/* 制限 */}
                    <Dx3rdTableCell align="center">
                      {limitArray[Number(effect.dbInfo.limit)]}
                    </Dx3rdTableCell>

                    {/* 効果 */}
                    {/* ここに乗せる情報を考える */}
                    <Dx3rdTableCell align="center">
                      追加する記法を考える
                    </Dx3rdTableCell>

                    {/* 削除ボタン */}
                    <Dx3rdTableCell align="center">
                      <div className={classes.growDeleteButton}>
                        {(index === 0) ?
                          <div />
                          :
                          <IconButton
                            className
                            color="inherit"
                            aria-label="remove"
                            onClick={(e) => this.props.removeSelectEffects(index)}
                          >
                            <Fab size="small" color="secondary" >
                              <RemoveIcon />
                            </Fab>

                          </IconButton>
                        }

                      </div>
                    </Dx3rdTableCell>
                  </Dx3rdTableRow>
                );
              })}

            </TableBody>

          </Table>
        </Paper>
      </div>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(EffectSettingView));