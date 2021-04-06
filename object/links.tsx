import React from 'react'
import styles from '../pages/styles/index.module.css'

class Links extends React.Component{
  render() {
    return <div className={styles.menu_show}>
      <a href="https://www.facebook.com/">Facebook</a>
      <a href="https://www.instagram.com">Instagram</a>
      <a href="tel:123-456-789">Call</a>
      <a href = "mailto: abc@example.com">Send Email</a>
    </div>;
  }
}

export default Links;