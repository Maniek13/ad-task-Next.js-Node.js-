import React from 'react'
import styles from '../pages/styles/index.module.css'

class Loading extends React.Component <any, any>{

  render(){
    return <div className={styles.adv_show} >
      <div className={styles.loading}>Loading</div>
    </div>;
  }
}

export default Loading;