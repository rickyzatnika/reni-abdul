import React from "react";
import { motion } from "framer-motion";

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
    <div className="relative overflow-hidden bg-[#DAD8C0] shadow-xl  shadow-[#9c8450]/40 w-full  h-full flex flex-col items-center justify-center py-12">
      <div className="flex md:w-4/6 mx-auto items-center justify-between  px-4 w-full  py-6  ">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <h1 className="font-[Hattori] text-3xl text-[#bfa95b]  ">PROTOKOL</h1>
          <span className="alex text-4xl text-[#444337]">kesehatan</span>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="w-24 h-[2px] bg-[#bfa95b]"
        />
      </div>
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="text-[#444337] text-center px-2"
      >
        Tanpa mengurangi rasa hormat, acara ini menerapkan Protokol Kesehatan,
        sesuai dengan peraturan & rekomendasi pemerintah.
      </motion.p>
      <div className=" grid grid-cols-2 lg:grid-cols-3 p-12 gap-2 items-center justify-center">
        {images.map((image) => (
          <div key={image.id} className=" w-full h-full col-span-1 ">
            <motion.img
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
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
