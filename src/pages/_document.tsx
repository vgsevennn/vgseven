import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel={"stylesheet"}
          href={
            "https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;600&display=swap"
          }
        />
        <link rel="icon" href="/favicon.png" />
          <meta
          name="description"
          content="Hey there!, My name is VGSEVEN (Vaibhav Gosavi), and I am the founder of Silvi
            and Justine Studio, as well as a producer at VKT Studio. I love
            writing about various topics, but mainly about life."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
