import { useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { MdOutlineWhatsapp } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Gift = () => {
  const [copyText, setCopyText] = useState(true);

  const bcaClick = () => {
    setCopyText(false);
    Swal.fire({
      title: "Copied Successfully",
      icon: "success",
      showCancelButton: false,
      showConfirmButton: false,
      showCloseButton: true,
      showClass: {
        popup: "animate__animated animate__zoomIn",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
    setTimeout(() => {
      setCopyText(true);
    }, 2000);
    navigator.clipboard.writeText("4371991535");
    return () => clearTimeout();
  };

  return (
    <>
      <div className="py-10 w-[96%] mx-auto rounded-[50px] h-full lg:w-5/6 px-4 lg:px-12 shadow-xl bg-zinc-100 my-10 shadow-[#9c8450]/40 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-3 items-center justify-center">
          <h3 className="text-3xl text-[#444337] ">
            Share <span className="alex text-5xl text-[#bfa95b]">Love</span>
          </h3>
          <p className="text-center text-[#444337] leading-relaxed">
            Doa dan restu Anda pada pernikahan kami sudah cukup sebagai hadiah,
            tetapi jika Anda ingin memberikan lebih, kami senang menerimanya dan
            itu akan melengkapi kebahagiaan kami bahkan lebih.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center">
            <img
              src="/images/bca.png"
              alt=""
              className="w-3/6 lg:4/6 mx-auto"
            />
            <p className="text-[#444337] text-md  tracking-wider">BANK BCA</p>
            <p className="text-[#444337] text-xl my-3 tracking-wider">
              Fidyan Lazuardi
            </p>
            <p className="text-[#444337] text-xl  tracking-widest">
              4371991535
            </p>
            <button
              onClick={bcaClick}
              className="flex items-center rounded gap-1 mt-5 py-2 text-zinc-100 px-6 bg-[#bfa95b]"
            >
              <AiOutlineCopy size={20} />
              <span className="text-md tracking-wider">Copy</span>
            </button>
            <a href="https://wasap.at/EeRq0M">
              <button className="flex items-center rounded gap-1 mt-5 py-2 text-zinc-100 px-6 bg-[#bfa95b]">
                <MdOutlineWhatsapp size={20} />
                <span className="text-md tracking-wider">Confirm</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gift;
