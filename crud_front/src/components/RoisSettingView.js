import React from 'react';
import { TextField, Table, TableBody, TableHead, Paper, MenuItem, Checkbox } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import { Dx3rdTableRow, Dx3rdTableCell } from './Dx3rdStyledComponent';
import { roisRow, emotionContentNum } from '../utils/CommonConst';

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

class RoisSettingView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.isSRoisChecked = this.isSRoisChecked.bind(this);
  }

  isSRoisChecked(numStr){
    return (numStr === "1");
  }

  render() {

    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="rois table">

          <TableHead>
            <Dx3rdTableRow>
              <Dx3rdTableCell width="10%" align="center">{roisRow.srois.value}</Dx3rdTableCell>
              <Dx3rdTableCell width="25%" align="center">{roisRow.name.value}</Dx3rdTableCell>
              <Dx3rdTableCell width="15%" align="center">{roisRow.favor.value}</Dx3rdTableCell>
              <Dx3rdTableCell width="15%" align="center">{roisRow.malice.value}</Dx3rdTableCell>
              <Dx3rdTableCell width="35%" align="center">{roisRow.memo.value}</Dx3rdTableCell>
            </Dx3rdTableRow>
          </TableHead>

          <TableBody>
            {this.props.selectRois.map((selectRoi, index) => {

              const labelId = `enhanced-table-checkbox-${index}`;

              return (

                <Dx3rdTableRow>

                  {/* Sロイス */}
                  <Dx3rdTableCell align="center">
                    <Checkbox
                      checked={this.isSRoisChecked(selectRoi.srois)}
                      onChange={(e) => this.props.handleToChangeRoisInput(roisRow.srois.id, index, e.target.value)}
                      inputProps={{ 'aria-labelledby': labelId }}

                    />
                  </Dx3rdTableCell>

                  {/* 名称 */}
                  <Dx3rdTableCell align="center">
                    <TextField
                      fullWidth
                      label=""
                      value={selectRoi.name}
                      onChange={(e) => this.props.handleToChangeRoisInput(roisRow.name.id, index, e.target.value)}
                    />
                  </Dx3rdTableCell>

                  {/* 好意 */}
                  <Dx3rdTableCell align="center">
                    <TextField
                      id="standard-select-currency"
                      select
                      label=""
                      fullWidth
                      value={selectRoi.favor}
                      onChange={(e) => this.props.selectFavor(index, e.target.value)}
                    >
                      {this.props.dbPositiveEmotion.map(pEmotion => (
                        <MenuItem id={"proi" + String(index)} value={pEmotion}>
                          {pEmotion[emotionContentNum.NAME]}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Dx3rdTableCell>

                  {/* 悪意 */}
                  <Dx3rdTableCell align="center">
                    <TextField
                      id="standard-select-currency"
                      select
                      label=""
                      fullWidth
                      value={selectRoi.malice}
                      onChange={(e) => this.props.selectMalice(index, e.target.value)}
                    >
                      {this.props.dbNegativeEmotion.map(nEmotion => (
                        <MenuItem id={"nroi" + String(index)} value={nEmotion}>
                          {nEmotion[emotionContentNum.NAME]}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Dx3rdTableCell>

                  {/* メモ */}
                  <Dx3rdTableCell align="center">
                    <TextField
                      fullWidth
                      label=""
                      value={selectRoi.memo}
                      onChange={(e) => this.props.handleToChangeRoisInput(roisRow.memo.id, index, e.target.value)}
                    />
                  </Dx3rdTableCell>
                </Dx3rdTableRow>
              );
            })}
          </TableBody>

        </Table>
      </Paper>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(RoisSettingView));