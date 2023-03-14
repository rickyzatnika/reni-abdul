import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import axios from "axios";
import AnimatedPage from "./AnimatePages";
import { GiLoveLetter, GiSelfLove } from "react-icons/gi";

const GetId = () => {
  const navigate = useNavigate();
  const [selectValue, setSelectValue] = useState("");
  const { register, handleSubmit } = useForm();
  const { uuid } = useParams();
  const [errors, setErrors] = useState(null);

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data: guest, error } = useSWR(
    `${process.env.REACT_APP_URI}/invitation/${uuid}`,
    fetcher
  );

  useEffect(() => {}, [guest]);

  const formSubmit = async () => {
    try {
      const userId = guest?.userId;
      await axios.patch(
        `${process.env.REACT_APP_URI}/invitation/status/${uuid}?userId=${userId}`,
        {
          status: selectValue,
        }
      );
      navigate(`/invitation/${guest?.unique_Code}?userId=${userId}`);
    } catch (error) {
      setErrors(error.response.msg);
    }
  };

  const handleClick = (value) => {
    setSelectValue(value);
  };

  if (error) {
    return <div>Error Loading Data ....</div>;
  }

  return (
    <>
      <div className="w-full min-h-screen px-2 lg:px-0 flex items-center justify-center relative">
        <img
          src="/images/image-1.jpg"
          alt=""
          className="absolute w-full min-h-screen -z-50 object-cover"
        />
        <div className="w-full min-h-screen bg-gradient-to-t mix-blend-overlay from-black/80 to-transparent absolute top-0 -z-40" />
        <AnimatedPage>
          <div className="w-full lg:w-3/6 overflow-hidden rounded-xl z-50 relative shadow-lg shadow-sky-200/30 bg-white/70 backdrop-blur space-y-14 flex flex-col items-center py-10 justify-between">
            <div className="absolute top-0 -left-2">
              <img src="/images/orn-1-top-right.png" alt="" width={100} />
            </div>
            <div className="absolute bottom-0 left-0">
              <img src="/images/orn-1-bottom-right.png" alt="" width={100} />
            </div>
            <div className="fixed top-0 text-teal-800/40 text-[200px] sm:text-[300px] md:text-[450] lg:text-[340px] -z-10 left-[23%] opacity-20 flex items-center justify-center ">
              <GiSelfLove />
            </div>
            <h1 className="text-md lg:text-2xl text-zinc-700 ">
              - Undangan Pernikahan -
            </h1>
            <div className="flex items-center justify-center gap-2 flex-row font-[parisienne]">
              <h3 className="text-5xl lg:text-6xl text-teal-800 ">Reni</h3>
              <span className="text-4xl lg:text-6xl text-teal-800">&</span>
              <h4 className="text-5xl lg:text-6xl text-teal-800 ">Abdul</h4>
            </div>
            <p className="text-zinc-600 text-md lg:text-lg w-full lg:w-5/6 text-center p-1 lg:p-2 rounded-md">
              Hi {guest?.name}, silahkan Buka Undangan untuk melihat detail
              acara. Jangan lupa mengisi form kehadiran dan Screenshot Qr-Code
              nya ya 😉.
              <br />
              Terima kasih.
            </p>

            <form
              className="w-fit items-center justify-center flex flex-col"
              onSubmit={handleSubmit(formSubmit)}
            >
              <input
                type="text"
                onChange={() => handleClick("Opened")}
                {...register("status", { required: true })}
                checked={selectValue === "Opened"}
                value="Opened"
                className="hidden"
              />
              {errors && (
                <div className="py-2 px-6 text-white">
                  Maaf sepertinya anda tidak diundang
                </div>
              )}
              <button
                onClick={() => handleClick("Opened")}
                type="submit"
                className="py-2 flex items-center gap-1 cursor-pointer px-5 bg-gradient-to-tr shadow-lg rounded shadow-black/20 text-zinc-200 hover:text-zinc-100 from-sky-800/80 via-teal-600/80 to-sky-800/80 hover:from-teal-700/90 hover:via-teal-700/90 hover:to-teal-500/90"
              >
                <GiLoveLetter size={30} />
                Buka Undangan
              </button>
            </form>
          </div>
        </AnimatedPage>
      </div>
    </>
  );
};

export default GetId;
