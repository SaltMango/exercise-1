import React, { useEffect, useState } from "react";
import "./App.css";

const app:React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    let timer: NodeJS.Timeout = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(timer);
    };
  });

  let time:string = date.toLocaleString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "numeric",
    second:  "numeric",
  });
  return (
    <div className="container">
      <h1 className="time">{time}</h1>
    </div>
  );
};

export default app;
