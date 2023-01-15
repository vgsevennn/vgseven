import { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel={"stylesheet"}
                    href={"https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;600&display=swap"}
                />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}