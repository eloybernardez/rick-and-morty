import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import ColorContext from "./context/ColorContext";
import useDarkMode from "./hooks/useDarkMode";

// function factorial(n) {
//   if (n === 1) {
//     console.log(`return 1`);
//     return 1;
//   } else {
//     console.log(`${n}*factorial(${n}-1)`);
//     return n * factorial(n - 1);
//   }
// }

// const memo = [];

// function memoFactorial(n) {
//   if (n === 1) {
//     return 1;
//   } else if (!memo[n]) {
//     // si no hemos realizado el factorial de n
//     console.log(`memo[${n}] = ${n} * memoFactorial(${n}-1)`);
//     memo[n] = n * memoFactorial(n - 1);
//   } else if (memo[n]) {
//     // si lo hicimos, mostrarlo
//     console.log(
//       `memoFactorial(${n + 1}-1) está memoizado en memo[${n}] (${memo[n]})`
//     );
//   }
//   return memo[n];
// }

// memoFactorial(5);
// memoFactorial(10);

// Fibonacci (da el lugar n en la sucesión de fibonacci)
// function fibonacci(n) {
//   if (n === 1 || n === 0) return 1;
//   else {
//     console.log(`${2 * n - 3}`);
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

// fibonacci(4);

// const memo = [];

// function memoFibonacci(n) {
//   console.group(`calculando fibonacci de ${n}`);
//   if (n === 0 || n === 1) {
//     console.log(`n es igual a ${n}`);
//     return 1;
//   } else if (!memo[n]) {
//     console.log(`fibonacci de ${n} no está guardado en memo `);
//     console.log(`calculando fibonacci de ${n - 1} y de ${n - 2}`);
//     memo[n] = memoFibonacci(n - 1) + memoFibonacci(n - 2);
//   }
//   console.log(`fibonacci de ${n} es ${memo[n]}`);
//   console.groupEnd();
//   return memo[n];
// }

// console.log(memoFibonacci(4));

// Recuerda que solo debemos implementar memoización en funciones puras, es decir, funciones que siempre devuelven el mismo resultado cuando enviamos los mismos argumentos. No implementes memoización en llamados a una API o para trabajar con fechas y horas en JavaScript.

function App() {
  const initialColor = useDarkMode();
  return (
    <ColorContext.Provider value={initialColor}>
      <Header />
      <Main />
      <Footer />
    </ColorContext.Provider>
  );
}

export default App;
