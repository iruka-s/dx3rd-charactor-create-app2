import React from 'react';
import { TextField, Table, TableBody, TableHead, Grid, Paper, MenuItem, Fab } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import { Dx3rdTableRow, Dx3rdTableCell } from './Dx3rdStyledComponent';
import { skillRow, subSkillSortArray } from '../utils/CommonConst';

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

class SkillSettingView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const { classes } = this.props;

    return (
      <div>

        <Grid container xs={12}>
          <Grid style={{ fontSize: '12pt', marginTop: '12pt' }} container xs={11} />

          <Grid style={{ fontSize: '15pt' }} container xs={1}>
            <div className={classes.growAddButton}>
              <IconButton
                color="inherit"
                aria-label="add"
                onClick={this.props.handleToSubSkillRow}
              >
                <Fab size="small" color="primary" >
                  <AddIcon />
                </Fab>
              </IconButton>
            </div>
          </Grid>
        </Grid>

        <Paper className={classes.root}>
          <Table className={classes.table} aria-label="skill table">

            <TableHead>
              <Dx3rdTableRow>
                <Dx3rdTableCell width="10%" align="center">{skillRow.name.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="9%" align="center">{skillRow.initVal.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="9%" align="center">{skillRow.growVal.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="9%" align="center">{skillRow.otherVal.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="9%" align="center">{skillRow.judgeVal.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="39%" align="center">{skillRow.memo.value}</Dx3rdTableCell>
                <Dx3rdTableCell width="5%" align="center"></Dx3rdTableCell>
              </Dx3rdTableRow>
            </TableHead>

            <TableBody>
              {this.props.mainSkills.map(tableSkill => (
                <Dx3rdTableRow>

                  {/* 技能名 */}
                  <Dx3rdTableCell align="center">
                    {tableSkill.name}
                  </Dx3rdTableCell>

                  {/* 初期値 */}
                  <Dx3rdTableCell align="center">
                    {tableSkill.initVal}
                  </Dx3rdTableCell>

                  {/* 成長値 */}
                  <Dx3rdTableCell align="center">
                    <TextField
                      fullWidth
                      label=""
                      value={tableSkill.growVal}
                      inputProps={{ maxLength: 2 }}
                      onChange={(e) => this.props.handleToChangeMainSkillInput(tableSkill.id + skillRow.growVal.id, e.target.value)}
                    />
                  </Dx3rdTableCell>

                  {/* その他 */}
                  <Dx3rdTableCell align="center">
                    <TextField
                      fullWidth
                      label=""
                      value={tableSkill.otherVal}
                      inputProps={{ maxLength: 2 }}
                      onChange={(e) => this.props.handleToChangeMainSkillInput(tableSkill.id + skillRow.otherVal.id, e.target.value)}
                    />
                  </Dx3rdTableCell>

                  {/* 判定値 */}
                  <Dx3rdTableCell align="center">
                    {tableSkill.judgeVal}
                  </Dx3rdTableCell>

                  {/* メモ */}
                  <Dx3rdTableCell align="center">
                    <TextField
                      fullWidth
                      label=""
                      value={tableSkill.memo}
                      onChange={(e) => this.props.handleToChangeMainSkillInput(tableSkill.id + skillRow.memo.id, e.target.value)}
                    />
                  </Dx3rdTableCell>

                  <Dx3rdTableCell align="center" />
                </Dx3rdTableRow>
              ))}

              {this.props.subSkills.map((tableSubSkill, index) => (
                <Dx3rdTableRow>

                  {/* 技能名 */}
                  <Dx3rdTableCell align="center">
                    {tableSubSkill.name}
                  </Dx3rdTableCell>

                  {/* 初期値 */}
                  <Dx3rdTableCell align="center">
                    {tableSubSkill.initVal}
                  </Dx3rdTableCell>

                  {/* 成長値 */}
                  <Dx3rdTableCell align="center">
                    <TextField
                      fullWidth
                      label=""
                      value={tableSubSkill.growVal}
                      inputProps={{ maxLength: 2 }}
                      onChange={(e) => this.props.handleToChangeSubSkillInput(index, skillRow.growVal.id, e.target.value)}
                    />
                  </Dx3rdTableCell>

                  {/* その他 */}
                  <Dx3rdTableCell align="center">
                    <TextField
                      fullWidth
                      label=""
                      value={tableSubSkill.otherVal}
                      inputProps={{ maxLength: 2 }}
                      onChange={(e) => this.props.handleToChangeSubSkillInput(index, skillRow.otherVal.id, e.target.value)}
                    />
                  </Dx3rdTableCell>

                  {/* 判定値 */}
                  <Dx3rdTableCell align="center">
                    {tableSubSkill.judgeVal}
                  </Dx3rdTableCell>

                  {/* メモ */}
                  <Dx3rdTableCell align="center">
                    <TextField
                      fullWidth
                      label=""
                      value={tableSubSkill.memo}
                      onChange={(e) => this.props.handleToChangeSubSkillInput(index, skillRow.memo.id, e.target.value)}
                    />
                  </Dx3rdTableCell>

                  {/* 削除ボタン */}
                  <Dx3rdTableCell align="center">
                    <div className={classes.growDeleteButton}>

                      <IconButton
                        className
                        color="inherit"
                        aria-label="remove"
                        onClick={(e) => this.props.removeSubSkills(index)}
                      >
                        <Fab size="small" color="secondary" >
                          <RemoveIcon />
                        </Fab>
                      </IconButton>

                    </div>
                  </Dx3rdTableCell>
                </Dx3rdTableRow>
              ))}

              {this.props.userAddSubSkills.map((tableSubSkill, index) => (
                <Dx3rdTableRow>

                  {/* 技能名 */}
                  <Dx3rdTableCell align="center">
                    <TextField
                      id="works"
                      select
                      label=""
                      fullWidth
                      value={tableSubSkill.id}
                      onChange={(e) => this.props.selectUserAddSubSkill(e.target.value, index)}
                    >
                      {subSkillSortArray.map(subSkillSort => (
                        <MenuItem id={subSkillSort.ID} value={subSkillSort.ID}>
                          {subSkillSort.NAME}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Dx3rdTableCell>

                  {/* 初期値 */}
                  <Dx3rdTableCell align="center">
                    {tableSubSkill.initVal}
                  </Dx3rdTableCell>

                  {/* 成長値 */}
                  <Dx3rdTableCell align="center">
                    <TextField
                      fullWidth
                      label=""
                      value={tableSubSkill.growVal}
                      inputProps={{ maxLength: 2 }}
                      onChange={(e) => this.props.handleToChangeUserAddSubSkillInput(index, skillRow.growVal.id, e.target.value)}
                    />
                  </Dx3rdTableCell>

                  {/* その他 */}
                  <Dx3rdTableCell align="center">
                    <TextField
                      fullWidth
                      label=""
                      value={tableSubSkill.otherVal}
                      inputProps={{ maxLength: 2 }}
                      onChange={(e) => this.props.handleToChangeUserAddSubSkillInput(index, skillRow.otherVal.id, e.target.value)}
                    />
                  </Dx3rdTableCell>

                  {/* 判定値 */}
                  <Dx3rdTableCell align="center">
                    {tableSubSkill.judgeVal}
                  </Dx3rdTableCell>

                  {/* メモ */}
                  <Dx3rdTableCell align="center">
                    <TextField
                      fullWidth
                      label=""
                      value={tableSubSkill.memo}
                      onChange={(e) => this.props.handleToChangeUserAddSubSkillInput(index, skillRow.memo.id, e.target.value)}
                    />
                  </Dx3rdTableCell>

                  {/* 削除ボタン */}
                  <Dx3rdTableCell align="center">
                    <div className={classes.growDeleteButton}>

                      <IconButton
                        className
                        color="inherit"
                        aria-label="remove"
                        onClick={(e) => this.props.removeUserAddSubSkills(index)}
                      >
                        <Fab size="small" color="secondary" >
                          <RemoveIcon />
                        </Fab>
                      </IconButton>

                    </div>
                  </Dx3rdTableCell>
                </Dx3rdTableRow>
              ))}
            </TableBody>

          </Table>
        </Paper>

      </div>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(SkillSettingView));