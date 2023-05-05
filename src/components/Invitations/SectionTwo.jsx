import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SectionTwo = () => {
  return (
    <>
      <div className="w-full min-h-screen py-4 pb-10 lg:py-10 lg:h-full bg-gradient-to-t from-[#b6b281] relative ">
        <div className="absolute -top-1 left-0 right-0 w-full z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#eeeeea"
              fillOpacity="1"
              d="M0,256L40,245.3C80,235,160,213,240,186.7C320,160,400,128,480,117.3C560,107,640,117,720,133.3C800,149,880,171,960,186.7C1040,203,1120,213,1200,208C1280,203,1360,181,1400,170.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
        </div>

        <div className="relative z-40 overflow-hidden flex items-center justify-between w-5/6 lg:w-4/6 mx-auto pt-12 lg:pt-10">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <h3 className="py-2 lg:py-0 text-3xl sm:text-4xl md:text-6xl text-[#727251]">
              Wedding
            </h3>
            <span className="alex text-5xl text-[#727251]">Event</span>
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-28 lg:w-40  h-[2px] lg:h-[4px] bg-[#727251] "
          />
        </div>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="w-full relative z-40 lg:w-3/6 mx-auto px-4 text-center text-[#5a5a40] py-4 leading-relaxed"
        >
          Dengan segala kerendahan hati kami bermaksud ingin mengundang
          Bapak/Ibu/Saudara/i sekalian guna hadir didalam acara pernikahan kami
          yang akan diselenggarakan pada :
        </motion.p>
        <div className="w-full h-full pt-2 lg:pt-20 flex flex-col items-center justify-evenly">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-full  py-4 flex flex-col text-center items-center justify-center gap-5 lg:justify-around pt-8"
          >
            <div className="w-full flex gap-4 flex-col items-center justify-center">
              <h3 className="text-3xl text-[#444337] ">
                Akad <span className="alex text-4xl">Nikah</span>
              </h3>
              <div className="flex text-[#727251] text-xl items-center  gap-4">
                <h3>Minggu</h3>
                <span className="alex text-4xl border-r border-l px-4">
                  14
                </span>{" "}
                <h3>Mei</h3>
              </div>
              <p className="text-md text-[#444337] ">Pukul 09.00 - selesai</p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="flex flex-col gap-4 items-center justify-center py-12"
        >
          <h3 className="text-3xl text-[#444337]">Resepsi :</h3>
          <div className="flex text-[#727251] text-xl items-center  gap-4">
            <h3>Minggu</h3>
            <span className="alex text-4xl border-r border-l px-4">
              14
            </span>{" "}
            <h3>Mei</h3>
          </div>
          <p className="text-md text-[#444337] ">Pukul 11.00 - selesai</p>
        </motion.div>
        <div className="text-center px-2 flex gap-3 flex-col items-center justify-center leading-relaxed">
          <span className="text-[#444337]">Lokasi :</span>
          <p className="text-md font-semibold text-[#444337]">
            Villa Bayu Lembang <br />
            <span className="italic text-md">
              (Komp. Ciputri Wangunharja Lembang KBB)
            </span>
          </p>

          <Link
            to="https://goo.gl/maps/LZc5fUkvR5isSQ1G6"
            target="_blank"
            className="py-2 px-5 my-3 bg-[#88835e] text-teal-50  rounded"
          >
            Buka di Google Maps
          </Link>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
