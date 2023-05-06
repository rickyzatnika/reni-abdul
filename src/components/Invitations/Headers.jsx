import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-evenly relative">
        <div className="overflow-hidden">
          <img
            src="/images/header.png"
            alt=""
            className="w-full h-full object-cover object-center absolute top-0 left-0 right-0 -z-50"
          />
        </div>
        <div className="w-full min-h-screen absolute top-0 left-0 -z-40 bg-gradient-to-b from-black/50 to-black/60 mix-blend-overlay" />
        <h1 className="text-[#a1873e] relative z-50 rounded-full bg-zinc-200/60 py-1 px-5  backdrop-blur w-fit text-center text-2xl">
          The <span className="alex text-3xl tracking-widest">wedding</span> of
        </h1>
        <motion.div
          initial={{ scale: 4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 3, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="w-fit alex text-[#b69c63] relative border-t-2 border-b-2 py-2 text-center flex flex-col gap-4 items-center"
        >
          <h3 className="text-4xl lg:text-5xl  ">Fidyan Lazuardi</h3>
          <span className=" text-5xl font-[parisienne] lg:text-5xl ">&</span>
          <h2 className="text-4xl lg:text-5xl ">Fitri Nurramadhanty</h2>
        </motion.div>
        <span className="text-zinc-300 tracking-widest text-xl">
          Minggu, 14 Mei 2023
        </span>
        <div className="flex items-center flex-col gap-2">
          <div className="mouse-icon">
            <div className="wheel"></div>
          </div>
          <span className="text-zinc-200">Scroll Down</span>
        </div>
      </div>
    </>
  );
};

export default Header;
