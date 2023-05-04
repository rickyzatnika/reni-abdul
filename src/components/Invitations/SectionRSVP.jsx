/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const SectionRSVP = ({ guest }) => {
  const { register, handleSubmit } = useForm();
  const [selectedValue, setSelectedValue] = useState("");
  const [qrCode, setQrCode] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const { uuid } = useParams();

  // Update Status
  const attendForm = async ({ status, present }) => {
    try {
      const userId = guest.userId;
      await axios.patch(
        `${process.env.REACT_APP_URI}/invitation/status/${uuid}?userId=${userId}`,
        {
          present: present,
          status: selectedValue,
        }
      );

      if (!status && selectedValue === "not Going") {
        Swal.fire({
          text: "Terima kasih atas partisipasinya..",
          confirmButtonColor: "teal",
        });
      } else {
        setTimeout(() => {
          setModal(true);
        }, 5000);
        setLoading(true);
        return () => clearTimeout(setTimeout);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = (value) => {
    setSelectedValue(value);
  };

  // Get QrCode
  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_URI}/invitation/validate/${guest?.unique_Code}`
        );

        setQrCode(data.qrCode);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQRCode();
  });

  const close = () => {
    setModal(false);
    setLoading(false);
  };

  return (
    <>
      {modal && (
        <div className="w-full mx-auto lg:w-4/6 min-h-screen bg-white z-[999999999] fixed top-0 left-0 right-0 flex flex-col justify-center items-center ">
          <div className="w-full h-full absolute z-20 top-0 left-0 right-0 ">
            <img
              src="/images/bg-qr-code.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="antialiased w-full relative z-40 h-full gap-12 flex flex-col items-center justify-between ">
            <div className="w-full relative h-full flex flex-col items-center justify-evenly leading-loose text-center">
              <div className="pb-5 py-10 flex w-full flex-col  gap-2 items-center">
                <p className="font-[Hattori] text-zinc-700 tracking-widest">
                  The Wedding Of
                </p>
                <p className="font-[parisienne] text-4xl font-semibold text-emerald-800">
                  Reni & Abdul
                </p>
                <span>Minggu, 23 Juli 2023</span>
                <div className="w-full text-center">
                  <img
                    src={qrCode}
                    alt="qr-code"
                    className="w-3/6 lg:w-2/6 mx-auto"
                  />

                  <div className="flex flex-col items-center pt-3">
                    <p className="text-zinc-900/80 antialiased text-lg font-[Hattori] ">
                      SHERATON BANDUNG HOTEL & TOWERS
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="text-md underline tracking-wider"
              onClick={() => close()}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
      <div className="h-full flex flex-col px-4 bg-white shadow-xl shadow-emerald-900/30 mt-8 lg:mt-20 w-5/6 mx-auto overflow-hidden items-center lg:items-center py-10 lg:py-20 justify-center relative">
        <div className="absolute -top-6 right-0">
          <img
            src="/orn-top-left.png"
            alt=""
            className="w-[180px] lg:w-[250px]"
          />
        </div>
        <div className="absolute opacity-60 -top-6 -left-4">
          <img
            src="/orn-top-right.png"
            alt=""
            className="w-[180px] lg:w-[250px]"
          />
        </div>

        <div className="relative pt-4 lg:pt-14 w-full  mx-auto px-2">
          <div className="relative w-full lg:w-5/6 mx-auto text-teal-800 pb-6">
            <h3 className="text-2xl lg:text-3xl">Konfirmasi</h3>{" "}
            <span className="alex text-4xl">kehadiran</span>
            <div className="w-24 h-[2px] absolute top-4 right-8 bg-emerald-800 " />
          </div>
          <form
            onSubmit={handleSubmit(attendForm)}
            className="w-full rounded z-50 h-auto px-2 lg:px-20 flex flex-col items-start justify-between gap-3"
          >
            <div className="w-full leading-relaxed mb-3 px-3">
              <div className="flex flex-col flex-nowrap gap-2">
                <div className="flex flex-nowrap gap-1">
                  <input
                    type="radio"
                    value="going"
                    {...register("status", { required: true })}
                    checked={selectedValue === "going"}
                    onChange={() => handleClick("going")}
                  />
                  <label
                    className="text-zinc-700 text-lg lg:text-xl"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick("going");
                    }}
                  >
                    Ya, saya akan hadir
                  </label>
                </div>
                <div className="flex flex-nowrap gap-1">
                  <input
                    type="radio"
                    value="not Going"
                    {...register("status", { required: true })}
                    checked={selectedValue === "not Going"}
                    onChange={() => handleClick("not Going")}
                  />
                  <label
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick("not Going");
                    }}
                    className="text-zinc-700 text-lg lg:text-xl"
                  >
                    Maaf, tidak bisa hadir
                  </label>
                </div>
              </div>
            </div>
            {selectedValue === "going" && (
              <div className="mb-3 w-full">
                <h3 className="mb-2 text-md text-zinc-700">
                  Berapa orang yang akan hadir :
                </h3>
                <select
                  className="w-full py-3 px-2 border-none outline-none rounded focus:outline-teal-700"
                  {...register("present", { required: true })}
                >
                  <option value="1">1 Orang</option>
                  <option value="2">2 Orang</option>
                  <option value="3">3 Orang</option>
                </select>
              </div>
            )}

            {selectedValue && (
              <button
                className="py-3 px-7 w-full text-white/80 bg-gradient-to-tr shadow-lg rounded shadow-black/20 text-zinc-200 hover:text-zinc-100 from-sky-800/80 via-teal-600/80 to-sky-800/80 hover:from-teal-700/90 hover:via-teal-700/90 hover:to-teal-500/90 "
                type="submit"
              >
                {loading ? <span>tunggu sebentar...</span> : <span>Kirim</span>}
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default SectionRSVP;
