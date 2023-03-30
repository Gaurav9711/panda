import React from 'react'
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
const navbar = () => {
  return (
    <div>
        <Head >
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Footer/>
    </div>
  )
}

export default navbar;