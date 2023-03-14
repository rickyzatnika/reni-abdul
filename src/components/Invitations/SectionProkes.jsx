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
    <div className="w-full pt-10">
      <div className="mx-auto bg-zinc-100 shadow-xl shadow-zinc-400/30 w-full lg:w-4/6 h-full flex flex-col items-center justify-between">
        <div className="text-md lg:text-lg w-full shadow-lg py-3 text-zinc-100 bg-orange-600/80 text-center ">
          <h1>MOHON UNTUK TETAP MEMATUHI</h1>
          <h2 className="font-[Hattori]">PROTOKOL KESEHATAN</h2>
        </div>
        <div className=" grid grid-cols-2 lg:grid-cols-3 p-12 gap-2 items-center justify-center">
          {images.map((image) => (
            <div key={image.id} className=" w-full h-full col-span-1 ">
              <img
                src={image.src}
                alt=""
                className="w-[200px] lg:w-[150px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionProkes;
