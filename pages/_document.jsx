import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html className="h-full bg-white antialiased" lang="en">
            <Head>
                <link rel="shortcut icon" href="/logo.svg"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta charSet="utf-8"/>
                <meta
                    name="description"
                    content="Wedding invitation from Chinwal and Singh family."
                />
                <meta property="og:title" content="Marisha-Prasad wedding" key="ogtitle"/>
                <meta property="og:description" content="Wedding invitation from Chinwal and Singh family."
                    key="ogdesc"/>

                {/* Twitter */}
                <meta name="twitter:card" content="summary" key="twcard"/>
                <meta name="twitter:creator" content="@ChinwalPrasad" key="twhandle"/>

                {/* Open Graph */}
                <meta property="og:url" content="https://prasadmarisha.info" key="ogurl"/>
                <meta property="og:image" content="/prasad-marisha.jpeg" key="ogimage"/>
                <meta property="og:site_name" content="prasadmarisha" key="ogsitename"/>
                <meta property="og:title" content="prasad marisha wedding" key="ogtitle"/>
                <meta property="og:description" content="Wedding invitation from Chinwal and Singh family."
                    key="ogdesc"/>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymus'} />
                <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet" />
            </Head>
            <body className={'h-full'}>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
