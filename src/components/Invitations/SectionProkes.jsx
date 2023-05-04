import React from "react";

const SectionProkes = () => {
  const images = [
    {
      id: 1,
      src: "/prokes-1.png",
    },
    {
      id: 2,
      src: "/prokes-2.png",
    },
    {
      id: 3,
      src: "/prokes-3.png",
    },
    {
      id: 4,
      src: "/prokes-4.png",
    },
    {
      id: 5,
      src: "/prokes-5.png",
    },
  ];

  return (
    <div className="relative bg-[#DAD8C0] shadow-lg  shadow-zinc-400/60 w-full  h-full flex flex-col items-center justify-center py-12">
      <div className="flex md:w-4/6 mx-auto items-center justify-between  px-4 w-full  py-14  ">
        <div>
          <h1 className="font-[Hattori] text-3xl text-[#535245] ">PROTOKOL</h1>
          <span className="alex text-4xl text-[#444337]">kesehatan</span>
        </div>
        <div className="w-24 h-[2px] bg-[#444337]" />
      </div>
      <p className="text-[#585749] text-center px-2">
        Tanpa mengurangi rasa hormat, acara ini menerapkan Protokol Kesehatan,
        sesuai dengan peraturan & rekomendasi pemerintah.
      </p>
      <div className=" grid grid-cols-2 lg:grid-cols-3 p-12 gap-2 items-center justify-center">
        {images.map((image) => (
          <div key={image.id} className=" w-full h-full col-span-1 ">
            <img
              src={image.src}
              alt=""
              className="w-[120px] lg:w-[150px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionProkes;
