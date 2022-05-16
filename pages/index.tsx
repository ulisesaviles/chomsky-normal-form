// React imports
import { useState, useEffect } from "react";

// NextJS imports
import Head from "next/head";

// Styles
import styles from "../styles/pages/Home.module.css";

// Componets
import Rule from "../components/rule";
import YoutubeEmbed from "../components/YoutubeEmbed";

// Data to render
import steps from "../config/data";

// Icons
import { IoArrowForward, IoClose } from "react-icons/io5";

// Main component to export
export default function Home() {
  // Constants
  const [selectedAnswers, setSelectedAnswers]: [null[] | number[], any] =
    useState(steps.map((step) => null));

  const [popupIsDisplayed, setPopupIsDisplayed] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  // Functions
  const hidePopup = () => {
    setPopupIsDisplayed(false);
  };

  const selectAnswer = (questionIndex: number, answerIndex: number) => {
    let tempAnswers = [...selectedAnswers];
    tempAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(tempAnswers);
  };

  const showPopUp = (index: number) => {
    setVideoUrl(steps[index].videoUrl);
    setPopupIsDisplayed(true);
  };

  // JSX to render
  return (
    <div className={styles.container}>
      {/* Popup */}
      {popupIsDisplayed ? (
        <div className={styles.popupBackground} onClick={hidePopup}>
          <div className={styles.popupContainer}>
            <button className={styles.closeVideo} onClick={hidePopup}>
              <IoClose className={styles.arrow} />
            </button>
            <YoutubeEmbed embedId={videoUrl} />
          </div>
        </div>
      ) : null}

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
        {/* Header */}
        <header className={styles.header}>
          <div>T031438</div>
          <div>T032069</div>
        </header>

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
        {steps.map((step) => (
          <div className={styles.stepContainer} key={step.stepName}>
            {/* Number */}
            <h4 className={styles.stepNumber}>Paso {step.stepNumber}</h4>
            {/* Title */}
            <h2 className={styles.stepName}>{step.stepName}</h2>
            {/* Description */}
            <div className={styles.stepDescription}>{step.description}</div>
            {/* Video */}
            <button
              className={styles.viewVideo}
              onClick={() => showPopUp(step.stepNumber - 1)}
            >
              Ver video <IoArrowForward className={styles.arrow} />
            </button>
            {/* Quiz */}
            <div className={styles.quizContainer}>
              <h6 className={styles.shortQuiz}>Pequeño quiz:</h6>
              <h3 className={styles.quizQuestion}>{step.quiz.question}</h3>
              {step.quiz.options.map((option) => {
                const optionIndex = step.quiz.options.indexOf(option);
                return (
                  <button
                    onClick={() => selectAnswer(step.stepNumber, optionIndex)}
                    key={option.name}
                    className={`${styles.quizOptionContainer} ${
                      selectedAnswers[step.stepNumber] === optionIndex &&
                      option.isCorrect
                        ? styles.correctOption
                        : selectedAnswers[step.stepNumber] === optionIndex &&
                          !option.isCorrect
                        ? styles.incorrectOption
                        : null
                    }`}
                  >
                    <div>{option.name}</div>
                    <div>
                      {selectedAnswers[step.stepNumber] === optionIndex &&
                      option.isCorrect
                        ? "✅"
                        : selectedAnswers[step.stepNumber] === optionIndex &&
                          !option.isCorrect
                        ? "❌"
                        : null}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
