import Head from "next/head";
import { useState } from "react";
import Broadcast from "../components/Broadcast";
import Header from "../components/Header";
import ParentBox from "../components/ParentBox";

export default function Home() {
  const [theme, settheme] = useState("dark");
  const setTheme = () => {
    if (theme == "dark") {
      settheme("light");
    } else {
      settheme("dark");
    }
  };

  return (
    <>
      <Head>
        <title>Pro Writer 🚀</title>
        <meta name="title" content="Pro Writer 🚀" />
        <meta
          name="description"
          content="Minimal yet Pro Writer for your all need!"
        />
        <meta name="copyright" content="VishwaGauravIn" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prowriter.itsvg.in" />
        <meta property="og:title" content="Pro Writer 🚀" />
        <meta
          property="og:description"
          content="Minimal yet Pro Writer for your all need!"
        />
        <meta
          property="og:image"
          content="https://prowriter.itsvg.in/webimage.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://prowriter.itsvg.in" />
        <meta property="twitter:title" content="Pro Writer 🚀" />
        <meta
          property="twitter:description"
          content="Minimal yet Pro Writer for your all need!"
        />
        <meta
          property="twitter:image"
          content="https://prowriter.itsvg.in/webimage.png"
        />

        <link rel="icon" href="/logo.png" />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0LDF0PBWQY"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0LDF0PBWQY', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>

      <body
        id="mainbody"
        className={
          theme == "dark"
            ? "bg-zinc-900 text-fuchsia-400 p-6  md:p-2 mon font-semibold md:overflow-y-hidden"
            : "bg-zinc-100 text-fuchsia-400 p-6  md:p-2 mon font-semibold md:overflow-y-hidden"
        }
      >
        <Broadcast />
        <Header theme setTheme={setTheme} />
        <ParentBox />
      </body>
    </>
  );
}
