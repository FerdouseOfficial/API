import React, { useContext } from "react";
import { CounterContext } from "../Context/Counter";

const Counter = () => {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <button
        className="px-4 py-2 bg-amber-300 m-1.5 rounded-2xl cursor-pointer active:scale-95 font-[apple] tracking-wider text-xl"
        onClick={() => setCount(count + 1)}
      >
        Increament
      </button>
      <button
        className="px-4 py-2 bg-amber-300 m-1.5 rounded-2xl cursor-pointer active:scale-95 font-[apple] tracking-wider text-xl"
        onClick={() => setCount(count - 1)}
      >
        Decreament
      </button>
    </div>
  );
};

export default Counter;
