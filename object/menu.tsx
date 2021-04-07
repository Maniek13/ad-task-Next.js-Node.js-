import React from 'react'
import styles from '../pages/styles/index.module.css'
import IState from '../state/IState'

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
    </div>;
  }
}
  
export default Menu;