import React from "react";
import CountDownTimer from "../Countdown";
import { AddToCalendarButton } from "add-to-calendar-button-react";

const SectionThree = () => {
  return (
    <div className="w-full h-full py-10 overflow-hidden relative flex flex-col items-center justify-between ">
      <div className="absolute top-0 left-0 right-0 -z-50">
        <img src="/wood.jpg" alt="" className="w-full h-[580px] lg:h-[480px]" />
      </div>

      <div className="mix-blend-overlay text-5xl p-1 text-transparent  bg-black/70  bg-clip-text">
        <h3 className="font-[parisienne] font-semibold ">Save The Date</h3>
      </div>
      <CountDownTimer />
      <AddToCalendarButton
        name="The Wedding Of Reni & Abdul"
        options="'Google'"
        location="Jl. Cijengkol No.118, Wangunsari, Kec. Lembang, Kabupaten Bandung
              Barat, Jawa Barat 40391"
        startDate="2023-6-22"
        startTime="09:30"
        endTime="14:20"
        buttonStyle="date"
        timeZone="Asia/Jakarta"
        label=" add to calendar"
        trigger="click"
      ></AddToCalendarButton>
    </div>
  );
};

export default SectionThree;
