import React from 'react'
import Head from 'next/head'
import AddAdvertisment from '../object/addAdv'
import Menu from '../object/menu'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Page name</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Menu/>
        <AddAdvertisment/>
      </React.Fragment>
    );
  }
}

export default App;

