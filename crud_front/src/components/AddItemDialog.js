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
import { itemSortArray, itemsRow, itemSortNum, titleMap } from '../utils/CommonConst';

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
      <Typography className={classes.title} variant="h5" id="tableTitle">
        {titleMap.addItemTable}
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
            {itemSortArray.map(itemSort => (
              <MenuItem key={itemSort} value={itemSort}>
                <Checkbox checked={props.selectSort.indexOf(itemSort) > -1} />
                <ListItemText primary={itemSort} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Tooltip>
    </Toolbar>
  );
};

export default function AddItemDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectSort, setSelectSort] = React.useState(itemSortArray);

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
    let addItemList = [];

    for (var index in props.dbItems) {
      if (selected.indexOf(props.dbItems[index].id) !== -1) {
        addItemList.push({ memo: "", dbInfo: props.dbItems[index] });
      }
    }

    props.addSelectItems(addItemList);

    // ダイアログでの選択を解除
    setSelected([]);

    // ダイアログを閉じる
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
    
    if (num === itemSortNum.vehicle) {
      return (selectSort.indexOf(itemSortArray[Number(itemSortNum.vehicle)]) > -1);
    }
    else if (num === itemSortNum.connection) {
      return (selectSort.indexOf(itemSortArray[Number(itemSortNum.connection)]) > -1);
    }
    else if (num === itemSortNum.disposable) {
      return (selectSort.indexOf(itemSortArray[Number(itemSortNum.disposable)]) > -1);
    }
    else {
      return (selectSort.indexOf(itemSortArray[Number(itemSortNum.other)]) > -1);
    }
  };

  const itemFilter = (dbItems) => {
    let array = [];

    for (var index in dbItems) {
      if (isContentFilter(dbItems[index].sort)) {
        array.push(dbItems[index]);
      }
    }

    return array;
  };

  return (
    <React.Fragment>

      <Grid container xs={12}>
        <Grid style={{ fontSize: '12pt', marginTop: '12pt' }} container xs={11}>
          <Typography className={classes.title} variant="h5" id="tableTitle">
            {titleMap.itemTable}
          </Typography>
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
                  <Dx3rdTableCell width="25%" align="center">{itemsRow.name.value}</Dx3rdTableCell>
                  <Dx3rdTableCell width="20%" align="center">{itemsRow.sort.value}</Dx3rdTableCell>
                  <Dx3rdTableCell width="20%" align="center">{itemsRow.skill.value}</Dx3rdTableCell>
                  <Dx3rdTableCell width="21%" align="center">{itemsRow.cost.value}</Dx3rdTableCell>
                </Dx3rdTableRow>
              </TableHead>

              <TableBody>
                {itemFilter(props.dbItems)
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((dbItem, index) => {
                    const isItemSelected = isSelected(dbItem.id);
                    const labelId = `enhanced-table-checkbox-${index}`;


                      return (
                        <Dx3rdTableRow
                          hover
                          onClick={event => handleClick(event, dbItem.id)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={dbItem.name}
                          selected={isItemSelected}
                        >
                          <Dx3rdTableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              inputProps={{ 'aria-labelledby': labelId }}
                            />
                          </Dx3rdTableCell>

                          {/* アイテム名 */}
                          <Dx3rdTableCell align="center">
                            {dbItem.name}
                          </Dx3rdTableCell>

                          {/* 種別 */}
                          <Dx3rdTableCell align="center">
                            {itemSortArray[Number(dbItem.sort)]}
                          </Dx3rdTableCell>

                          {/* 技能 */}
                          <Dx3rdTableCell align="center">
                            {dbItem.skill}
                          </Dx3rdTableCell>

                          {/* コスト */}
                          <Dx3rdTableCell align="center">
                            {dbItem.purchase_point}/{dbItem.standby_point}
                          </Dx3rdTableCell>
                        </Dx3rdTableRow>

                      );
                  })}
              </TableBody>
            </Table>

            <TablePagination
              rowsPerPageOptions={[10, 20, 30]}
              component="div"
              count={props.dbItems.length}
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
