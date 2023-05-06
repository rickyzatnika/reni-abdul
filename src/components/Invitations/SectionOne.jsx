import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SectionOne = () => {
  return (
    <>
      <div className="w-full h-full  relative overflow-hidden bg-gradient-to-t from-[#eeeeea]  to-[#d4c787]">
        <div className="w-full relative z-50 text-center py-14 overflow-hidden">
          <div className="w-full flex flex-col items-center justify-center">
            <motion.img
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              src="/images/bismilah.png"
              alt=""
              className="w-3/6 mx-auto mb-3 sm:w-1/6 object-contain"
            />

            <motion.p
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[#977a39] text-md px-2"
            >
              Assalamu'alaikum Warahmatullahi Wabarakatuh <br />
              Dengan memohon Ridho serta Rahmat Allah SWT, kami bermaksud
              menyelenggarakan resepsi pernikahan putra-putri kami
            </motion.p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center pt-20 lg:pt-32 gap-10 lg:gap-0 px-10">
            <div className="col-span-1 lg:col-span-4 ">
              <div className="w-full flex flex-col items-center justify-center">
                <motion.img
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  src="/images/man.png"
                  alt=""
                  className=" w-5/6 lg:w-[250px] rounded-tl-[150px] rounded-br-[150px]  mx-auto object-cover"
                />
                <motion.div
                  initial={{ y: 30 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                  className="w-full flex flex-col items-center gap-2 pt-2"
                >
                  <h3 className=" alex text-3xl font-medium  text-[#b69c63]">
                    Fidyan Lazuardi
                  </h3>
                  <div className="text-zinc-700 leading-relaxed">
                    <p className="font-semibold">
                      Putra Ke 6 dari 10 Bersaudara :
                    </p>
                    <p>Bpk Drs. Walid Syaikun</p> <span>&</span>{" "}
                    <p>Ibu Ade Nur Hasanah</p>
                  </div>
                  <Link to="https://instagram.com">
                    <IoLogoInstagram size={28} className="text-pink-800" />
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-4 text-[#b69c63] font-[parisienne] text-7xl">
              &
            </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="flex flex-col">
                <motion.img
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  src="/images/girl.png"
                  alt=""
                  className=" w-5/6 lg:w-[250px] rounded-tr-[150px] rounded-bl-[150px]  mx-auto object-cover"
                />
                <motion.div
                  initial={{ y: 30 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                  className="w-full flex flex-col items-center gap-2 pt-2"
                >
                  <h3 className=" alex text-3xl font-medium  text-[#b69c63]">
                    Fitri Nurramadhanty
                  </h3>
                  <div className="text-zinc-700 leading-relaxed">
                    <p className="font-semibold">
                      Putra Ke 2 dari 5 Bersaudara :
                    </p>
                    <p>Bpk Nurpalah</p> <span>&</span> <p>Ibu Reni Anngraeni</p>
                  </div>
                  <Link to="https://instagram.com">
                    <IoLogoInstagram size={28} className="text-pink-800" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
