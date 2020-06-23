import React from 'react';
import { Table, TableBody, TableHead, Paper, Grid, Fab, Tooltip, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ListIcon from '@material-ui/icons/List';
import RemoveIcon from '@material-ui/icons/Remove';

import { Dx3rdTableRow, Dx3rdTableCell } from './Dx3rdStyledComponent';
import { attackCombo, reactionCombo } from '../utils/CommonConst';
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

        {/* 本来ここはコンボ作成ダイアログが入る */}
        <CreateComboDialog
          selectEffects={this.props.selectEffects}
        />

        {/* 武器表 */}
        <Paper className={classes.root}>
          <Table className={classes.table} aria-label="weapon table">

            <TableHead>
              <Dx3rdTableRow>
                <Dx3rdTableCell width="20%" align="center">{attackCombo.name.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="10%" align="center">{attackCombo.skill.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="7%" align="center">{attackCombo.judge.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="7%" align="center">{attackCombo.attack.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="10%" align="center">{attackCombo.target.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="7%" align="center">{attackCombo.range.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="27%" align="center">{attackCombo.other.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="1%" align="center">{attackCombo.effects.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="1%" align="center"></Dx3rdTableCell>
              </Dx3rdTableRow>
            </TableHead>

            <TableBody>

              {this.props.attackCombos.map((aCombo, index) => {

                return (
                  <Dx3rdTableRow>

                    {/* 名前 */}
                    <Dx3rdTableCell align="center">
                      {aCombo.name}
                    </Dx3rdTableCell>

                    {/* 技能 */}
                    <Dx3rdTableCell align="center">
                      {aCombo.skill}
                    </Dx3rdTableCell>

                    {/* 判定補正 */}
                    <Dx3rdTableCell align="center">
                      {aCombo.judge}
                    </Dx3rdTableCell>

                    {/* 攻撃力 */}
                    <Dx3rdTableCell align="center">
                      {aCombo.attack}
                    </Dx3rdTableCell>

                    {/* 対象 */}
                    <Dx3rdTableCell align="center">
                      {aCombo.target}
                    </Dx3rdTableCell>

                    {/* 射程 */}
                    <Dx3rdTableCell align="center">
                      {aCombo.range}
                    </Dx3rdTableCell>

                    {/* その他 */}
                    <Dx3rdTableCell align="center">
                      {aCombo.other}
                    </Dx3rdTableCell>

                    {/* エフェクト一覧 */}
                    <HtmlTooltip
                      className={classes.effectListButton}
                      align="center"
                      title = {
                        <React.Fragment>
                          <ul>
                            {aCombo.effects.map( effect => {
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
                          onClick={(e) => this.props.removeAttackCombo(index)}
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


        {/* 防具表 */}
        <Paper className={classes.root}>
          <Table className={classes.table} aria-label="weapon table">

            <TableHead>
              <Dx3rdTableRow>
                <Dx3rdTableCell width="20%" align="center">{reactionCombo.name.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="11%" align="center">{reactionCombo.skill.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="11%" align="center">{reactionCombo.judge.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="11%" align="center">{reactionCombo.guard.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="35%" align="center">{reactionCombo.other.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="1%" align="center">{reactionCombo.effects.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="1%" align="center"></Dx3rdTableCell>
              </Dx3rdTableRow>
            </TableHead>

            <TableBody>

              {this.props.reactionCombos.map((rCombo, index) => {

                return (
                  <Dx3rdTableRow>

                    {/* 名前 */}
                    <Dx3rdTableCell align="center">
                      {rCombo.name}
                    </Dx3rdTableCell>

                    {/* 技能 */}
                    <Dx3rdTableCell align="center">
                      {rCombo.skill}
                    </Dx3rdTableCell>

                    {/* 判定補正 */}
                    <Dx3rdTableCell align="center">
                      {rCombo.judge}
                    </Dx3rdTableCell>

                    {/* ガード値 */}
                    <Dx3rdTableCell align="center">
                      {rCombo.guard}
                    </Dx3rdTableCell>

                    {/* その他 */}
                    <Dx3rdTableCell align="center">
                      {rCombo.other}
                    </Dx3rdTableCell>

                    {/* エフェクト一覧 */}
                    <HtmlTooltip
                    className={classes.effectListButton}
                      align="center"
                      title = {
                        <React.Fragment>
                          <ul>
                            {rCombo.effects.map( effect => {
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
                          onClick={(e) => this.props.removeReactionCombos(index)}
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