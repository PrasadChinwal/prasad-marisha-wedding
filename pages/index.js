import Head from 'next/head'
import {Header} from "./components/Header";
import {Family} from "./components/Family";
import {Schedule} from "./components/Schedule";
import {Newsletter} from "./components/Newsletter";
import {Hero} from "./components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Marisha-Prasad wedding</title>
        <meta
            name="description"
            content="Wedding invitation from Chinwal and Singh family."
        />
      </Head>
      <Header />
      <main>
        <Hero/>
        <Family/>
        <Schedule/>
        <Newsletter/>
      </main>
    </>
  )
}
