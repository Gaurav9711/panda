import React from 'react'
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Compo from './Compo';
import FixedContainer from './Fixed-container';
import LearningContainer from './LearningContainer';
import TeamContainer from './Team-container';
import PressContainer from './PressContainer';
import FollowUs from './FollowUs';
import ChatContainer from './ChatContainer';
import SavingsContainer from './savings-container';
import FdBazaar from './FdBazaar';
import TaxSaver from './TaxSaver';
const navbar = () => {
  return (
    <div>
        <Head >
        <title>Create Next App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
{/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"></link> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Footer/>
      <Compo/>
      <FdBazaar/>
      <SavingsContainer/>
      <TaxSaver/>
      <FixedContainer/>
      <LearningContainer/>
      <TeamContainer/>
      <PressContainer/>
      <FollowUs/>
      <ChatContainer/>
    </div>
  )
}

export default navbar;