import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { Link } from "react-router-dom";

const SectionOne = () => {
  return (
    <>
      <div className="w-full h-full relative overflow-hidden bg-gradient-to-tr from-emerald-100/20 via-teal-200/20 to-emerald-100/80">
        <div className="absolute hidden lg:block top-0 -left-10 z-10">
          <img
            src="/orn-top-right.png"
            alt=""
            className="w-[250px] object-cover"
          />
        </div>
        <div className="absolute -top-10 right-0 z-10">
          <img
            src="/orn-top-left.png"
            alt=""
            className="w-[250px] object-cover"
          />
        </div>
        <div className="w-full relative z-50 text-center py-14">
          <h3 className=" font-[parisienne] text-4xl text-emerald-800 lg:text-6xl">
            Mempelai
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center pt-20 lg:pt-32 gap-20 lg:gap-0 px-10">
            <div className="col-span-1 lg:col-span-4">
              <div className="flex flex-col">
                <img
                  src="/images/womans.png"
                  alt=""
                  className=" w-full lg:w-[250px] mx-auto object-cover"
                />
                <div className="w-full flex flex-col items-center gap-2 pt-2">
                  <h3 className="font-[parisienne] text-3xl font-medium lg:font-semibold text-emerald-900">
                    Reni Anggraeni
                  </h3>
                  <p className="text-zinc-700">
                    Putra dari Bapak Dedi Kurniawan dan Ibu Dian Anggraeni
                  </p>
                  <Link to="https://instagram.com">
                    <IoLogoInstagram size={28} className="text-pink-800" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-4 text-emerald-900/90 font-[parisienne] text-7xl">
              &
            </div>
            <div className="col-span-1 lg:col-span-4 ">
              <div className="w-full flex flex-col items-center justify-center">
                <img
                  src="/images/mans.png"
                  alt=""
                  className=" w-full lg:w-[250px] mx-auto object-cover"
                />
                <div className="w-full flex flex-col items-center gap-2 pt-2">
                  <h3 className=" font-[parisienne] text-3xl font-medium lg:font-semibold text-emerald-900">
                    Muhammad Abdul Dhani
                  </h3>
                  <p className="text-zinc-700">
                    Putra dari Bapak H. Asep Solihin dan Ibu Hj. Nur Hayati
                  </p>
                  <Link to="https://instagram.com">
                    <IoLogoInstagram size={28} className="text-pink-800" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
