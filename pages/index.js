import Head from 'next/head'

import { useEffect } from 'react'
import HomeLeft from '../components/HomeLeft';
import HomeRight from '../components/HomeRight';
import Styles from "../styles/Home.module.css";

export default function Home() {

  
  return (
    <div className={Styles.container}>
      <Head>  
        <title>Fogan BIDI</title>
        <meta charset="utf-8" />
      </Head>
      <HomeLeft />
      <HomeRight />
    </div>
  )
}
