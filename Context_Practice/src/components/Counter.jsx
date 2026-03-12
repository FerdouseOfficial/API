import React from "react";

const Counter = () => {
  return (
    <div>
      <button className="px-4 py-2 bg-amber-300 m-1.5 rounded-2xl cursor-pointer active:scale-95 font-[apple] tracking-wider text-xl">
        Increament
      </button>
      <button className="px-4 py-2 bg-amber-300 m-1.5 rounded-2xl cursor-pointer active:scale-95 font-[apple] tracking-wider text-xl">
        Decreament
      </button>
    </div>
  );
};

export default Counter;
