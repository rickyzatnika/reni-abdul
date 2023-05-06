import React from "react";
import CountDownTimer from "../Countdown";
import { AddToCalendarButton } from "add-to-calendar-button-react";

const SectionThree = () => {
  return (
    <div className="w-full h-full py-10 overflow-hidden relative flex flex-col items-center justify-between ">
      <div className="absolute top-0 left-0 right-0 -z-50">
        <img src="/wood.png" alt="" className="w-full h-[580px] lg:h-[480px]" />
      </div>

      <div className="mix-blend-multiply text-4xl p-1 text-transparent  bg-black/60  bg-clip-text">
        <h3 className="alex font-semibold tracking-widest">Add to Callendar</h3>
      </div>
      <CountDownTimer />
      <AddToCalendarButton
        name="The Wedding Of Fidyan & Fitri"
        options="'Google'"
        location="Perumahan Taman Ciputri Indah, Wangunharja, Lembang, West Bandung Regency, West Java 40391"
        startDate="2023-5-14"
        startTime="09:00"
        endTime="15:00"
        buttonStyle="date"
        timeZone="Asia/Jakarta"
        label=" add to calendar"
        trigger="click"
      ></AddToCalendarButton>
    </div>
  );
};

export default SectionThree;
