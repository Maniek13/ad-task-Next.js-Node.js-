import React from 'react'
import styles from '../pages/styles/index.module.css'
import IState from '../state/IState'
import Links from './links'

class Menu extends React.Component <any, any > {
    constructor(props, state:IState ){
      super(props);
      this.state = state = { menuVisible: false,
      name: "Page name" };
    }
  
    onButtonClick() {
      this.setState(state => ({ menuVisible: !state.menuVisible }));
    }
    
    render() {
      return <div className={styles.menu}>
      <div className={styles.name}><p>{this.state.name}</p></div>
      <button className={styles.menu_button} onClick={this.onButtonClick.bind(this)}>Contact</button>
      {this.state.menuVisible && <Links/>}
      </div>;
    }
  }
  
  export default Menu;