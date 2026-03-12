import React from "react";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center  h-screen ">
      <h1 className="text-center mr-5 font-bold tracking-wider text-3xl mb-5">
        Counter is 0
      </h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};

export default App;
 