import "/styles/globals.css";
import "/styles/styles.css";
import type { Metadata } from "next";

import Navbar from "/components/Navbar";
import { Suspense } from "react";
import Head from "next/head";
import Footer from "/components/Footer";
import PageTransition from "/components/PageTransition";

export const metadata = {
  title: "Spoused",
  description: "The Marriage-Focused Dating App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#FFCC21" />
        <meta property="description" content={metadata.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* @ts-ignore */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=GFS+Didot&family=Lato:wght@300;400;700;900&family=Lora:wght@400;500;600;700&family=Montserrat+Alternates:wght@400;500;600;700;800;900&family=Pacifico&family=Playball&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:wght@300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <title>{metadata.title}</title>
      </Head>
      <body className="custom-scrollbar3">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
