import React from 'react'
import styles from '../pages/styles/index.module.css'
import Advertisement from './adv'

class ShowAdvertismentList extends React.Component <any, any>{

  constructor(props){
    super(props);
  }

  render(){   
  let listItems;
  let array = Advertisement.ad;
  
  if(array !== undefined){
    listItems = array.map((item) =>
    <React.Fragment>
      <div className={styles.record}>
        <p key={item.id+"a"} >Advertisment name is: {item.name}</p> 
        <p key={item.id+"b"} >Description: {item.description}</p> 
        <p key={item.id+"c"} >Date: {item.date}</p> 
      </div>
    </React.Fragment>
    );
  }
  
  return <div className={styles.adv_show} >{listItems}</div>;
  }
}

export default ShowAdvertismentList;