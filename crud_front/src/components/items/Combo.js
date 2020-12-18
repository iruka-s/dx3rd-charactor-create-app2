import { SKILL_DECIDE_FUNCS, TIMING_DECIDE_FUNCS, 
    TARGET_DECIDE_FUNCS, SORT_DECIDE_FUNCS,
    SKILL_CONBINABLE_CHECK_FUNCS, TIMING_CONBINABLE_CHECK_FUNCS,
    SORT_CONBINABLE_CHECK_FUNCS } from "../../utils/CommonConst"

export class Combo {

    constructor() {
        this._skill = ''
        this._timing = ''
        this._erosionPoint = 0
        this._target = ''
        this._range = ''
        this._difficulty = ''
        this._sort = ''
        this._effects = []
    };

    set skill(_skill) {
        this._skill = _skill
    }

    get skill() {
        return this._skill
    }

    set timing(_timing) {
        this._timing = _timing
    }

    get timing() {
        return this._timing
    }

    set erosionPoint(_erosionPoint) {
        this._erosionPoint = _erosionPoint
    }

    get erosionPoint() {
        return this._erosionPoint
    }

    set target(_target) {
        this._target = _target
    }

    get target() {
        return this._target
    }

    set range(_range) {
        this._range = _range
    }

    get range() {
        return this._range
    }

    set difficulty(_difficulty) {
        this._difficulty = _difficulty
    }

    get difficulty() {
        return this._difficulty
    }

    set sort(_sort) {
        this._sort = _sort
    }

    get sort() {
        return this._sort
    }

    set effects(_effects) {
        this._effects = _effects
    }

    get effects() {
        return this._effects
    }

    // 各種値の初期化
    initializeParameter() {
        this._skill = ""
        this._timing = ""
        this._erosionPoint = 0
        this._target = ""
        this._range = ""
        this._difficulty = ""
        this._sort = ""
    }

    // 技能を決める
    decideSkill(effect){
        if(this.skill === '') {
            this.skill = effect.dbInfo.skill
            return
        }
        this.skill = SKILL_DECIDE_FUNCS[effect.dbInfo.skill](this.skill)
    }

    // タイミングを決める
    decideTiming(effect){
        if(this.timing === '') {
            this.timing = effect.dbInfo.timing
            return
        }
        this.timing = TIMING_DECIDE_FUNCS[effect.dbInfo.timing](this.timing)
    }

    // 侵食値を決める
    decideErosion(effect){
        this.erosionPoint += parseInt(effect.dbInfo.erosion_point)
    }

    // 対象を決める
    decideTarget(effect){
        if(this.target === '') {
            this.target = effect.dbInfo.target
            return
        }
        this.target = TARGET_DECIDE_FUNCS[effect.dbInfo.target](this.target)
    }

    // 範囲を決める
    decideRange(effect){
        if(this.range === '') {
            this.range = effect.dbInfo.range
            return
        }
        if(this.range === '0') {
            this.range = effect.dbInfo.range
            return
        }
        if(effect.dbInfo.range === '0') {
            return
        }
        if(parseInt(this.range) > parseInt(effect.dbInfo.range)) {
            this.range = effect.dbInfo.range
        }
    }

    // 難易度を決める
    decideDifficulty(effect){
        if(this.difficulty === '') {
            this.difficulty = effect.dbInfo.difficulty
            return
        }
        if(parseInt(this.difficulty) < parseInt(effect.dbInfo.difficulty)) {
            this.difficulty = effect.dbInfo.difficulty
        }
    }

    // 種別を決める
    decideSort(effect){
        if(this.sort === '') {
            this.sort = effect.dbInfo.sort
            return
        }
        this.sort = SORT_DECIDE_FUNCS[effect.dbInfo.sort](this.sort)
    }

    // 効果の内容を決める
    decideEffectContents(effect){
    
    }

    updateData() {
    this._erosionPoint = 0
        for (let index in this._effects) {
            this.decideSkill(this._effects[index])
            this.decideTiming(this._effects[index])
            this.decideErosion(this._effects[index])
            this.decideTarget(this._effects[index])
            this.decideRange(this._effects[index])
            this.decideDifficulty(this._effects[index])
            this.decideSort(this._effects[index])
        }
    }

    // エフェクト追加
    addEffect(effect){
        if (this.isConbinable(effect)){
            this._effects.push(effect)
            this.updateData()
        }
    }

    // エフェクト削除
    removeEffect(unselectEffect){
        let index = this._effects.indexOf(unselectEffect);
        if (index < 0) {
            return
        }
        this._effects.splice(index, 1)
        this.initializeParameter()
        this.updateData()
    }

    // コンボの最終結果を取得
    getComboData() {
        return ({
            'skill': this._skill,
            'timing': this._timing,
            'erosionPoint': this._erosionPoint,
            'target': this._target,
            'range': this._range,
            'difficulty': this._difficulty,
            'sort': this._sort,
        })
    }

    // コンセントレイトを含むか
    hasConcentrate() {
        for (let index in this._effects) {
            if (this._effects[index].dbInfo.other === "22") {
                return true
            }
        }
        return false
    }

    // コンセントレイト組み合わせ不可のエフェクトを含むか
    hasCannotCombineConcentrate() {
        for (let index in this._effects) {
            if (this._effects[index].dbInfo.other === "6") {
                return true
            }
        }
        return false
    }

    // アニマルテイマーを含むか
    hasAnimaltamer() {
        for (let index in this._effects) {
            if (this._effects[index].dbInfo.other === "23") {
                return true
            }
        }
        return false
    }

    // アニマルテイマー組み合わせ不可のエフェクトを含むか
    hasCannotCombineAnimaltamer() {
        for (let index in this._effects) {
            if (this._effects[index].dbInfo.other === "11") {
                return true
            }
        }
        return false
    }

    // 同じシンドロームエフェクトを含むか
    hasSameSyndromeEffect(inputSyndrome) {
        for (let index in this._effects) {
            if (inputSyndrome === this._effects[index].dbInfo.syndrome) {
                return true
            }
        }
        return false
    }

    isDeletable(effect) {

        let index = this._effects.indexOf(effect);

        if(index < 0) {
            return false;
        }

        let copyEffects = this._effects.concat();
        copyEffects.splice(index, 1);

        for (let copyEffectsIndex in copyEffects) {

            if (copyEffects[copyEffectsIndex].dbInfo.skill === '1') {
                let targetSyndrome = copyEffects[copyEffectsIndex].dbInfo.syndrome;
                let otherEffects = copyEffects.concat();
                otherEffects.splice(copyEffectsIndex, 1);
                let isContainSameSyndrome = false

                for(let otherEffectsIndex in otherEffects) {
                    if(targetSyndrome == otherEffects[otherEffectsIndex].dbInfo.syndrome &&
                        otherEffects[otherEffectsIndex].dbInfo.skill !== '1') {
                        isContainSameSyndrome = true
                        break;
                    }
                }
                if(!isContainSameSyndrome) {
                    return false;
                }
            }
        }
        return true;
    }

    // 組み合わせの可否を判断
    isConbinable(effect) {
    
        // 組み合わせ不可
        if (effect.dbInfo.other === '1'){
            return false
        }

        // 技能：シンドロームは同じシンドロームのエフェクトがないと追加不可
        if (effect.dbInfo.skill === '1' && !this.hasSameSyndromeEffect(effect.dbInfo.syndrome)) {
            return false
        }

        if (this.effects.length === 0) {
            return true
        }

        // コンセントレイト組み合わせ不可チェック
        if (effect.dbInfo.other === "6" && this.hasConcentrate()){
            return false
        }
        if (effect.dbInfo.other === "22" && this.hasCannotCombineConcentrate()) {
            return false
        }

        // アニマルテイマー組み合わせ不可チェック
        if (effect.dbInfo.other === "11" && this.hasAnimaltamer()){
            return false
        }
        if (effect.dbInfo.other === "23" && this.hasCannotCombineAnimaltamer()) {
            return false
        }

        // タイミング
        if (!TIMING_CONBINABLE_CHECK_FUNCS[effect.dbInfo.timing](this.timing)) {
            return false
        }

        // 技能
        if (!SKILL_CONBINABLE_CHECK_FUNCS[effect.dbInfo.skill](this.skill)) {
            return false
        }

        // 種別
        if (!SORT_CONBINABLE_CHECK_FUNCS[effect.dbInfo.sort](this.sort)) {
            return false
        }
        
        return true
    }
}