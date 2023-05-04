import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import axios from "axios";
import AnimatedPage from "./AnimatePages";
import { GiLoveLetter } from "react-icons/gi";

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
          <div className="w-full lg:w-4/6 h-full overflow-hidden rounded-xl z-50 relative shadow-lg shadow-sky-200/30 bg-white/70 backdrop-blur flex flex-col items-center py-4 justify-center ">
            <div className="absolute top-0 -left-2">
              <img src="/images/orn-1-top-right.png" alt="" width={100} />
            </div>
            <div className="absolute bottom-0 left-0">
              <img src="/images/orn-1-bottom-right.png" alt="" width={100} />
            </div>

            <h1 className="text-2xl text-emerald-900 ">Wedding Invitation</h1>
            <img
              src="/images/couples.png"
              alt=""
              className="w-full sm:w-4/6 object-contain"
            />
            <div className="flex items-center justify-center gap-2 flex-row font-[parisienne]">
              <h3 className="text-5xl lg:text-6xl text-emerald-900 ">Reni</h3>
              <span className="text-4xl lg:text-6xl text-emerald-900">&</span>
              <h4 className="text-5xl lg:text-6xl text-emerald-900 ">Abdul</h4>
            </div>
            <p className="text-zinc-800 text-lg w-full lg:w-5/6 text-center p-1 lg:p-2 px-3 rounded-md">
              - Minggu, 26 Juli 2023 -
            </p>
            <div className="text-center pt-2 leading-relaxed ">
              <p>
                Kepada Yth, <br /> Bapak/Ibu/Saudara/i
              </p>{" "}
              <p className="capitalize text-2xl py-4 font-semibold font-[parisienne] text-emerald-900">
                {guest?.name}
              </p>
            </div>

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
                className="py-2 flex items-center gap-1 cursor-pointer px-5 bg-teal-700/80 shadow-lg rounded shadow-black/20 text-zinc-200 hover:text-zinc-100 hover:bg-teal-800/80 "
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
