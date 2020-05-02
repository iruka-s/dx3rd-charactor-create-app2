import React from 'react';
import { TextField, Table, TableBody, TableHead, Paper, MenuItem, Grid, Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import { Dx3rdTableRow, Dx3rdTableCell } from './Dx3rdStyledComponent';
import AddWeaponDialog from './AddWeaponDialog';
import AddArmorDialog from './AddArmorDialog';
import AddItemDialog from './AddItemDialog';
import { weaponsRow, armorsRow, itemsRow, weaponContentNum, armorContentNum, itemContentNum, itemSortArray, targetArray, rangeArray, limitArray } from '../utils/CommonConst';

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

class ItemSettingView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const { classes } = this.props;

    return (
      <div>

        <AddWeaponDialog
          dbWeapons={this.props.dbWeapons}
          selectWeapons={this.props.selectWeapons}
          setSelectWeapons={this.props.setSelectWeapons}
        />

        {/* 武器表 */}
        <Paper className={classes.root}>
          <Table className={classes.table} aria-label="weapon table">

            <TableHead>
              <Dx3rdTableRow>
                <Dx3rdTableCell width="20%" align="center">{weaponsRow.name.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="10%" align="center">{weaponsRow.skill.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="7%" align="center">{weaponsRow.hit.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="7%" align="center">{weaponsRow.attack.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="10%" align="center">{weaponsRow.range.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="7%" align="center">{weaponsRow.guard.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="14%" align="center">{weaponsRow.cost.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="20%" align="center">{weaponsRow.memo.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="5%" align="center"></Dx3rdTableCell>
              </Dx3rdTableRow>
            </TableHead>

            <TableBody>

              {this.props.selectWeapons.map((weapon, index) => {

                return (
                  <Dx3rdTableRow>

                    {/* 武器名 */}
                    <Dx3rdTableCell align="center">
                      {weapon.dbInfo[weaponContentNum.NAME]}
                    </Dx3rdTableCell>

                    {/* 技能 */}
                    <Dx3rdTableCell align="center">
                      {weapon.dbInfo[weaponContentNum.SKILL]}
                    </Dx3rdTableCell>

                    {/* 命中 */}
                    <Dx3rdTableCell align="center">
                      {weapon.dbInfo[weaponContentNum.HIT]}
                    </Dx3rdTableCell>

                    {/* 攻撃力 */}
                    <Dx3rdTableCell align="center">
                      {weapon.dbInfo[weaponContentNum.ATTACK]}
                    </Dx3rdTableCell>

                    {/* 射程 */}
                    <Dx3rdTableCell align="center">
                      {weapon.dbInfo[weaponContentNum.RANGE]}
                    </Dx3rdTableCell>

                    {/* ガード */}
                    <Dx3rdTableCell align="center">
                      {weapon.dbInfo[weaponContentNum.GUARD]}
                    </Dx3rdTableCell>

                    {/* コスト */}
                    <Dx3rdTableCell align="center">
                      {weapon.dbInfo[weaponContentNum.PURCHASE]}/{weapon.dbInfo[weaponContentNum.STANDING]}
                    </Dx3rdTableCell>

                    {/* メモ */}
                    <Dx3rdTableCell align="center">
                      {weapon.memo}
                    </Dx3rdTableCell>

                    {/* 削除ボタン */}
                    <Dx3rdTableCell align="center">
                      <div className={classes.growDeleteButton}>

                        <IconButton
                          className
                          color="inherit"
                          aria-label="remove"
                          onClick={(e) => this.props.removeSelectWeapons(index)}
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

        <AddArmorDialog
          dbArmors={this.props.dbArmors}
          selectArmors={this.props.selectArmors}
          setSelectArmors={this.props.setSelectArmors}
        />

        {/* 防具表 */}
        <Paper className={classes.root}>
          <Table className={classes.table} aria-label="weapon table">

            <TableHead>
              <Dx3rdTableRow>
                <Dx3rdTableCell width="20%" align="center">{armorsRow.name.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="11%" align="center">{armorsRow.armor.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="11%" align="center">{armorsRow.dodge.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="11%" align="center">{armorsRow.action.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="12%" align="center">{armorsRow.cost.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="20%" align="center">{armorsRow.memo.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="5%" align="center"></Dx3rdTableCell>
              </Dx3rdTableRow>
            </TableHead>

            <TableBody>

              {this.props.selectArmors.map((armor, index) => {

                return (
                  <Dx3rdTableRow>

                    {/* 防具名 */}
                    <Dx3rdTableCell align="center">
                      {armor.dbInfo[armorContentNum.NAME]}
                    </Dx3rdTableCell>

                    {/* 装甲 */}
                    <Dx3rdTableCell align="center">
                      {armor.dbInfo[armorContentNum.ARMOR]}
                    </Dx3rdTableCell>

                    {/* 回避 */}
                    <Dx3rdTableCell align="center">
                      {armor.dbInfo[armorContentNum.DODGE]}
                    </Dx3rdTableCell>

                    {/* 行動 */}
                    <Dx3rdTableCell align="center">
                      {armor.dbInfo[armorContentNum.ACTION]}
                    </Dx3rdTableCell>

                    {/* コスト */}
                    <Dx3rdTableCell align="center">
                      {armor.dbInfo[armorContentNum.PURCHASE]}/{armor.dbInfo[armorContentNum.STANDING]}
                    </Dx3rdTableCell>

                    {/* メモ */}
                    <Dx3rdTableCell align="center">
                      {armor.memo}
                    </Dx3rdTableCell>

                    {/* 削除ボタン */}
                    <Dx3rdTableCell align="center">
                      <div className={classes.growDeleteButton}>

                        <IconButton
                          className
                          color="inherit"
                          aria-label="remove"
                          onClick={(e) => this.props.removeSelectArmors(index)}
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

        <AddItemDialog
          dbItems={this.props.dbItems}
          selectItems={this.props.selectItems}
          setSelectItems={this.props.setSelectItems}
        />

        {/* アイテム表 */}
        <Paper className={classes.root}>
          <Table className={classes.table} aria-label="weapon table">

            <TableHead>
              <Dx3rdTableRow>
                <Dx3rdTableCell width="20%" align="center">{itemsRow.name.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="15%" align="center">{itemsRow.sort.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="15%" align="center">{itemsRow.skill.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="15%" align="center">{itemsRow.cost.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="20%" align="center">{itemsRow.memo.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="5%" align="center"></Dx3rdTableCell>
              </Dx3rdTableRow>
            </TableHead>

            <TableBody>

              {this.props.selectItems.map((item, index) => {

                return (
                  <Dx3rdTableRow>

                    {/* アイテム名 */}
                    <Dx3rdTableCell align="center">
                      {item.dbInfo[itemContentNum.NAME]}
                    </Dx3rdTableCell>

                    {/* 種別 */}
                    <Dx3rdTableCell align="center">
                      {itemSortArray[Number(item.dbInfo[itemContentNum.SORT])]}
                    </Dx3rdTableCell>

                    {/* 技能 */}
                    <Dx3rdTableCell align="center">
                      {item.dbInfo[itemContentNum.SKILL]}
                    </Dx3rdTableCell>

                    {/* コスト */}
                    <Dx3rdTableCell align="center">
                      {item.dbInfo[itemContentNum.PURCHASE]}/{item.dbInfo[itemContentNum.STANDING]}
                    </Dx3rdTableCell>

                    {/* メモ */}
                    <Dx3rdTableCell align="center">
                      {item.memo}
                    </Dx3rdTableCell>

                    {/* 削除ボタン */}
                    <Dx3rdTableCell align="center">
                      <div className={classes.growDeleteButton}>

                        <IconButton
                          className
                          color="inherit"
                          aria-label="remove"
                          onClick={(e) => this.props.removeSelectItems(index)}
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
      </div>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(ItemSettingView));