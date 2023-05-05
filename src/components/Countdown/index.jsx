import React, { useState, useEffect, useRef } from "react";

export default function CountDownTimer({ ...props }) {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  const intervalRef = useRef();

  useEffect(() => {
    const startTimer = () => {
      const countdownDate = new Date("May 14 2023 00:00:00").getTime();
      intervalRef.current = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
          clearInterval(intervalRef.current);
        } else {
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      }, 1000);
    };

    startTimer();
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <div className="w-full relative px-2 h-full py-10 flex flex-col item-center justify-center gap-2 lg:gap-4">
        <div className="w-full gap-4 flex flex-col lg:flex-row items-center justify-center h-full">
          <div className="flex gap-4 flex-row">
            <div className="text-center rounded-lg flex flex-col pb-2 shadow-lg bg-gradient-to-tr w-28 h-28 from-zinc-50 to-zinc-200 overflow-hidden  clip">
              {/* Timer Days */}
              <div className=" text-3xl sm:text-5xl m-auto font-bold flex items-center justify-center">
                <span className="bg-gradient-to-b from-[#727251] via-zinc-400 to-[#727251] bg-clip-text text-transparent">
                  {timerDays}
                </span>
              </div>
              <small className="w-full  text-center text-zinc-900/80 font-semibold aboreto text-md sm:text-lg">
                Hari
              </small>
            </div>
            {/* Timer Hours */}
            <div className="text-center rounded-lg flex flex-col pb-2 shadow-lg  bg-gradient-to-tr w-28  h-28  from-zinc-50 to-zinc-200 overflow-hidden  clip">
              <div className=" text-3xl sm:text-5xl m-auto font-bold flex items-center justify-center">
                <span className="bg-gradient-to-b from-[#727251] via-zinc-400 to-[#727251]  bg-clip-text text-transparent">
                  {timerHours}
                </span>
              </div>
              <small className="w-full  text-center text-zinc-900/80 font-semibold aboreto text-md sm:text-lg">
                Jam
              </small>
            </div>
          </div>
          <div className="flex gap-4">
            {/* Timer Minutes */}
            <div className="text-center rounded-lg flex flex-col pb-2 shadow-lg  bg-gradient-to-tr w-28  h-28  from-zinc-50 to-zinc-200 overflow-hidden  clip">
              <div className=" text-3xl sm:text-5xl m-auto font-bold flex items-center justify-center">
                <span className="bg-gradient-to-b from-[#727251] via-zinc-400 to-[#727251]  bg-clip-text text-transparent">
                  {timerMinutes}
                </span>
              </div>
              <small className="w-full  text-center text-zinc-900/80 font-semibold aboreto text-md sm:text-lg">
                Menit
              </small>
            </div>
            {/* Timer Second */}
            <div className="text-center rounded-lg flex flex-col pb-2 shadow-lg  bg-gradient-to-tr w-28  h-28  from-zinc-50 to-zinc-200 overflow-hidden  clip">
              <div className=" text-3xl sm:text-5xl m-auto font-bold flex items-center justify-center">
                <span className="bg-gradient-to-b from-[#727251] via-zinc-400 to-[#727251]  bg-clip-text text-transparent">
                  {timerSeconds}
                </span>
              </div>
              <small className="w-full  text-center text-zinc-900/80 font-semibold aboreto text-md sm:text-lg">
                Detik
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
