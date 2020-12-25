import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button, Grid, Dialog, Fab, Toolbar, Typography, TableContainer,
  Table, TableHead, TableBody, TextField,
  Checkbox, Paper } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import clsx from "clsx";

import { Combo } from "./items/Combo"
import { Dx3rdTableRow, Dx3rdTableCell, Dx3rdDisabledTableRow } from './Dx3rdStyledComponent';
import { effectRow, effectSyndromeArray, timingArray, skillArray,
         targetArray, rangeArray, limitArray, titleMap, DB_INFO } from '../utils/CommonConst';

const maxWidth = 'xl';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  table: {
    maxHeight: 200,
    minWidth: 750
  },
  container: {
    maxHeight: 300,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  }
}));

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(2)
  },
  title: {
    flex: "1 1 100%"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();

  return (
    <Toolbar
      className={clsx(classes.root)}
    >
      <Typography className={classes.title} variant="h5" id="tableTitle">
        {titleMap.createComboTable}
      </Typography>

    </Toolbar>
  );
};

export default function CreateComboDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState([]);
  const [combo, setCombo] = React.useState(new Combo());
  const [comboName, setComboName] = React.useState('');

  const isSelected = id => selected.indexOf(id) !== -1;

  const handleClickTableRow = (event, effect) => {
    const selectedIndex = selected.indexOf(effect.dbInfo.id);
    let newSelected = [];
    let newCombo = Object.create(combo)

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, effect.dbInfo.id);
      newCombo.addEffect(effect)
    }
    else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
      newCombo.removeEffect(effect)
    }
    else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
      newCombo.removeEffect(effect)
    }
    else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
      newCombo.removeEffect(effect)
    }
    setCombo(newCombo)
    setSelected(newSelected);
  };

  const handleClickOpenIcon = () => {
    setOpen(true);
    setCombo(new Combo())
  };

  const handleClickAddBotton = () => {

    props.addCombo({
      name: comboName,
      skill: combo.skill,
      timing: combo.timing,
      erosionPoint: combo.erosionPoint,
      target: combo.target,
      range: combo.range,
      difficulty: combo.difficulty,
      sort: combo.sort,
      detail: combo.getIntegrationDetails(),
      effects: combo.getPlasticSurgeryEffects(),
    })

    // ダイアログでの選択を解除
    setSelected([]);

    // ダイアログを閉じる
    setOpen(false);
  };

  const handleClose = () => {
    setSelected([]);
    setOpen(false);
  };

  return (
    <React.Fragment>

      <Grid container xs={12}>
      <Grid style={{ fontSize: '15pt' }} container xs={1}>
          <div className={classes.growAddButton}>
            <IconButton
              color="inherit"
              aria-label="add"
              onClick={handleClickOpenIcon}
            >
              <Fab size="small" color="primary" >
                <AddIcon />
              </Fab>
            </IconButton>
          </div>
        </Grid>
        <Grid container xs={11}/>
      </Grid>

      <Dialog
        fullWidth
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >

        <DialogContent>
          <Paper className={classes.paper}>

            <EnhancedTableToolbar
              numSelected={selected.length}
            />

            <TableContainer className={classes.container}>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={'medium'}
              aria-label="enhanced table"
            >
              <TableHead>
                <Dx3rdTableRow>
                <Dx3rdTableCell width="4%" align="center"></Dx3rdTableCell>
                  <Dx3rdTableCell width="5%" align="center">{effectRow.syndrome.value}</Dx3rdTableCell>
                  <Dx3rdTableCell width="15%" align="center">{effectRow.name.value}</Dx3rdTableCell>
                  <Dx3rdTableCell width="6%" align="center">{effectRow.level.value}</Dx3rdTableCell>
                  <Dx3rdTableCell width="10%" align="center">{effectRow.timing.value}</Dx3rdTableCell>
                  <Dx3rdTableCell width="7%" align="center">{effectRow.judge.value}</Dx3rdTableCell>
                  <Dx3rdTableCell width="10%" align="center">{effectRow.target.value}</Dx3rdTableCell>
                  <Dx3rdTableCell width="7%" align="center">{effectRow.range.value}</Dx3rdTableCell>
                  <Dx3rdTableCell width="4%" align="center">{effectRow.erosion.value}</Dx3rdTableCell>
                  <Dx3rdTableCell width="9%" align="center">{effectRow.limit.value}</Dx3rdTableCell>
                  <Dx3rdTableCell width="23%" align="center">{effectRow.effect.value}</Dx3rdTableCell>
                </Dx3rdTableRow>
              </TableHead>

              <TableBody>
                {props.selectEffects
                  .map((effect, index) => {
                    const isEffectSelected = isSelected(effect.dbInfo.id);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    let isViewAble = ((isEffectSelected && combo.isDeletable(effect)) ||
                                     (!isEffectSelected && combo.isConbinable(effect)))

                    if(isViewAble){

                      /* 組み合わせ可能エフェクト表示 */
                      return (
                        <Dx3rdTableRow
                          hover
                          onClick={event => handleClickTableRow(event, effect)}
                          role="checkbox"
                          tabIndex={-1}
                          key={effect.dbInfo.id}
                        >
                          <Dx3rdTableCell padding="checkbox">
                            <Checkbox
                              checked={isEffectSelected}
                              inputProps={{ 'aria-labelledby': labelId }}
                            />
                          </Dx3rdTableCell>

                          {/* シンドローム */}
                          <Dx3rdTableCell align="center" component="th" id={labelId} scope="row" padding="none">
                            {effectSyndromeArray[Number(effect.dbInfo.syndrome)]}
                          </Dx3rdTableCell>

                          {/* エフェクト名 */}
                          <Dx3rdTableCell align="center" component="th" id={labelId} scope="row" padding="none">
                            {effect.dbInfo.name}
                          </Dx3rdTableCell>

                          {/* レベル */}
                          <Dx3rdTableCell align="center">
                            {effect.level}
                          </Dx3rdTableCell>

                          {/* タイミング */}
                          <Dx3rdTableCell align="center">
                            {timingArray[Number(effect.dbInfo.timing)]}
                          </Dx3rdTableCell>

                          {/* 判定技能 */}
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
                          <Dx3rdTableCell align="center">
                            ここの表示方法は考える必要がある。
                          </Dx3rdTableCell>
                        </Dx3rdTableRow>

                      );
                    }
                    else {

                      /* 組み合わせ不可エフェクト表示 */
                      return (
                        <Dx3rdDisabledTableRow
                          role="checkbox"
                          tabIndex={-1}
                          key={effect.dbInfo.id}
                        >
                          <Dx3rdTableCell padding="checkbox">
                            <Checkbox
                              disabled
                              checked={isEffectSelected}
                              inputProps={{ 'aria-labelledby': labelId }}
                            />
                          </Dx3rdTableCell>

                          {/* シンドローム */}
                          <Dx3rdTableCell align="center" component="th" id={labelId} scope="row" padding="none">
                            {effectSyndromeArray[Number(effect.dbInfo.syndrome)]}
                          </Dx3rdTableCell>

                          {/* エフェクト名 */}
                          <Dx3rdTableCell align="center" component="th" id={labelId} scope="row" padding="none">
                            {effect.dbInfo.name}
                          </Dx3rdTableCell>

                          {/* レベル */}
                          <Dx3rdTableCell align="center">
                            {effect.level}
                          </Dx3rdTableCell>

                          {/* タイミング */}
                          <Dx3rdTableCell align="center">
                            {timingArray[Number(effect.dbInfo.timing)]}
                          </Dx3rdTableCell>

                          {/* 判定技能 */}
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
                          <Dx3rdTableCell align="center">
                            ここの表示方法は考える必要がある。
                          </Dx3rdTableCell>
                        </Dx3rdDisabledTableRow>
                      );
                    }

                  })}
              </TableBody>
            </Table>
            </TableContainer>

            <Grid container spacing={5} xs={12}>
              <Grid item xs={1}/>

              <Grid item xs={3}>
                <TextField
                  fullWidth
                  id="comboName"
                  label="コンボ名"
                  value={comboName}
                  onChange={(e) => setComboName(e.target.value)}
                />
              </Grid>

              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  id="comboSkill"
                  label="技能"
                  value={DB_INFO.SKILL[combo.skill]}
                />
              </Grid>

              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  id="comboTiming"
                  label="タイミング"
                  value={DB_INFO.TIMING[combo.timing]}
                />
              </Grid>

              <Grid item xs={1}>
                <TextField
                  fullWidth
                  disabled
                  id="comboErosionPoint"
                  label="侵食値"
                  value={combo.erosionPoint}
                />
              </Grid>

              <Grid item xs={1}>
                <TextField
                  fullWidth
                  disabled
                  id="comboTarget"
                  label="対象"
                  value={DB_INFO.TARGET[combo.target]}
                />
              </Grid>

              <Grid item xs={1}>
                <TextField
                  fullWidth
                  disabled
                  id="comboRange"
                  label="範囲"
                  value={DB_INFO.RANGE[combo.range]}
                />
              </Grid>

              <Grid item xs={1}/>
            </Grid>

            <Grid container spacing={5}>
              <Grid item xs={1}/>

              <Grid item xs={1}>
                <TextField
                  fullWidth
                  disabled
                  id="comboDifficulty"
                  label="難易度"
                  value={DB_INFO.DIFFICULTY[combo.difficulty]}
                />
              </Grid>

              <Grid item xs={1}>
                <TextField
                  fullWidth
                  disabled
                  id="comboSort"
                  label="種別"
                  value={DB_INFO.SORT[combo.sort]}
                />
              </Grid>

              <Grid item xs={8}>
                <TextField
                  fullWidth
                  disabled
                  id="comboDetail"
                  label="詳細"
                  value={combo.getIntegrationDetails()}
                />
              </Grid>

              <Grid item xs={1}/>
            </Grid>

          </Paper>

        </DialogContent>

        <DialogActions>
          <Button onClick={handleClickAddBotton} variant="contained" color="primary">
            追加
          </Button>
          <Button onClick={handleClose} variant="contained" color="secondary">
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
