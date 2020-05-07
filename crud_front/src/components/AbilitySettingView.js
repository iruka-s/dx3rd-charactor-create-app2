import React from 'react';
import { TextField, Table, TableBody, TableHead, Paper, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import { Dx3rdTableRow, Dx3rdTableCell, Dx3rdResultTableCell } from './Dx3rdStyledComponent';
import { abilityRow, syndromeList, abilityTableRowNum } from "../utils/CommonConst";

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

class AbilitySettingView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="skill table">

          <TableHead>
            <Dx3rdTableRow>
              <Dx3rdTableCell width="16%" align="center"></Dx3rdTableCell>
              <Dx3rdTableCell width="20%" align="center"></Dx3rdTableCell>
              <Dx3rdTableCell width="8%" align="center">{abilityRow.body.value}</Dx3rdTableCell>
              <Dx3rdTableCell width="8%" align="center">{abilityRow.sense.value}</Dx3rdTableCell>
              <Dx3rdTableCell width="8%" align="center">{abilityRow.spirit.value}</Dx3rdTableCell>
              <Dx3rdTableCell width="8%" align="center">{abilityRow.society.value}</Dx3rdTableCell>
              <Dx3rdTableCell width="8%" align="center">{abilityRow.hp.value}</Dx3rdTableCell>
              <Dx3rdTableCell width="8%" align="center">{abilityRow.erosion.value}</Dx3rdTableCell>
              <Dx3rdTableCell width="8%" align="center">{abilityRow.action.value}</Dx3rdTableCell>
              <Dx3rdTableCell width="8%" align="center">{abilityRow.move.value}</Dx3rdTableCell>
            </Dx3rdTableRow>
          </TableHead>

          <TableBody>
            {/* シンドローム1 */}
            <Dx3rdTableRow>
              <Dx3rdTableCell align="center">
                {this.props.abilityValues[abilityTableRowNum.SYNDROME1].name}
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  id="standard-select-currency"
                  select
                  label=""
                  fullWidth
                  value={this.props.syndrome1}
                  onChange={(e) => this.props.handleSyndromeChange(1, e.target.value)}
                >
                  {this.props.dbSyndromes.map(syndrome => (
                    <MenuItem key={syndrome.name} value={syndrome}>
                      {syndrome.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  disabled
                  value={this.props.abilityValues[abilityTableRowNum.SYNDROME1].body}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  disabled
                  value={this.props.abilityValues[abilityTableRowNum.SYNDROME1].sense}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  disabled
                  value={this.props.abilityValues[abilityTableRowNum.SYNDROME1].spirit}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  disabled
                  value={this.props.abilityValues[abilityTableRowNum.SYNDROME1].society}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center" />
              <Dx3rdTableCell align="center" />
              <Dx3rdTableCell align="center" />
              <Dx3rdTableCell align="center" />

            </Dx3rdTableRow>

            {/* シンドローム2 */}
            <Dx3rdTableRow>
              <Dx3rdTableCell align="center">
                {this.props.abilityValues[abilityTableRowNum.SYNDROME2].name}
              </Dx3rdTableCell>

              {(this.props.syndrome1.english_name === "empty") ?
                <Dx3rdTableCell align="center">
                  <TextField
                    id="standard-select-currency"
                    select
                    label=""
                    fullWidth
                    disabled
                    value={this.props.syndrome2}
                    onChange={(e) => this.props.handleSyndromeChange(2, e.target.value)}
                  >
                    {this.props.dbSyndromes.map(syndrome => (
                      <MenuItem key={syndrome.name} value={syndrome}>
                        {syndrome.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Dx3rdTableCell>
                :
                <Dx3rdTableCell align="center">
                  <TextField
                    id="standard-select-currency"
                    select
                    label=""
                    fullWidth
                    value={this.props.syndrome2}
                    onChange={(e) => this.props.handleSyndromeChange(2, e.target.value)}
                  >
                    {this.props.dbSyndromes.map(syndrome => (
                      <MenuItem key={syndrome.name} value={syndrome}>
                        {syndrome.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Dx3rdTableCell>
              }

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  disabled
                  value={this.props.abilityValues[abilityTableRowNum.SYNDROME2].body}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  disabled
                  value={this.props.abilityValues[abilityTableRowNum.SYNDROME2].sense}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  disabled
                  value={this.props.abilityValues[abilityTableRowNum.SYNDROME2].spirit}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  disabled
                  value={this.props.abilityValues[abilityTableRowNum.SYNDROME2].society}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center" />
              <Dx3rdTableCell align="center" />
              <Dx3rdTableCell align="center" />
              <Dx3rdTableCell align="center" />

            </Dx3rdTableRow>


            {/* オプショナル */}
            <Dx3rdTableRow>
              <Dx3rdTableCell align="center">
                {this.props.abilityValues[abilityTableRowNum.OPTIONAL].name}
              </Dx3rdTableCell>

              {(this.props.syndrome2.english_name === "empty") ?
                <Dx3rdTableCell align="center">
                  <TextField
                    id="standard-select-currency"
                    select
                    label=""
                    fullWidth
                    disabled
                    value={this.props.optional}
                    onChange={(e) => this.props.handleSyndromeChange(3, e.target.value)}
                  >
                    {this.props.dbSyndromes.map(syndrome => (
                      <MenuItem key={syndrome.name} value={syndrome}>
                        {syndrome.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Dx3rdTableCell>
                :
                <Dx3rdTableCell align="center">
                  <TextField
                    id="standard-select-currency"
                    select
                    label=""
                    fullWidth
                    value={this.props.optional}
                    onChange={(e) => this.props.handleSyndromeChange(3, e.target.value)}
                  >
                    {this.props.dbSyndromes.map(syndrome => (
                      <MenuItem key={syndrome.name} value={syndrome}>
                        {syndrome.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Dx3rdTableCell>
              }

              <Dx3rdTableCell align="center" />
              <Dx3rdTableCell align="center" />
              <Dx3rdTableCell align="center" />
              <Dx3rdTableCell align="center" />
              <Dx3rdTableCell align="center" />
              <Dx3rdTableCell align="center" />
              <Dx3rdTableCell align="center" />
              <Dx3rdTableCell align="center" />

            </Dx3rdTableRow>

            {/* 初期値 */}
            <Dx3rdTableRow>
              <Dx3rdTableCell align="center" colSpan={2}>
                {this.props.abilityValues[abilityTableRowNum.INITIALVAL].name}
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  disabled
                  value={this.props.abilityValues[abilityTableRowNum.INITIALVAL].body}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  disabled
                  value={this.props.abilityValues[abilityTableRowNum.INITIALVAL].sense}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  disabled
                  value={this.props.abilityValues[abilityTableRowNum.INITIALVAL].spirit}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  disabled
                  value={this.props.abilityValues[abilityTableRowNum.INITIALVAL].society}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center" />
              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  disabled
                  value={this.props.abilityValues[abilityTableRowNum.INITIALVAL].erosion}
                />
              </Dx3rdTableCell>
              <Dx3rdTableCell align="center" />
              <Dx3rdTableCell align="center" />
            </Dx3rdTableRow>


            {/* 成長分 */}
            <Dx3rdTableRow>
              <Dx3rdTableCell align="center" colSpan={2}>
                {this.props.abilityValues[abilityTableRowNum.GROWVAL].name}
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  value={this.props.abilityValues[abilityTableRowNum.GROWVAL].body}
                  inputProps={{ maxLength: 2 }}
                  onChange={(e) =>
                    this.props.handleToChangeAbilityInput(this.props.abilityValues[abilityTableRowNum.GROWVAL].id
                      + abilityRow.body.id, e.target.value)}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  value={this.props.abilityValues[abilityTableRowNum.GROWVAL].sense}
                  inputProps={{ maxLength: 2 }}
                  onChange={(e) =>
                    this.props.handleToChangeAbilityInput(this.props.abilityValues[abilityTableRowNum.GROWVAL].id
                      + abilityRow.sense.id, e.target.value)}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  value={this.props.abilityValues[abilityTableRowNum.GROWVAL].spirit}
                  inputProps={{ maxLength: 2 }}
                  onChange={(e) =>
                    this.props.handleToChangeAbilityInput(this.props.abilityValues[abilityTableRowNum.GROWVAL].id
                      + abilityRow.spirit.id, e.target.value)}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  value={this.props.abilityValues[abilityTableRowNum.GROWVAL].society}
                  inputProps={{ maxLength: 2 }}
                  onChange={(e) =>
                    this.props.handleToChangeAbilityInput(this.props.abilityValues[abilityTableRowNum.GROWVAL].id
                      + abilityRow.society.id, e.target.value)}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center" />
              <Dx3rdTableCell align="center" />
              <Dx3rdTableCell align="center" />
              <Dx3rdTableCell align="center" />
            </Dx3rdTableRow>



            {/* エフェクト分 */}
            <Dx3rdTableRow>
              <Dx3rdTableCell align="center" colSpan={2}>
                {this.props.abilityValues[abilityTableRowNum.EFFECTVAL].name}
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  disabled
                  value={this.props.abilityValues[abilityTableRowNum.EFFECTVAL].body}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  disabled
                  value={this.props.abilityValues[abilityTableRowNum.EFFECTVAL].sense}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  disabled
                  value={this.props.abilityValues[abilityTableRowNum.EFFECTVAL].spirit}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  disabled
                  value={this.props.abilityValues[abilityTableRowNum.EFFECTVAL].society}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  disabled
                  value={this.props.abilityValues[abilityTableRowNum.EFFECTVAL].hp}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  disabled
                  value={this.props.abilityValues[abilityTableRowNum.EFFECTVAL].erosion}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  disabled
                  value={this.props.abilityValues[abilityTableRowNum.EFFECTVAL].action}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  disabled
                  value={this.props.abilityValues[abilityTableRowNum.EFFECTVAL].move}
                />
              </Dx3rdTableCell>
            </Dx3rdTableRow>

            {/* その他補正 */}
            <Dx3rdTableRow>
              <Dx3rdTableCell align="center" colSpan={2}>
                {this.props.abilityValues[abilityTableRowNum.OTHERVAL].name}
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  value={this.props.abilityValues[abilityTableRowNum.OTHERVAL].body}
                  inputProps={{ maxLength: 2 }}
                  onChange={(e) =>
                    this.props.handleToChangeAbilityInput(this.props.abilityValues[abilityTableRowNum.OTHERVAL].id
                      + abilityRow.body.id, e.target.value)}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  value={this.props.abilityValues[abilityTableRowNum.OTHERVAL].sense}
                  inputProps={{ maxLength: 2 }}
                  onChange={(e) =>
                    this.props.handleToChangeAbilityInput(this.props.abilityValues[abilityTableRowNum.OTHERVAL].id
                      + abilityRow.sense.id, e.target.value)}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  value={this.props.abilityValues[abilityTableRowNum.OTHERVAL].spirit}
                  inputProps={{ maxLength: 2 }}
                  onChange={(e) =>
                    this.props.handleToChangeAbilityInput(this.props.abilityValues[abilityTableRowNum.OTHERVAL].id
                      + abilityRow.spirit.id, e.target.value)}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  value={this.props.abilityValues[abilityTableRowNum.OTHERVAL].society}
                  inputProps={{ maxLength: 2 }}
                  onChange={(e) =>
                    this.props.handleToChangeAbilityInput(this.props.abilityValues[abilityTableRowNum.OTHERVAL].id
                      + abilityRow.society.id, e.target.value)}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  value={this.props.abilityValues[abilityTableRowNum.OTHERVAL].hp}
                  inputProps={{ maxLength: 2 }}
                  onChange={(e) =>
                    this.props.handleToChangeAbilityInput(this.props.abilityValues[abilityTableRowNum.OTHERVAL].id
                      + abilityRow.hp.id, e.target.value)}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  value={this.props.abilityValues[abilityTableRowNum.OTHERVAL].erosion}
                  inputProps={{ maxLength: 2 }}
                  onChange={(e) =>
                    this.props.handleToChangeAbilityInput(this.props.abilityValues[abilityTableRowNum.OTHERVAL].id
                      + abilityRow.erosion.id, e.target.value)}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  value={this.props.abilityValues[abilityTableRowNum.OTHERVAL].action}
                  inputProps={{ maxLength: 2 }}
                  onChange={(e) =>
                    this.props.handleToChangeAbilityInput(this.props.abilityValues[abilityTableRowNum.OTHERVAL].id
                      + abilityRow.action.id, e.target.value)}
                />
              </Dx3rdTableCell>

              <Dx3rdTableCell align="center">
                <TextField
                  fullWidth
                  label=""
                  value={this.props.abilityValues[abilityTableRowNum.OTHERVAL].move}
                  inputProps={{ maxLength: 2 }}
                  onChange={(e) =>
                    this.props.handleToChangeAbilityInput(this.props.abilityValues[abilityTableRowNum.OTHERVAL].id
                      + abilityRow.move.id, e.target.value)}
                />
              </Dx3rdTableCell>
            </Dx3rdTableRow>

            {/* 合計値 */}
            <Dx3rdTableRow>
              <Dx3rdResultTableCell align="center" colSpan={2}>
                {this.props.abilityValues[abilityTableRowNum.TOTAL].name}
              </Dx3rdResultTableCell>

              <Dx3rdResultTableCell align="center">
                {this.props.abilityValues[abilityTableRowNum.TOTAL].body}
              </Dx3rdResultTableCell>

              <Dx3rdResultTableCell align="center">
                {this.props.abilityValues[abilityTableRowNum.TOTAL].sense}
              </Dx3rdResultTableCell>

              <Dx3rdResultTableCell align="center">
                {this.props.abilityValues[abilityTableRowNum.TOTAL].spirit}
              </Dx3rdResultTableCell>

              <Dx3rdResultTableCell align="center">
                {this.props.abilityValues[abilityTableRowNum.TOTAL].society}
              </Dx3rdResultTableCell>

              <Dx3rdResultTableCell align="center">
                {this.props.abilityValues[abilityTableRowNum.TOTAL].hp}
              </Dx3rdResultTableCell>

              <Dx3rdResultTableCell align="center">
                {this.props.abilityValues[abilityTableRowNum.TOTAL].erosion}
              </Dx3rdResultTableCell>

              <Dx3rdResultTableCell align="center">
                {this.props.abilityValues[abilityTableRowNum.TOTAL].action}
              </Dx3rdResultTableCell>

              <Dx3rdResultTableCell align="center">
                {this.props.abilityValues[abilityTableRowNum.TOTAL].move}
              </Dx3rdResultTableCell>
            </Dx3rdTableRow>

          </TableBody>

        </Table>
      </Paper>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(AbilitySettingView));