import React, { useContext, useState } from "react";
import Counter from "./components/Counter";
import { CounterContext } from "./Context/Counter";

const App = () => {
  const counterState = useContext(CounterContext)
  console.log(counterState)
  return (
    <div className="flex flex-col items-center justify-center  h-screen ">
      <h1 className="text-center mr-5 font-bold tracking-wider text-3xl mb-5">
        Counter is {counterState.count}
      </h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};

export default App;
