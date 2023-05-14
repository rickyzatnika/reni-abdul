import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import axios from "axios";
import AnimatedPage from "./AnimatePages";
import { GiLoveLetter } from "react-icons/gi";
import Background from "../assets/backgrounds.png";
import Cover from "../assets/cover.png";

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

  console.log(guest);

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
          src={Background}
          alt=""
          className="absolute w-full h-full -z-50 object-cover"
        />
        <div className="w-full min-h-screen bg-gradient-to-t mix-blend-overlay from-black/80 to-transparent absolute top-0 -z-40" />
        <AnimatedPage>
          <div className="w-full lg:w-3/6 h-full overflow-hidden rounded-xl z-50 relative shadow-lg shadow-zinc-500 bg-[#969167]/10  flex flex-col items-center gap-4 py-4 justify-center ">
            <h1 className="text-xl py-1 tracking-wider rounded-xl w-fit px-5 text-center font-semibold bg-zinc-400/20 backdrop-blur  text-[#4e3a03] ">
              Wedding Invitation
            </h1>
            <img src={Cover} alt="" className="w-4/6 sm:w-2/6 object-cover" />
            <div className="flex items-start mb-5 text-[#9c8450] justify-center gap-3 flex-row alex">
              <div className="text-center">
                <h3 className="text-4xl lg:text-5xl  ">Fidyan </h3>
                <span className="font-sans italic text-zinc-300 text-[19px]">
                  (pidi)
                </span>
              </div>
              <span className="text-4xl lg:text-5xl ">&</span>
              <div className="text-center">
                <h3 className="text-4xl lg:text-5xl  ">Fitri </h3>
                <span className="font-sans italic text-zinc-300 text-[19px]">
                  (fitri)
                </span>
              </div>
            </div>
            <p className="text-zinc-300 text-lg w-full lg:w-5/6 text-center p-1 lg:p-2 px-3 rounded-md">
              - Minggu, 14 Mei 2023 -
            </p>
            <div className="text-center pt-2 leading-relaxed ">
              <p className="text-zinc-300">
                Kepada Yth, <br /> Bapak/Ibu/Saudara/i
              </p>{" "}
              <p className="capitalize tracking-wide text-xl py-4 font-sans text-[#dddddd]">
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

              {!guest?.status ? (
                <>
                  <button
                    onClick={() => handleClick("Opened")}
                    type="submit"
                    className="py-2 flex items-center gap-1 cursor-pointer px-5 shadow-lg rounded shadow-black/20 text-zinc-200 hover:text-zinc-100 bg-[#9c8450]  hover:bg-[#867041] "
                  >
                    <GiLoveLetter size={30} />
                    Buka Undangan
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="py-2 flex items-center gap-1 cursor-pointer px-5 shadow-lg rounded shadow-black/20 text-zinc-200 hover:text-zinc-100 bg-[#9c8450]  hover:bg-[#867041] "
                    onClick={() => handleClick(guest?.status)}
                    type="submit"
                  >
                    <GiLoveLetter size={30} />
                    Buka Undangan
                  </button>
                </>
              )}
            </form>
          </div>
        </AnimatedPage>
      </div>
    </>
  );
};

export default GetId;
