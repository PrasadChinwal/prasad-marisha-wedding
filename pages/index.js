import Head from 'next/head'
import {Header} from "../components/Header";
import {Family} from "../components/Family";
import {Schedule} from "../components/Schedule";
import {Contact} from "../components/Contact";
import {Hero} from "../components/Hero";
import {Example} from "../components/Hero1";
import {Footer} from "../components/Footer";

export default function Home() {
    return (
        <>
            <Head><title>Marisha-Prasad wedding</title></Head>
            <Header/>
            <main>
                <Example/>
                <Family/>
                <Schedule/>
                <Contact/>
                <Footer/>
            </main>
        </>
    )
}
