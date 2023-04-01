import React from 'react'
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Compo from './Compo';
import FixedContainer from './Fixed-container';
import InvestmentContainer from './investment-container';

import FdBazaar from './FdBazaar';
const navbar = () => {
  return (
    <div>
        <Head >
        <title>Create Next App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Footer/>
      <Compo/>
      <FixedContainer/>
      {/* <InvestmentContainer/> */}
      {/* <FdBazaar/> */}
    </div>
  )
}

export default navbar;