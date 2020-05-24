import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

import Dx3rdDrawer from "./utils/Dx3rdDrawer";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dbSyndromes: [],
      dbEffects: [],
      dbWeapons: [],
      dbArmors: [],
      dbItems: [],
      dbPositiveEmotions: [],
      dbNegativeEmotions: [],
      dbImpulses: [],
      dbAwakenings: [],
      dbWorks: [],
    };
    this.getDBWorksValue = this.getDBWorksValue.bind(this);
    this.getDBImpulseValue = this.getDBImpulseValue.bind(this);
    this.getDBAwakeningValue = this.getDBAwakeningValue.bind(this);
    this.getDBSyndromeValue = this.getDBSyndromeValue.bind(this);
    this.getDBPositiveEmotionValue = this.getDBPositiveEmotionValue.bind(this);
    this.getDBNegativeEmotionValue = this.getDBNegativeEmotionValue.bind(this);

    axios.get('http://localhost:3001/syndromes')
    .then((results) => {
      this.setState({ dbSyndromes: results.data });
    })
    .catch((data) =>{
      console.log(data);
    });

    axios.get('http://localhost:3001/effects')
    .then((results) => {
      this.setState({ dbEffects: results.data });
    })
    .catch((data) =>{
      console.log(data);
    });

    axios.get('http://localhost:3001/weapons')
    .then((results) => {
      this.setState({ dbWeapons: results.data });
    })
    .catch((data) =>{
      console.log(data);
    });

    axios.get('http://localhost:3001/armors')
    .then((results) => {
      this.setState({ dbArmors: results.data });
    })
    .catch((data) =>{
      console.log(data);
    });

    axios.get('http://localhost:3001/items')
    .then((results) => {
      this.setState({ dbItems: results.data });
    })
    .catch((data) =>{
      console.log(data);
    });

    axios.get('http://localhost:3001/positive_emotions')
    .then((results) => {
      this.setState({ dbPositiveEmotions: results.data });
    })
    .catch((data) =>{
      console.log(data);
    });

    axios.get('http://localhost:3001/negative_emotions')
    .then((results) => {
      this.setState({ dbNegativeEmotions: results.data });
    })
    .catch((data) =>{
      console.log(data);
    });

    axios.get('http://localhost:3001/impulses')
    .then((results) => {
      this.setState({ dbImpulses: results.data });
    })
    .catch((data) =>{
      console.log(data);
    });

    axios.get('http://localhost:3001/awakenings')
    .then((results) => {
      this.setState({ dbAwakenings: results.data });
    })
    .catch((data) =>{
      console.log(data);
    });

    axios.get('http://localhost:3001/works')
    .then((results) => {
      this.setState({ dbWorks: results.data });
    })
    .catch((data) =>{
      console.log(data);
    });

  }

  getDBWorksValue(workName){
    for(var index in this.state.dbWorks){
      if(this.state.dbWorks[index].name === workName){
        return this.state.dbWorks[index]
      }
    }
    return null;
  }

  getDBImpulseValue(impulseName){
    for(var index in this.state.dbImpulses){
      if(this.state.dbImpulses[index].name === impulseName){
        return this.state.dbImpulses[index]
      }
    }
    return null;
  }

  getDBAwakeningValue(awakeningName){
    for(var index in this.state.dbAwakenings){
      if(this.state.dbAwakenings[index].name === awakeningName){
        return this.state.dbAwakenings[index]
      }
    }
    return null;
  }

  getDBSyndromeValue(syndromeName){
    for(var index in this.state.dbSyndromes){
      if(this.state.dbSyndromes[index].name === syndromeName){
        return this.state.dbSyndromes[index]
      }
    }
    return null;
  }

  getDBPositiveEmotionValue(pEmotionName){
    for(var index in this.state.dbPositiveEmotions){
      if(this.state.dbPositiveEmotions[index].name === pEmotionName){
        return this.state.dbPositiveEmotions[index]
      }
    }
    return null;
  }

  getDBNegativeEmotionValue(nEmotionName){
    for(var index in this.state.dbNegativeEmotions){
      if(this.state.dbNegativeEmotions[index].name === nEmotionName){
        return this.state.dbNegativeEmotions[index]
      }
    }
    return null;
  }

  render() {
    
    return (
      <Router>
      <Dx3rdDrawer
        dbEffects={this.state.dbEffects}
        dbWeapons={this.state.dbWeapons}
        dbArmors={this.state.dbArmors}
        dbItems={this.state.dbItems}
        dbPositiveEmotions={this.state.dbPositiveEmotions}
        dbNegativeEmotions={this.state.dbNegativeEmotions}
        dbImpulses={this.state.dbImpulses}
        dbAwakenings={this.state.dbAwakenings}
        dbWorks={this.state.dbWorks}
        dbSyndromes={this.state.dbSyndromes}
        getDBWorksValue={this.getDBWorksValue}
        getDBImpulseValue={this.getDBImpulseValue}
        getDBAwakeningValue={this.getDBAwakeningValue}
        getDBSyndromeValue={this.getDBSyndromeValue}
        getDBPositiveEmotionValue={this.getDBPositiveEmotionValue}
        getDBNegativeEmotionValue={this.getDBNegativeEmotionValue}
      />
    </Router>
    );
  }
}

export default App;
