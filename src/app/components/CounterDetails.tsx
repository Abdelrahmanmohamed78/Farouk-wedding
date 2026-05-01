"use client";
import { useEffect, useState } from "react";

function CounterDetails({ weddingDate }: {weddingDate: Date}) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    function countDown() {
      const dateUntillWedding = +new Date(weddingDate).getTime() - +new Date();
      setSeconds(Math.floor((dateUntillWedding % (1000 * 60)) / 1000));
      setMinutes(
        Math.floor((dateUntillWedding % (1000 * 60 * 60)) / (1000 * 60)),
      );
      setHours(
        Math.floor(
          (dateUntillWedding % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
      );
      setDays(Math.floor(dateUntillWedding / (1000 * 60 * 60 * 24)));
    }
    const interval = setInterval(() => {
      countDown();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [weddingDate]);
  return (
    <div className="counter-details flex justify-center text-4xl gap-10 text-[#835D2F] my-5">
      <p className="flex flex-col gap-2">
        {days}{" "}
        <span className="uppercase italic text-[12px] font-semibold font-mono">
          days
        </span>
      </p>
      <p className="flex flex-col gap-2">
        {hours}{" "}
        <span className="uppercase italic text-[12px] font-semibold font-mono">
          hours
        </span>
      </p>
      <p className="flex flex-col gap-2">
        {minutes}{" "}
        <span className="uppercase italic text-[12px] font-semibold font-mono">
          minutes
        </span>
      </p>
      <p className="flex flex-col gap-2">
        {seconds}{" "}
        <span className="uppercase italic text-[12px] font-semibold font-mono">
          secs
        </span>
      </p>
    </div>
  );
}

export default CounterDetails;
