import React from "react";
import ripple from "./assets/ripple-1s-200px.gif";

export default function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        width={280}
        src={ripple}
        alt="Loading..."
        className="text-center mx-auto"
      />
    </div>
  );
}
