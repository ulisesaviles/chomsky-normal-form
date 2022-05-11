import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Forma normal de Chomsky</title>
        <meta
          name="description"
          content="Una gramática formal está en Forma normal de Chomsky si todas sus reglas de producción son de alguna de las siguientes formas: o. α son símbolos no terminales (o variables) y α es un símbolo terminal."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Forma normal de Chomsky</h1>

        <p className={styles.description}>Hola</p>
      </main>
    </div>
  );
}
