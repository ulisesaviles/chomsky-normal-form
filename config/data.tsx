// Components
import Rule from "../components/rule";

// Data
const data = [
  {
    stepNumber: 1,
    stepName: "Variable inicial.",
    description: [
      "Se agrega una nueva variable inicial S0 y la regla ",
      <Rule rule="S0 → S" key={1} />,
      ", donde S es la variable inicial original.",
    ],
    videoUrl: "3uDeugplQQk",
    quiz: {
      question: ["¿S0 debe producir la variable inicial original?"],
      options: [
        {
          name: "Falso.",
          isCorrect: false,
        },
        {
          name: "Verdadero.",
          isCorrect: true,
        },
      ],
    },
  },
  {
    stepNumber: 2,
    stepName: "Remover cadenas vacías.",
    description: [
      "Se remueve una regla de cadena vacía, donde ",
      <Rule rule="A → ε" key={1} />,
      " donde A no es la variable inicial. Después para ocurrencia de la variable A del lado derecho de una regla, se agrega una nueva regla con la ocurrencia borrada.",
      <br key={3} />,
      "Si ",
      <Rule rule="R → uAw" key={5} />,
      ", agregamos ",
      <Rule rule="R → uw" key={7} />,
      ".",
    ],
    videoUrl: "RVAG07-MwgI",
    quiz: {
      question: [
        "Una vez removida la ocurrencia de la variable que produce la cadena vacía, ¿qué hay que hacer?",
      ],
      options: [
        {
          name: "Nada.",
          isCorrect: false,
        },
        {
          name: "Se agrega una nueva regla con la ocurrencia borrada.",
          isCorrect: true,
        },
      ],
    },
  },
  {
    stepNumber: 3,
    stepName: "Remover reglas unitarias.",
    description: [
      "Se remueve una regla ",
      <Rule rule="A → B" key={1} />,
      " cuando aparezca una regla ",
      <Rule rule="B → u" key={3} />,
      " y se arregla ",
      <Rule rule="A → u" key={5} />,
      ".",
    ],
    videoUrl: "VH70z_MiPIo",
    quiz: {
      question: ["Elige un ejemplo de regla unitaria:"],
      options: [
        {
          name: <Rule rule="A → a" />,
          isCorrect: false,
        },
        {
          name: <Rule rule="A → AB" />,
          isCorrect: false,
        },
        {
          name: <Rule rule="A → aBc" />,
          isCorrect: false,
        },
        {
          name: <Rule rule="A → B" />,
          isCorrect: true,
        },
      ],
    },
  },
  {
    stepNumber: 4,
    stepName: "Transformar reglas con tres o más elementos",
    description: [
      "Reemplazar cada regla del tipo ",
      <Rule rule="A → U1 U2 U3…Uk" key={1} />,
      ", k >= 3 con las reglas ",
      <Rule rule="A1 → U1 A2" key={3} />,
      ", ",
      <Rule rule="A2 → U2 A3" key={5} />,
      ", ",
      <Rule rule="A(k-2) → U(k-1)Ak" key={7} />,
      ".",
    ],
    videoUrl: "buj2gJsLamg",
    quiz: {
      question: [
        "Si ",
        <Rule rule="A → BCD" key={1} />,
        ", y se sustituye por la regla ",
        <Rule rule="A → BE" key={3} />,
        ", ¿Qué debe producir E?",
      ],
      options: [
        {
          name: <Rule rule="E → BC" />,
          isCorrect: false,
        },
        {
          name: <Rule rule="E → CD" />,
          isCorrect: true,
        },
        {
          name: <Rule rule="E → A" />,
          isCorrect: false,
        },
        {
          name: <Rule rule="E → BCD" />,
          isCorrect: false,
        },
      ],
    },
  },
  {
    stepNumber: 5,
    stepName: "Remover terminales juntas con variables.",
    description: [
      "Cambiar cada terminal α por A y agregamos la regla ",
      <Rule rule="A → α" key={1} />,
      ".",
    ],
    videoUrl: "HR87yrEZaXk",
    quiz: {
      question:
        "¿Qué se hace en el caso de que se necesite crear una variable para la terminal α, pero la variable A ya existe?",
      options: [
        {
          name: "Se agrega la terminal a la regla existente.",
          isCorrect: false,
        },
        {
          name: "Se agrega una variable con otro nombre.",
          isCorrect: true,
        },
        {
          name: "En ese caso no se hace el paso 5.",
          isCorrect: false,
        },
        {
          name: "Ninguna de las anteriores.",
          isCorrect: false,
        },
      ],
    },
  },
];

export default data;
