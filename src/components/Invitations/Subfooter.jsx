import React from "react";
import OrnR from "../../assets/orn-top-right.png";
import OrnL from "../../assets/orn-top-left.png";

const Subfooter = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-center justify-center gap-2 lg:gap-8 h-full py-16 bg-zinc-100">
      <div className="absolute top-0 left-0">
        <img src={OrnR} alt="" className="w-[120px] lg:w-[180px]" />
      </div>
      <div className="absolute -top-8 right-0">
        <img src={OrnL} alt="" className="w-[150px] lg:w-[280px]" />
      </div>
      <div className="text-center w-4/6 lg:w-3/6 mx-auto space-y-3">
        <i className="text-md lg:text-lg text-zinc-500">
          "Dan nikahkanlah orang-orang yang masih membujang di antara kamu, dan
          juga orang-orang yang layak (menikah) dari hamba-hamba sahayamu yang
          laki-laki dan perempuan. Jika mereka miskin, Allah akan memberi
          kemampuan kepada mereka dengan karunia-Nya."
        </i>
        <p className="text-md lg:text-lg text-zinc-700">QS. An-Nur Ayat 32</p>
      </div>
    </div>
  );
};

export default Subfooter;
