import React from 'react';
import { lighten, makeStyles } from '@material-ui/core/styles';
import {
  Button, Grid, Dialog, Fab, Toolbar, Typography, Tooltip,
  Table, TableHead, TableBody, TableCell, TableRow, TablePagination,
  Checkbox, Paper, Input, ListItemText
} from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import FilterListIcon from "@material-ui/icons/FilterList";
import clsx from "clsx";

import { Dx3rdTableRow, Dx3rdTableCell } from './Dx3rdStyledComponent';
import { weaponSortArray, weaponsRow, weaponSortNum } from '../utils/CommonConst';

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
  const { numSelected } = props;

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
        【武器選択】
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
            {weaponSortArray.map(weaponSort => (
              <MenuItem key={weaponSort} value={weaponSort}>
                <Checkbox checked={props.selectSort.indexOf(weaponSort) > -1} />
                <ListItemText primary={weaponSort} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Tooltip>
    </Toolbar>
  );
};

export default function AddWeaponDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectSort, setSelectSort] = React.useState(weaponSortArray);

  const isSelected = id => selected.indexOf(id) !== -1;

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
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
    let list = props.selectWeapons;
    for (var index in props.dbWeapons) {
      if (selected.indexOf(props.dbWeapons[index].id) !== -1) {
        list.push({ memo: "", dbInfo: props.dbWeapons[index] });
      }
    }
    props.setSelectWeapons(Object.assign([], list));
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

  const isContentFilter = num => {
    if (num === weaponSortNum.melee) {
      return (selectSort.indexOf(weaponSortArray[Number(weaponSortNum.melee)]) > -1);
    }
    else {
      return (selectSort.indexOf(weaponSortArray[Number(weaponSortNum.shoot)]) > -1);
    }
  };

  const weaponFilter = (dbWeapons) => {
    let array = [];

    for (var index in dbWeapons) {
      if (isContentFilter(dbWeapons[index].sort)) {
        array.push(dbWeapons[index]);
      }
    }

    return array;
  };

  return (
    <React.Fragment>

      <Grid container xs={12}>
        <Grid style={{ fontSize: '12pt', marginTop: '12pt' }} container xs={11}>
          【武器】
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
            />

            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? 'small' : 'medium'}
              aria-label="enhanced table"
            >
              <TableHead>
                <Dx3rdTableRow>
                  <Dx3rdTableCell width="4%" align="center"></Dx3rdTableCell>
                  <Dx3rdTableCell width="23%" align="center">{weaponsRow.name.value}</Dx3rdTableCell>
                  <Dx3rdTableCell width="13%" align="center">{weaponsRow.skill.value}</Dx3rdTableCell>
                  <Dx3rdTableCell width="10%" align="center">{weaponsRow.hit.value}</Dx3rdTableCell>
                  <Dx3rdTableCell width="10%" align="center">{weaponsRow.attack.value}</Dx3rdTableCell>
                  <Dx3rdTableCell width="13%" align="center">{weaponsRow.range.value}</Dx3rdTableCell>
                  <Dx3rdTableCell width="10%" align="center">{weaponsRow.guard.value}</Dx3rdTableCell>
                  <Dx3rdTableCell width="17%" align="center">{weaponsRow.cost.value}</Dx3rdTableCell>
                </Dx3rdTableRow>
              </TableHead>

              <TableBody>
                {weaponFilter(props.dbWeapons)
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((dbWeapon, index) => {
                    const isItemSelected = isSelected(dbWeapon.id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <Dx3rdTableRow
                        hover
                        onClick={event => handleClick(event, dbWeapon.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={dbWeapon.name}
                        selected={isItemSelected}
                      >
                        <Dx3rdTableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </Dx3rdTableCell>

                        {/* 武器名 */}
                        <Dx3rdTableCell align="center" component="th" id={labelId} scope="row" padding="none">
                          {dbWeapon.name}
                        </Dx3rdTableCell>

                        {/* 技能 */}
                        <Dx3rdTableCell align="center">
                          {dbWeapon.skill}
                        </Dx3rdTableCell>

                        {/* 命中 */}
                        <Dx3rdTableCell align="center">
                          {dbWeapon.hit}
                        </Dx3rdTableCell>

                        {/* 攻撃力 */}
                        <Dx3rdTableCell align="center">
                          {dbWeapon.offensive_power}
                        </Dx3rdTableCell>

                        {/* 射程 */}
                        <Dx3rdTableCell align="center">
                          {dbWeapon.range}
                        </Dx3rdTableCell>

                        {/* ガード */}
                        <Dx3rdTableCell align="center">
                          {dbWeapon.guard_point}
                        </Dx3rdTableCell>

                        {/* コスト */}
                        <Dx3rdTableCell align="center">
                          {dbWeapon.purchase_point}/{dbWeapon.standby_point}
                        </Dx3rdTableCell>
                      </Dx3rdTableRow>

                    );
                  })}
              </TableBody>
            </Table>

            <TablePagination
              rowsPerPageOptions={[10, 20, 30]}
              component="div"
              count={props.dbWeapons.length}
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
