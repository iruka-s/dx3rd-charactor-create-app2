import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button, Grid, Dialog, Fab, Toolbar, Typography, Tooltip,
  Table, TableHead, TableBody, TablePagination,
  Checkbox, Paper, Input, ListItemText
} from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import clsx from "clsx";

import { Dx3rdTableRow, Dx3rdTableCell } from './Dx3rdStyledComponent';
import {
  emptyEffectName, effectRow, generalName, timingArray, targetArray,
  rangeArray, limitArray, skillArray, effectSyndromeNum, effectSyndromeArray,
  INTEGRATE_DETAIL_FUNC } from '../utils/CommonConst';

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
    minWidth: 750
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
    maxWidth: 300
  },
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
    <Toolbar
      className={clsx(classes.root)}
    >
      <Typography className={classes.title} variant="h6" id="tableTitle">
        【エフェクト選択】
      </Typography>

      <Tooltip title="Filter list">
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-checkbox-label">フィルター</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={props.selectSort}
            onChange={props.handleChangeFilter}
            input={<Input />}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {props.selectSyndromeArray.map(selectSyndrome => (
              <MenuItem key={selectSyndrome} value={selectSyndrome}>
                <Checkbox checked={props.selectSort.indexOf(selectSyndrome) > -1} />
                <ListItemText primary={selectSyndrome} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Tooltip>
    </Toolbar>
  );
};

const createSelectSyndromeArray = (syndrome1Name, syndrome2Name, optionalName) => {

  let list = [];

  if (syndrome1Name !== emptyEffectName) {

    list.push(syndrome1Name)

    if (syndrome2Name !== emptyEffectName) {
      list.push(syndrome2Name)

      if (optionalName !== emptyEffectName) {
        list.push(optionalName)
      }
    }
  }
  list.push(generalName);
  return list;
};

export default function AddEffectDialog(props) {

  let selectSyndromeArray = createSelectSyndromeArray(
    props.syndrome1Name, props.syndrome2Name, props.optionalName);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectSort, setSelectSort] = React.useState(selectSyndromeArray);

  const isSelected = name => selected.indexOf(name) !== -1;

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAdd = () => {
    let list = props.selectEffects;

    for (var index in props.mySyndromeEffectList) {
      if (selected.indexOf(props.mySyndromeEffectList[index].name) !== -1) {
        list.push({ level: "1", dbInfo: props.mySyndromeEffectList[index] });
      }
    }

    props.setSelectEffects(Object.assign([], list));
    setSelected([]);
    setOpen(false);
  };

  const handleClose = () => {
    setSelected([]);
    setOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeFilter = event => {
    setSelectSort(event.target.value);
  };

  const isContentFilter = sort => {
    if (sort === props.syndrome1Name) {
      return (selectSort.indexOf(props.syndrome1Name) > -1);
    }
    else if (sort === props.syndrome2Name) {
      return (selectSort.indexOf(props.syndrome2Name) > -1);
    }
    else if (sort === props.optionalName) {
      return (selectSort.indexOf(props.optionalName) > -1);
    }
    else if (sort === generalName) {
      return (selectSort.indexOf(generalName) > -1);
    }
    else {
      return false;
    }
  };

  // エフェクトの中身を作成する
  const makeEffectContent = (dbEffect) => {
    let sort1 = dbEffect.effect_sort1
    let sort2 = dbEffect.effect_sort2
    let sort3 = dbEffect.effect_sort3
    let content1 = dbEffect.effect_content1
    let content2 = dbEffect.effect_content2
    let content3 = dbEffect.effect_content3

    let results = []
    if (sort1 !== '0' && sort1 !== '') {
      results.push(INTEGRATE_DETAIL_FUNC[sort1]([content1]))
    }
    if (sort2 !== '0' && sort2 !== '') {
      results.push(INTEGRATE_DETAIL_FUNC[sort2]([content2]))
    }
    if (sort3 !== '0' && sort3 !== '') {
      results.push(INTEGRATE_DETAIL_FUNC[sort3]([content3]))
    }

    return results.join('/ ')
  }

  const effectFilter = (mySyndromeEffectList) => {
    let array = [];

    for (var index in mySyndromeEffectList) {
      if (isContentFilter(effectSyndromeArray[Number(mySyndromeEffectList[index].syndrome)])) {
        array.push(mySyndromeEffectList[index]);
      }
    }

    return array;
  };

  return (
    <React.Fragment>

      <Grid container xs={12}>
        <Grid style={{ fontSize: '12pt', marginTop: '12pt' }} container xs={11}>
          ※NM：名前　LV：レベル　TM：タイミング　SK：技能　TG：対象　RG：範囲　ES：侵食値　LM：回数制限　EF：効果
        </Grid>

        <Grid style={{ fontSize: '15pt' }} container xs={1}>
          <div className={classes.growAddButton}>
            <IconButton
              color="inherit"
              aria-label="add"
              onClick={handleClickOpen}
            >
              <Fab size="small" color="primary" >
                <AddIcon />
              </Fab>
            </IconButton>
          </div>
        </Grid>
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
              selectSort={selectSort}
              handleChangeFilter={handleChangeFilter}
              selectSyndromeArray={selectSyndromeArray}
            />

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
                {effectFilter(props.mySyndromeEffectList)
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((mySyndromeEffect, index) => {

                    const isItemSelected = isSelected(mySyndromeEffect.name);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <Dx3rdTableRow
                        hover
                        onClick={event => handleClick(event, mySyndromeEffect.name)}
                        role="checkbox"
                        tabIndex={-1}
                        key={mySyndromeEffect.name}
                      >
                        <Dx3rdTableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </Dx3rdTableCell>

                        {/* シンドローム */}
                        <Dx3rdTableCell align="center" component="th" id={labelId} scope="row" padding="none">
                          {effectSyndromeArray[effectSyndromeNum[mySyndromeEffect.syndrome]]}
                        </Dx3rdTableCell>

                        {/* エフェクト名 */}
                        <Dx3rdTableCell align="center" component="th" id={labelId} scope="row" padding="none">
                          {mySyndromeEffect.name}
                        </Dx3rdTableCell>

                        {/* 最大レベル */}
                        <Dx3rdTableCell align="center">
                          {mySyndromeEffect.max_level}
                        </Dx3rdTableCell>

                        {/* タイミング */}
                        <Dx3rdTableCell align="center">
                          {timingArray[Number(mySyndromeEffect.timing)]}
                        </Dx3rdTableCell>

                        {/* 判定技能 */}
                        <Dx3rdTableCell align="center">
                          {skillArray[Number(mySyndromeEffect.skill)]}
                        </Dx3rdTableCell>

                        {/* 対象 */}
                        <Dx3rdTableCell align="center">
                          {targetArray[Number(mySyndromeEffect.target)]}
                        </Dx3rdTableCell>

                        {/* 射程 */}
                        <Dx3rdTableCell align="center">
                          {rangeArray[Number(mySyndromeEffect.range)]}
                        </Dx3rdTableCell>

                        {/* 侵食値 */}
                        <Dx3rdTableCell align="center">
                          {mySyndromeEffect.erosion_point}
                        </Dx3rdTableCell>

                        {/* 制限 */}
                        <Dx3rdTableCell align="center">
                          {limitArray[Number(mySyndromeEffect.limit)]}
                        </Dx3rdTableCell>

                        {/* 効果 */}
                        <Dx3rdTableCell align="center">
                          {makeEffectContent(mySyndromeEffect)}
                        </Dx3rdTableCell>
                      </Dx3rdTableRow>

                    );
                  })}
              </TableBody>

            </Table>

            <TablePagination
              rowsPerPageOptions={[10, 20, 30]}
              component="div"
              count={props.mySyndromeEffectList.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>

        </DialogContent>

        <DialogActions>
          <Button onClick={handleAdd} variant="contained" color="primary">
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
