import React, { useEffect, useState } from "react";
import Timer from "./Timer";

const Stopwatch = () => {
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {

    setInterval(() => {
      setTotalTime((prev) => prev + 1);
    }, 1000);
    
  }, []);

  return (
    <>
      <Timer time={totalTime} />
    </>
  );
};

export default Stopwatch;
