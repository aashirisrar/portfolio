"use client";

import Header from "@/components/Header";
import Main from "@/components/Main";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Main />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
