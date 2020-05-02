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
import { armorSortArray, armorsRow, armorSortNum, armorContentNum } from '../utils/CommonConst';

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
        【防具選択】
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
            {armorSortArray.map(armorSort => (
              <MenuItem key={armorSort} value={armorSort}>
                <Checkbox checked={props.selectSort.indexOf(armorSort) > -1} />
                <ListItemText primary={armorSort} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Tooltip>
    </Toolbar>
  );
};

export default function AddArmorDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectSort, setSelectSort] = React.useState(armorSortArray);

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
    let list = props.selectArmors;
    for (var index in props.dbArmors) {
      if (selected.indexOf(props.dbArmors[index][armorContentNum.ID]) !== -1) {
        list.push({ memo: "", dbInfo: props.dbArmors[index] });
      }
    }
    props.setSelectArmors(Object.assign([], list));
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
    if (num === armorSortNum.armor) {
      return (selectSort.indexOf(armorSortArray[Number(armorSortNum.armor)]) > -1);
    }
  };

  const ArmorFilter = (dbArmors) => {
    let array = [];

    for (var index in dbArmors) {
      if (isContentFilter(dbArmors[index][armorContentNum.SORT])) {
        array.push(dbArmors[index]);
      }
    }

    return array;
  };

  return (
    <React.Fragment>

      <Grid container xs={12}>
        <Grid style={{ fontSize: '12pt', marginTop: '12pt' }} container xs={11}>
          【防具】
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
                  <Dx3rdTableCell width="24%" align="center">{armorsRow.name.value}</Dx3rdTableCell>
                  <Dx3rdTableCell width="15%" align="center">{armorsRow.armor.value}</Dx3rdTableCell>
                  <Dx3rdTableCell width="15%" align="center">{armorsRow.dodge.value}</Dx3rdTableCell>
                  <Dx3rdTableCell width="15%" align="center">{armorsRow.action.value}</Dx3rdTableCell>
                  <Dx3rdTableCell width="17%" align="center">{armorsRow.cost.value}</Dx3rdTableCell>
                </Dx3rdTableRow>
              </TableHead>

              <TableBody>
                {ArmorFilter(props.dbArmors)
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((dbArmor, index) => {
                    const isItemSelected = isSelected(dbArmor[armorContentNum.ID]);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <Dx3rdTableRow
                        hover
                        onClick={event => handleClick(event, dbArmor[armorContentNum.ID])}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={dbArmor[armorContentNum.NAME]}
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
                          {dbArmor[armorContentNum.NAME]}
                        </Dx3rdTableCell>

                        {/* 装甲 */}
                        <Dx3rdTableCell align="center">
                          {dbArmor[armorContentNum.ARMOR]}
                        </Dx3rdTableCell>

                        {/* 回避 */}
                        <Dx3rdTableCell align="center">
                          {dbArmor[armorContentNum.DODGE]}
                        </Dx3rdTableCell>

                        {/* 行動 */}
                        <Dx3rdTableCell align="center">
                          {dbArmor[armorContentNum.ACTION]}
                        </Dx3rdTableCell>

                        {/* コスト */}
                        <Dx3rdTableCell align="center">
                          {dbArmor[armorContentNum.PURCHASE]}/{dbArmor[armorContentNum.STANDING]}
                        </Dx3rdTableCell>
                      </Dx3rdTableRow>
                    );
                  })}
              </TableBody>
            </Table>

            <TablePagination
              rowsPerPageOptions={[10, 20, 30]}
              component="div"
              count={props.dbArmors.length}
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
