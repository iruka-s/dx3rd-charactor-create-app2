import React from 'react';
import { TextField, Grid, Fab, MenuItem } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { abilitiesArray, abilityTableRowNum } from '../utils/CommonConst';
import { Dx3rdTableRow, Dx3rdTableCell, Dx3rdResultTableCell } from './Dx3rdStyledComponent';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  growAddButton: {
    marginRight: 10,  // drawer.flexShrink: 0 を使う
  },
  growDeleteButton: {
    marginRight: 30,  // drawer.flexShrink: 0 を使う
  },
});

class CharactorDetailView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      initExperiencePoint: "130",
      usedExperiencePoint: "0",
      remainingExperiencePoint: "0",
    };
  }

  calcUsedAbilityExperiencePoint() {

    let experiencePoint = 0;

    abilitiesArray.map(ability => {

      let growVal = Number(this.props.abilityValues[abilityTableRowNum.GROWVAL][ability]);
      let initSyndromeSum = Number(this.props.abilityValues[abilityTableRowNum.SYNDROME1][ability]) +
        Number(this.props.abilityValues[abilityTableRowNum.SYNDROME2][ability]) +
        Number(this.props.abilityValues[abilityTableRowNum.INITIALVAL][ability]);
      let greaterThanTwenty = 0
      let elevenToTwenty = 0;

      // 21以上の能力値上昇に使った経験点計算
      if (growVal + initSyndromeSum - 20 > 0) {
        greaterThanTwenty = growVal + initSyndromeSum - 20;
        experiencePoint = experiencePoint + (greaterThanTwenty * 30);
      }

      // 11以上20以下の能力値上昇に使った経験点計算
      if (growVal + initSyndromeSum - 10 - greaterThanTwenty > 0) {
        elevenToTwenty = growVal + initSyndromeSum - 10 - greaterThanTwenty;
        experiencePoint = experiencePoint + (elevenToTwenty * 20);
      }

      // 10以下の能力値上昇に使った経験点計算
      if ((growVal - greaterThanTwenty - elevenToTwenty) > 0) {
        experiencePoint = experiencePoint + ((growVal - greaterThanTwenty - elevenToTwenty) * 10)
      }
    });

    return experiencePoint;
  }

  calcUsedMainSkillExperiencePoint() {

    let experiencePoint = 0;

    this.props.mainSkills.map(skill => {

      let growVal = Number(skill.growVal);
      let initVal = Number(skill.initVal);
      let greaterThanTwenty = 0;
      let elevenToTwenty = 0;
      let sixToTen = 0;

      // 21以上のメイン技能値上昇に使った経験点計算
      if (growVal + initVal - 20 > 0) {
        greaterThanTwenty = growVal + initVal - 20;
        experiencePoint = experiencePoint + (greaterThanTwenty * 10);
      }

      // 11以上20以下のメイン技能値上昇に使った経験点計算
      if (growVal + initVal - 10 - greaterThanTwenty > 0) {
        elevenToTwenty = growVal + initVal - 10 - greaterThanTwenty;
        experiencePoint = experiencePoint + (elevenToTwenty * 5);
      }

      // 6以上10以下のメイン技能値上昇に使った経験点計算
      if ((growVal + initVal - 5 - greaterThanTwenty - elevenToTwenty) > 0) {
        sixToTen = growVal + initVal - 5 - greaterThanTwenty - elevenToTwenty;
        experiencePoint = experiencePoint + (sixToTen * 3);
      }

      // 5以下のメイン技能値上昇に使った経験点計算
      if ((growVal - greaterThanTwenty - elevenToTwenty - sixToTen) > 0) {
        experiencePoint = experiencePoint + ((growVal - sixToTen - greaterThanTwenty - elevenToTwenty) * 2);
      }
    });

    return experiencePoint;
  }

  calcUsedSubSkillExperiencePoint() {

    let experiencePoint = 0;

    this.props.subSkills.map(skill => {

      let growVal = Number(skill.growVal);
      let initVal = Number(skill.initVal);
      let greaterThanTwenty = 0;
      let elevenToTwenty = 0;
      let sixToTen = 0;

      // 21以上のサブ技能値上昇に使った経験点計算
      if (growVal + initVal - 20 > 0) {
        greaterThanTwenty = growVal + initVal - 20;
        experiencePoint = experiencePoint + (greaterThanTwenty * 10);
      }

      // 11以上20以下のサブ技能値上昇に使った経験点計算
      if (growVal + initVal - 10 - greaterThanTwenty > 0) {
        elevenToTwenty = growVal + initVal - 10 - greaterThanTwenty;
        experiencePoint = experiencePoint + (elevenToTwenty * 5);
      }

      // 6以上10以下のサブ技能値上昇に使った経験点計算
      if ((growVal + initVal - 5 - greaterThanTwenty - elevenToTwenty) > 0) {
        sixToTen = growVal + initVal - 5 - greaterThanTwenty - elevenToTwenty;
        experiencePoint = experiencePoint + (sixToTen * 3);
      }

      // 5以下のサブ技能値上昇に使った経験点計算
      if ((growVal - greaterThanTwenty - elevenToTwenty - sixToTen) > 0) {
        experiencePoint = experiencePoint + ((growVal - sixToTen - greaterThanTwenty - elevenToTwenty) * 1);
      }
    });

    this.props.userAddSubSkills.map(skill => {

      let growVal = Number(skill.growVal);
      let initVal = Number(skill.initVal);
      let greaterThanTwenty = 0;
      let elevenToTwenty = 0;
      let sixToTen = 0;

      // 21以上の追加ボタンで追加されたサブ技能値上昇に使った経験点計算
      if (growVal + initVal - 20 > 0) {
        greaterThanTwenty = growVal + initVal - 20;
        experiencePoint = experiencePoint + (greaterThanTwenty * 10);
      }

      // 11以上20以下の追加ボタンで追加されたサブ技能値上昇に使った経験点計算
      if (growVal + initVal - 10 - greaterThanTwenty > 0) {
        elevenToTwenty = growVal + initVal - 10 - greaterThanTwenty;
        experiencePoint = experiencePoint + (elevenToTwenty * 5);
      }

      // 6以上10以下の追加ボタンで追加されたサブ技能値上昇に使った経験点計算
      if ((growVal + initVal - 5 - greaterThanTwenty - elevenToTwenty) > 0) {
        sixToTen = growVal + initVal - 5 - greaterThanTwenty - elevenToTwenty;
        experiencePoint = experiencePoint + (sixToTen * 3);
      }

      // 5以下の追加ボタンで追加されたサブ技能値上昇に使った経験点計算
      if ((growVal - greaterThanTwenty - elevenToTwenty - sixToTen) > 0) {
        experiencePoint = experiencePoint + ((growVal - sixToTen - greaterThanTwenty - elevenToTwenty) * 1);
      }
    });

    return experiencePoint;
  }

  calcUsedEffectExperiencePoint() {

    let experiencePoint = 0;

    this.props.selectEffects.map(effect => {
      experiencePoint = experiencePoint + 15 + ((Number(effect.level) - 1) * 5);
    });

    // リザレクトは初期から取得済みなので-15点
    experiencePoint = experiencePoint - 15;

    return experiencePoint;
  }

  calcRemainingExperiencePoint(usedExperiencePoint) {

    let possessionPoint = Number(this.state.initExperiencePoint);

    this.props.growValues.map(growVal => {
      possessionPoint = possessionPoint + Number(growVal.point);
    });

    return String(possessionPoint - Number(usedExperiencePoint));
  }

  handleToGrowPoint(editIndex, targetVal) {

    let possessionPoint = Number(this.state.initExperiencePoint);

    this.props.growValues.map((growVal, mapIndex) => {
      if (editIndex !== mapIndex) {
        possessionPoint = possessionPoint + Number(growVal.point);
      } else {
        possessionPoint = possessionPoint + Number(targetVal);
      }
    });

    let remainPoint = possessionPoint - Number(this.state.usedExperiencePoint);
    this.setState({ remainingExperiencePoint: String(remainPoint) });

    this.props.setGrowPoint(editIndex, targetVal);
  }

  handleToDeleteGrowRow(deleteFlag) {

    if (deleteFlag) {
      let grow = this.props.growValues.slice(-1)[0];
      let remainPoint = Number(this.state.remainingExperiencePoint) - Number(grow.point);
      this.setState({ remainingExperiencePoint: String(remainPoint) });
    }

    this.props.deleteGrowRow(deleteFlag);
  }

  componentDidMount() {

    // 使用済み経験点の計算
    let usedExperiencePoint = String(
      this.calcUsedAbilityExperiencePoint() +
      this.calcUsedMainSkillExperiencePoint() +
      this.calcUsedSubSkillExperiencePoint() +
      this.calcUsedEffectExperiencePoint());

    this.setState({ usedExperiencePoint: usedExperiencePoint });

    // 残ポイントの計算
    this.setState({ remainingExperiencePoint: this.calcRemainingExperiencePoint(usedExperiencePoint) });
  };

  render() {

    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={5}>
          <Grid item xs={5}>
            <TextField
              fullWidth
              id="name"
              label="名前"
              value={this.props.name}
              onChange={(e) => this.props.addSelectName(e.target.value)}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              id="code_name"
              label="コードネーム"
              value={this.props.codeName}
              onChange={(e) => this.props.addSelectCodeName(e.target.value)}
            />
          </Grid>
          <Grid item xs={2} />

          <Grid item xs={2}>
            <TextField
              fullWidth
              id="sex"
              label="性別"
              value={this.props.sex}
              onChange={(e) => this.props.addSelectSex(e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              fullWidth
              id="age"
              label="年齢"
              value={this.props.age}
              onChange={(e) => this.props.addSelectAge(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="works"
              select
              label="ワークス"
              fullWidth
              value={this.props.works}
              onChange={(e) => this.props.addSelectWorks(e.target.value)}
            >
              {this.props.dbWorks.map(dbWork => (
                <MenuItem id={"works"} value={dbWork}>
                  {dbWork.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              id="cover"
              label="カヴァー"
              value={this.props.cover}
              onChange={(e) => this.props.addSelectCover(e.target.value)}
            />
          </Grid>
          <Grid item xs={2} />

          <Grid item xs={2}>
            <TextField
              fullWidth
              id="origin"
              label="出自"
              value={this.props.origin}
              onChange={(e) => this.props.addSelectOrigin(e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              fullWidth
              id="experience"
              label="経験"
              value={this.props.experience}
              onChange={(e) => this.props.addSelectExperience(e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              fullWidth
              id="encounter"
              label="邂逅"
              value={this.props.encounter}
              onChange={(e) => this.props.addSelectEncounter(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="impulse"
              select
              label="衝動"
              fullWidth
              value={this.props.impulse}
              onChange={(e) => this.props.addSelectImpulse(e.target.value)}
            >
              {this.props.dbImpulses.map(impulse => (
                <MenuItem id={"impulse"} value={impulse}>
                  {impulse.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="awakening"
              select
              label="覚醒"
              fullWidth
              value={this.props.awakening}
              onChange={(e) => this.props.addSelectAwakening(e.target.value)}
            >
              {this.props.dbAwakenings.map(awakening => (
                <MenuItem id={"awakening"} value={awakening}>
                  {awakening.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} />
        </Grid>

        <Grid container justify="flex-end" xs={12}>
          <div className={classes.growAddButton}>
            <IconButton
              color="inherit"
              aria-label="add"
              onClick={this.props.handleToAddGrowRow}
            >
              <Fab size="small" color="primary" >
                <AddIcon />
              </Fab>
            </IconButton>
          </div>
          <div className={classes.growDeleteButton}>
            {(this.props.growValues.length > 2) ?
              <IconButton
                className
                color="#A51A29"
                aria-label="remove"
                onClick={this.props.handleToOpenDeleteDialog}
              >
                <Fab size="small" color="secondary" >
                  <RemoveIcon />
                </Fab>
              </IconButton>
              :
              <IconButton
                className
                disabled
                color="#A51A29"
                aria-label="remove"
                onClick={this.props.handleToOpenDeleteDialog}
              >
                <Fab size="small" color="#A51A29" >
                  <RemoveIcon />
                </Fab>
              </IconButton>
            }

          </div>
        </Grid>

        <Dialog
          open={this.props.growRowDeleteDialogOpen}
          onClose={this.props.handleToDeleteGrowRow}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="grow-delete-dialog">{"成長行削除ダイアログ"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              成長{this.props.growValues.length}を削除してもよろしいですか？
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleToDeleteGrowRow(true)} color="primary">
              OK
          </Button>
            <Button onClick={() => this.handleToDeleteGrowRow(false)} color="primary" autoFocus>
              キャンセル
          </Button>
          </DialogActions>
        </Dialog>

        <Paper className={classes.root}>
          <Table className={classes.table} aria-label="grow table">
            <TableHead>
              <Dx3rdTableRow>
                <Dx3rdTableCell width="20%" align="center"></Dx3rdTableCell>
                <Dx3rdTableCell width="10%" align="center">点数</Dx3rdTableCell>
                <Dx3rdTableCell width="70%" align="center">メモ</Dx3rdTableCell>
              </Dx3rdTableRow>
            </TableHead>

            <TableBody>
              <Dx3rdTableRow key={"default"}>
                <Dx3rdTableCell align="center">初期値</Dx3rdTableCell>
                <Dx3rdTableCell align="center">
                  {this.state.initExperiencePoint}
                </Dx3rdTableCell>
                <Dx3rdTableCell align="center"></Dx3rdTableCell>
              </Dx3rdTableRow>

              {this.props.growValues.map((growValue, index) => {
                return (
                  <Dx3rdTableRow key={index + 1}>
                    <Dx3rdTableCell align="center">成長{index + 1}</Dx3rdTableCell>
                    <Dx3rdTableCell align="center">
                      <TextField
                        fullWidth
                        value={growValue.point}
                        onChange={(e) => this.handleToGrowPoint(index, e.target.value)}
                        inputProps={{ maxLength: 4 }}
                        helperText="半角数字"
                      />
                    </Dx3rdTableCell>
                    <Dx3rdTableCell align="center">
                      <TextField
                        fullWidth
                        value={growValue.memo}
                        onChange={(e) => this.props.handleToGrowMemo(index, e.target.value)}
                      />
                    </Dx3rdTableCell>
                  </Dx3rdTableRow>
                );
              })}

              <Dx3rdTableRow key={"used"}>
                <Dx3rdTableCell align="center">使用分</Dx3rdTableCell>
                <Dx3rdTableCell align="center">
                  {this.state.usedExperiencePoint}
                </Dx3rdTableCell>
                <Dx3rdTableCell align="center"></Dx3rdTableCell>
              </Dx3rdTableRow>

              <Dx3rdTableRow key={"remain"}>
                <Dx3rdResultTableCell align="center">残り</Dx3rdResultTableCell>
                <Dx3rdResultTableCell align="center">
                  {this.state.remainingExperiencePoint}
                </Dx3rdResultTableCell>
                <Dx3rdResultTableCell align="center"></Dx3rdResultTableCell>
              </Dx3rdTableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(CharactorDetailView));