import { useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { MdOutlineWhatsapp } from "react-icons/md";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import BCA from "../../assets/images/bca.png";

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
    <div className="w-full h-full bg-white py-10 ">
      <div className=" w-[96%] mx-auto py-8 rounded-[50px] h-full lg:w-5/6 px-4 lg:px-12 shadow-xl bg-zinc-100 my-10 shadow-[#9c8450]/40 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-3 items-center justify-center">
          <motion.h3
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl text-[#444337] "
          >
            Share <span className="alex text-5xl text-[#bfa95b]">Love</span>
          </motion.h3>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-[#444337] leading-relaxed"
          >
            Doa dan restu Anda pada pernikahan kami sudah cukup sebagai hadiah,
            tetapi jika Anda ingin memberikan lebih, kami senang menerimanya dan
            itu akan melengkapi kebahagiaan kami bahkan lebih.
          </motion.p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center">
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              src={BCA}
              alt=""
              className="w-3/6 lg:4/6 mx-auto"
            />
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-[#444337] text-md  tracking-wider"
            >
              BANK BCA
            </motion.p>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-[#444337] text-xl my-3 tracking-wider"
            >
              Fidyan Lazuardi
            </motion.p>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#444337] text-xl  tracking-widest"
            >
              4371991535
            </motion.p>
            <motion.button
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onClick={bcaClick}
              className="flex items-center rounded gap-1 mt-5 py-2 text-zinc-100 px-6 bg-[#bfa95b]"
            >
              <AiOutlineCopy size={20} />
              <span className="text-md tracking-wider">Copy</span>
            </motion.button>
            <motion.a
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              href="https://wasap.at/EeRq0M"
            >
              <button className="flex items-center rounded gap-1 mt-5 py-2 text-zinc-100 px-6 bg-[#bfa95b]">
                <MdOutlineWhatsapp size={20} />
                <span className="text-md tracking-wider">Confirm</span>
              </button>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
