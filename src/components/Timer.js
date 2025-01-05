import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(60);
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => setTimeout(timer);
    }
  }, [time]);
  return <div>{time}</div>;
};

export default Timer;
