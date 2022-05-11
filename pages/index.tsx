// React imports
import { useState, useEffect } from "react";

// NextJS imports
import Head from "next/head";

// Styles
import styles from "../styles/pages/Home.module.css";

// Compoents
import Rule from "../components/rule";

// Main component to export
export default function Home() {
  return (
    <div className={styles.container}>
      {/* Metadata */}
      <Head>
        <title>Forma normal de Chomsky</title>
        <meta
          name="description"
          content="Una gramática formal está en Forma normal de Chomsky si todas sus reglas de producción son de alguna de las siguientes formas: o. α son símbolos no terminales (o variables) y α es un símbolo terminal."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Content */}
      <main className={styles.main}>
        {/* Title */}
        <h1 className={styles.title}>Forma normal de Chomsky</h1>

        {/* Description */}
        <div className={styles.description}>
          Una gramática de libre contexto está en su forma normal de Chomsky si
          cada regla es de la forma
          <br />
          <Rule rule="A → BC" />
          <br />
          <Rule rule="A → α" />
          <br />
          Donde α es cualquier terminal y A, B y C son variables (donde B y C no
          pueden ser la variable inicial).
          <br />
          Además, solo se permite la regla <Rule rule="S → ε" /> cuando S es la
          variable inicial.
        </div>

        {/* Steps */}
      </main>
    </div>
  );
}
