"use client";

import Header from "@/components/Header";
import Main from "@/components/Main";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Main />
        <Portfolio />
      </main>
    </>
  );
}
