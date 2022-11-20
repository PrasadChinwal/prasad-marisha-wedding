import Head from 'next/head'
import {Header} from "../components/Header";
import {Family} from "../components/Family";
import {Schedule} from "../components/Schedule";
import {Contact} from "../components/Contact";
import {Hero} from "../components/Hero";
import {Footer} from "../components/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta
                    name="description"
                    content="Wedding invitation from Chinwal and Singh family."
                />
                <meta property="og:title" content="Marisha-Prasad wedding" key="ogtitle" />
                <meta property="og:description" content="Wedding invitation from Chinwal and Singh family." key="ogdesc" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary" key="twcard" />
                <meta name="twitter:creator" content="@ChinwalPrasad" key="twhandle" />

                {/* Open Graph */}
                <meta property="og:url" content="https://prasadmarisha.info" key="ogurl" />
                <meta property="og:image" content="/prasad-marisha.jpeg" key="ogimage" />
                <meta property="og:site_name" content="prasadmarisha" key="ogsitename" />
                <meta property="og:title" content="prasad marisha wedding" key="ogtitle" />
                <meta property="og:description" content="Wedding invitation from Chinwal and Singh family." key="ogdesc" />

                <title>Marisha-Prasad wedding</title>
            </Head>
            <Header/>
            <main>
                <Hero/>
                <Family/>
                <Schedule/>
                <Contact/>
                <Footer/>
            </main>
        </>
    )
}
