import { motion } from "framer-motion";
import Backsound from "./Backsound";
import Bg_Header from "../../assets/images/header.png";
import { Parallax } from "react-scroll-parallax";

const Header = () => {
  return (
    <>
      <Backsound />

      <motion.div
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 3, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
        className="fixed w-full h-full -z-50 top-0 left-0 right-0"
      >
        <img
          src={Bg_Header}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
      <Parallax speed={-20}>
        <div className="w-full min-h-screen overflow-hidden flex flex-col items-center justify-evenly relative">
          <div className="w-full min-h-screen absolute top-0 left-0 -z-40 bg-gradient-to-t from-black/10 to-black/80 mix-blend-overlay" />
          <h1 className="text-[#4d3b07] relative  rounded-full bg-zinc-100/80 py-1 px-5  backdrop-blur w-fit text-center text-xl">
            The <span className="alex text-3xl tracking-widest">wedding</span>{" "}
            Of
          </h1>
          <motion.div
            initial={{ scale: 4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 3, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="w-fit alex text-[#b48f3f] relative border-t-2 border-b-2 py-2 text-center flex flex-col gap-0 items-center"
          >
            <div>
              <h3 className="text-4xl lg:text-5xl text-[#b48f3f] ">
                Fidyan Lazuardi
              </h3>
              <span className="italic text-xl font-sans text-zinc-300">
                ( Pidi )
              </span>
            </div>
            <span className=" text-6xl font-[parisienne] lg:text-5xl ">&</span>
            <div>
              <span className="italic text-xl font-sans text-zinc-300">
                ( Fitri )
              </span>
              <h2 className="text-4xl lg:text-5xl ">Fitri Nurramadhanty</h2>
            </div>
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
      </Parallax>
    </>
  );
};

export default Header;
