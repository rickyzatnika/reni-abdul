import React from "react";
import CountDownTimer from "../Countdown";
import { AddToCalendarButton } from "add-to-calendar-button-react";

const SectionThree = () => {
  return (
    <div className="w-full h-full overflow-hidden relative flex mt-12 lg:mt-24 flex-col items-center justify-between py-8">
      <div className="absolute top-0 left-0 right-0 -z-50">
        <img src="/wood.jpg" alt="" className="w-full h-[520px] lg:h-[420px]" />
      </div>
      <div className="absolute -top-1 -left-4 -z-40">
        <img
          src="/images/orn-1-top-right.png"
          alt=""
          className="w-[150px] lg:w-[250px] object-cover object-center"
        />
      </div>
      <div className="text-center text-3xl mix-blend-overlay lg:text-5xl p-1 text-transparent bg-black/60 font-bold bg-clip-text">
        <h3 className="font-[parisienne]">Save The Date</h3>
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
