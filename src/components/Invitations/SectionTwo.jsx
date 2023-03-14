import React from "react";
import { Link } from "react-router-dom";

const SectionTwo = () => {
  return (
    <>
      <div className="w-full h-full relative overflow-hidden">
        <div className="absolute -top-2 left-0 right-0 w-full -z-40">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#017e69f8"
              fillOpacity="0.6"
              d="M0,256L40,245.3C80,235,160,213,240,186.7C320,160,400,128,480,117.3C560,107,640,117,720,133.3C800,149,880,171,960,186.7C1040,203,1120,213,1200,208C1280,203,1360,181,1400,170.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="absolute top-0 left-0 right-0 w-full -z-50">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#00ac78"
              fillOpacity="0.3"
              d="M0,256L40,245.3C80,235,160,213,240,186.7C320,160,400,128,480,117.3C560,107,640,117,720,133.3C800,149,880,171,960,186.7C1040,203,1120,213,1200,208C1280,203,1360,181,1400,170.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="text-center py-12 lg:py-10">
          <h3 className="font-[parisienne] py-2 lg:py-0 text-2xl sm:text-4xl md:text-5xl lg:text-4xl text-emerald-800 lg:text-emerald-100">
            Waktu, Acara dan Tempat
          </h3>
        </div>
        <div className="w-full h-full pt-0 lg:pt-20 flex flex-col items-center justify-evenly">
          <div className="text-center leading-relaxed">
            <i className="text-md lg:text-2xl text-zinc-200 dark:text-zinc-700">
              Sabtu,
            </i>
            <h3 className="font-[parisienne] text-4xl lg:text-5xl text-transparent bg-gradient-to-tr from-emerald-900 via-emerald-600/80 to-emerald-900 bg-clip-text py-2">
              22 Juni 2023
            </h3>
          </div>
          <div className="w-full flex text-center items-center justify-center gap-5 lg:justify-around pt-8">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-md lg:text-xl text-zinc-200 dark:text-zinc-700">
                Akad
              </h3>
              <img src="/ring.png" alt="" width={90} />
              <p className="text-sm text-zinc-200 dark:text-zinc-500">
                Pukul 07.20 - 08.30 WIB
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <h3 className="text-md lg:text-xl text-zinc-700">Resepsi</h3>
              <img src="/resepsi.png" alt="" width={100} />
              <p className="text-sm text-zinc-200 dark:text-zinc-500">
                Pukul 09.30 - 14.30 WIB
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 items-center justify-center py-14">
          <h3 className="font-[parisienne] text-3xl text-emerald-800">
            Lokasi :
          </h3>
          <div className="text-center leading-relaxed">
            <h4 className="text-xl font-semibold text-zinc-200 dark:text-zinc-700">
              3BR Garden Ricefield Villa
            </h4>
            <p className="text-zinc-200 dark:text-zinc-500">
              Jl. Cijengkol No.118, Wangunsari, Kec. Lembang, Kabupaten Bandung
              Barat, Jawa Barat 40391
            </p>
          </div>
          <Link
            to="https://goo.gl/maps/L1ArK2ciWRhc3Zzd8"
            target="_blank"
            className="py-2 px-5 bg-teal-700 text-teal-50 shadow-lg shadow-teal-100 rounded"
          >
            Open Maps
          </Link>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
