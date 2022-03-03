import React from "react";
import "./styles.css";

function Dare() {
  return (
    <div className="w-screen flex flex-col items-center mt-32">
      <h1 className="text-5xl drop-shadow-lg font-semibold">Nam</h1>
      <div className="dare-box bg-white h-48 w-3/6 mt-8 grid place-items-center px-14 text-center">
        <span className="dare-text drop-shadow-md font-semibold text-3xl">
          Raise one hand in the air for the rest of the game!
        </span>
      </div>
    </div>
  );
}

export default Dare;
