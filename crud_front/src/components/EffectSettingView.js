import React from 'react';
import { TextField, Table, TableBody, TableHead, Paper, Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';

import { Dx3rdTableRow, Dx3rdTableCell, Dx3rdErrorTableCell } from './Dx3rdStyledComponent';
import AddEffectDialog from './AddEffectDialog';
import { effectRow, generalID, timingArray, targetArray, rangeArray, limitArray, skillArray } from '../utils/CommonConst';
import { effectChecker } from '../utils/Dx3rdUtils';

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
      if(effectChecker(this.props.dbEffects[index], this.props.syndrome1, this.props.syndrome2, this.props.optional)){
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
                    {(effectChecker(effect.dbInfo, this.props.syndrome1, this.props.syndrome2, this.props.optional)) ?
                      <Dx3rdTableCell align="center">
                        {effect.dbInfo.name}
                      </Dx3rdTableCell>
                    :
                      <Dx3rdErrorTableCell align="center">
                        {effect.dbInfo.name}
                      </Dx3rdErrorTableCell>
                    }
                    
                    {/* レベル */}
                    {(effectChecker(effect.dbInfo, this.props.syndrome1, this.props.syndrome2, this.props.optional)) ?
                      <Dx3rdTableCell align="center">
                        <TextField
                          fullWidth
                          label=""
                          value={effect.level}
                          inputProps={{ maxLength: 2 }}
                          onChange={(e) => this.props.levelUpdate(index, e.target.value)}
                        />
                      </Dx3rdTableCell>
                    :
                      <Dx3rdErrorTableCell align="center">
                        <TextField
                          fullWidth
                          label=""
                          value={effect.level}
                          inputProps={{ maxLength: 2 }}
                          onChange={(e) => this.props.levelUpdate(index, e.target.value)}
                        />
                      </Dx3rdErrorTableCell>
                    }

                    {/* タイミング */}
                    {(effectChecker(effect.dbInfo, this.props.syndrome1, this.props.syndrome2, this.props.optional)) ?
                      <Dx3rdTableCell align="center">
                        {timingArray[Number(effect.dbInfo.timing)]}
                      </Dx3rdTableCell>
                    :
                      <Dx3rdErrorTableCell align="center">
                        {timingArray[Number(effect.dbInfo.timing)]}
                      </Dx3rdErrorTableCell>
                    }

                    {/* 技能 */}
                    {(effectChecker(effect.dbInfo, this.props.syndrome1, this.props.syndrome2, this.props.optional)) ?
                      <Dx3rdTableCell align="center">
                        {skillArray[Number(effect.dbInfo.skill)]}
                      </Dx3rdTableCell>
                    :
                      <Dx3rdErrorTableCell align="center">
                        {skillArray[Number(effect.dbInfo.skill)]}
                      </Dx3rdErrorTableCell>
                    }

                    {/* 対象 */}
                    {(effectChecker(effect.dbInfo, this.props.syndrome1, this.props.syndrome2, this.props.optional)) ?
                      <Dx3rdTableCell align="center">
                        {targetArray[Number(effect.dbInfo.target)]}
                      </Dx3rdTableCell>
                    :
                      <Dx3rdErrorTableCell align="center">
                        {targetArray[Number(effect.dbInfo.target)]}
                      </Dx3rdErrorTableCell>
                    }

                    {/* 射程 */}
                    {(effectChecker(effect.dbInfo, this.props.syndrome1, this.props.syndrome2, this.props.optional)) ?
                      <Dx3rdTableCell align="center">
                        {rangeArray[Number(effect.dbInfo.range)]}
                      </Dx3rdTableCell>
                    :
                      <Dx3rdErrorTableCell align="center">
                        {rangeArray[Number(effect.dbInfo.range)]}
                      </Dx3rdErrorTableCell>
                    }

                    {/* 侵食値 */}
                    {(effectChecker(effect.dbInfo, this.props.syndrome1, this.props.syndrome2, this.props.optional)) ?
                      <Dx3rdTableCell align="center">
                        {effect.dbInfo.erosion_point}
                      </Dx3rdTableCell>
                    :
                      <Dx3rdErrorTableCell align="center">
                        {effect.dbInfo.erosion_point}
                      </Dx3rdErrorTableCell>
                    }

                    {/* 制限 */}
                    {(effectChecker(effect.dbInfo, this.props.syndrome1, this.props.syndrome2, this.props.optional)) ?
                      <Dx3rdTableCell align="center">
                        {limitArray[Number(effect.dbInfo.limit)]}
                      </Dx3rdTableCell>
                    :
                      <Dx3rdErrorTableCell align="center">
                        {limitArray[Number(effect.dbInfo.limit)]}
                      </Dx3rdErrorTableCell>
                    }

                    {/* 効果 */}
                    {(effectChecker(effect.dbInfo, this.props.syndrome1, this.props.syndrome2, this.props.optional)) ?
                      // {/* ここに乗せる情報を考える */}
                      <Dx3rdTableCell align="center">
                        追加する記法を考える
                      </Dx3rdTableCell>
                    :
                      // {/* ここに乗せる情報を考える */}
                      <Dx3rdErrorTableCell align="center">
                        追加する記法を考える
                      </Dx3rdErrorTableCell>
                    }

                    {/* 削除ボタン */}
                    {(effectChecker(effect.dbInfo, this.props.syndrome1, this.props.syndrome2, this.props.optional)) ?
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
                    :
                      <Dx3rdErrorTableCell align="center">
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
                      </Dx3rdErrorTableCell>
                    }
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