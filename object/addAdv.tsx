import React from 'react'
import styles from '../pages/styles/index.module.css'
import IAdvertisment from '../state/IAdvertisment'
import Advertisement from './adv'
import ShowAdvertismentList from './schowAdv'
import Loading from './loading'

class AddAdvertisment extends React.Component <any, any> {
  private advertisment;
  constructor(props, state:IAdvertisment){
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.state = state;
    this.advertisment = new Advertisement(props);
  }

  async componentDidMount(){
    let z = await setTimeout(() => {
      this.setState(state => ({ loaded: true})); 
    }, 1000);
  }

  onButtonClick(){
    if(!this.state.name || !this.state.description || !this.state.date){
      alert("Not enough data")
    }
    else{
      this.advertisment.add(this.getAmount(), this.state.name, this.state.description, this.state.date);
      this.setState(state => ({ addRecords: true }));
    }
  }

  updateName(evt){
    this.setState(state => ({ name: evt.target.value })); 
  }

  updateDescription(evt){
    this.setState(state => ({ description: evt.target.value }));   
  }

  updateDate(evt){
    this.setState(state => ({date: evt.target.value}));   
  }

  getAmount():Number{
    let temp:Number;
    if(!this.advertisment.get()){
      temp = 1;
    }
    else{
      temp = this.advertisment.get().length + 1;
    }

    return temp;
  }

render() {
    return (<React.Fragment >
    <div className={styles.form}>
    <section className={styles.section}>
    <input  id="name" onChange={this.updateName.bind(this)} ></input>
    <input id="description" onChange={this.updateDescription.bind(this)} ></input>
    <input type="date" id="date" onChange={this.updateDate.bind(this)} ></input>
    <button className={styles.action_button} onClick={this.onButtonClick.bind(this)}>Add</button>
    </section>
    </div>
    {this.state.loaded ? <ShowAdvertismentList /> : <Loading/>}
    </React.Fragment>
    );
  }
}

export default AddAdvertisment;