import React from 'react';
import { Table, TableBody, TableHead, Paper, Grid, Fab, Tooltip, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ListIcon from '@material-ui/icons/List';
import RemoveIcon from '@material-ui/icons/Remove';

import { Dx3rdTableRow, Dx3rdTableCell } from './Dx3rdStyledComponent';
import { ComboRow, DB_INFO } from '../utils/CommonConst';
import CreateComboDialog from './CreateComboDialog';

// inputValueの初期値はワークスに応じて変わる必要がある
const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  effectListButton: {
    marginTop: 15,
  },
  comboDeleteButton: {
    marginRight: 30,
  },
});

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);


class ComboSettingView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const { classes } = this.props;

    return (
      <div>

        {/* コンボ作成ダイアログ */}
        <CreateComboDialog
          selectEffects={this.props.selectEffects}
          combos={this.props.combos}
          addCombo={this.props.addCombo}
        />

        {/* 攻撃コンボ */}
        <Paper className={classes.root}>
          <Table className={classes.table} aria-label="conbo table">

            <TableHead>
              <Dx3rdTableRow>
                <Dx3rdTableCell width="20%" align="center">{ComboRow.name.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="8%" align="center">{ComboRow.skill.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="18%" align="center">{ComboRow.timing.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="4%" align="center">{ComboRow.erosionPoint.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="10%" align="center">{ComboRow.target.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="5%" align="center">{ComboRow.range.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="6%" align="center">{ComboRow.difficulty.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="7%" align="center">{ComboRow.sort.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="37%" align="center">{ComboRow.detail.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="1%" align="center">{ComboRow.effects.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="1%" align="center"></Dx3rdTableCell>
              </Dx3rdTableRow>
            </TableHead>

            <TableBody>

              {this.props.combos.map((combo, index) => {

                return (
                  <Dx3rdTableRow>

                    {/* 名前 */}
                    <Dx3rdTableCell align="center">
                      {combo.name}
                    </Dx3rdTableCell>

                    {/* 技能 */}
                    <Dx3rdTableCell align="center">
                      {DB_INFO.SKILL[combo.skill]}
                    </Dx3rdTableCell>

                    {/* タイミング */}
                    <Dx3rdTableCell align="center">
                      {DB_INFO.TIMING[combo.timing]}
                    </Dx3rdTableCell>

                    {/* 侵食値 */}
                    <Dx3rdTableCell align="center">
                      {combo.erosionPoint}
                    </Dx3rdTableCell>

                    {/* 対象 */}
                    <Dx3rdTableCell align="center">
                      {DB_INFO.TARGET[combo.target]}
                    </Dx3rdTableCell>

                    {/* 射程 */}
                    <Dx3rdTableCell align="center">
                      {DB_INFO.RANGE[combo.range]}
                    </Dx3rdTableCell>

                    {/* 難易度 */}
                    <Dx3rdTableCell align="center">
                      {DB_INFO.DIFFICULTY[combo.difficulty]}
                    </Dx3rdTableCell>

                    {/* 種別 */}
                    <Dx3rdTableCell align="center">
                      {DB_INFO.SORT[combo.sort]}
                    </Dx3rdTableCell>

                    {/* 詳細 */}
                    <Dx3rdTableCell align="center">
                      {combo.detail}
                    </Dx3rdTableCell>

                    {/* エフェクト一覧 */}
                    <HtmlTooltip
                      className={classes.effectListButton}
                      align="center"
                      title = {
                        <React.Fragment>
                          <ul>
                            {combo.effects.map( effect => {
                              return <li>{effect}</li>
                            })}
                          </ul>
                        </React.Fragment>
                      }
                    >
                      <IconButton
                        color="default" 
                        aria-label={index}
                        component="span"
                        size="medium"
                      >
                        <ListIcon 
                          fontSize="large" 
                        />
                      </IconButton>
                    </HtmlTooltip>

                    {/* 削除ボタン */}
                    <Dx3rdTableCell align="center">
                      <div className={classes.comboDeleteButton}>

                        <IconButton
                          className
                          color="inherit"
                          aria-label="remove"
                          onClick={(e) => this.props.removeCombo(index)}
                        >
                          <Fab size="small" color="secondary" >
                            <RemoveIcon />
                          </Fab>
                        </IconButton>

                      </div>
                    </Dx3rdTableCell>
                  </Dx3rdTableRow>
                );
              })}

            </TableBody>

          </Table>
        </Paper>
        
        <Grid container spacing={5}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
        </Grid>

      </div>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(ComboSettingView));