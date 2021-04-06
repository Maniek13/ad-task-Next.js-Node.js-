import React from 'react'
import styles from './styles/index.module.css'


class Links extends React.Component{
    render() {
      return <div className={styles.menu_show}>
        <a href="https://www.facebook.com/">Facebook</a>
        <a href="https://www.instagram.com">Instagram</a>
      </div>;
    }
}

export default Links;