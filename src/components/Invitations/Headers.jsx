import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-evenly relative">
        <div className="overflow-hidden">
          <img
            src="/images/image-1.jpg"
            alt=""
            className="w-full min-h-screen object-cover object-center absolute top-0 left-0 right-0 -z-50"
          />
        </div>
        <div className="w-full min-h-screen absolute top-0 left-0 -z-40 bg-gradient-to-b from-black/40 to-black/60 mix-blend-overlay" />
        <h1 className="text-zinc-400">The Wedding Of</h1>
        <motion.div
          initial={{ scale: 4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 3, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="w-fit relative border-t-2 border-b-2 py-2 text-center flex flex-col lg:flex-row gap-4 items-center"
        >
          <h3 className="text-5xl lg:text-8xl font-[parisienne] text-teal-700/80 font-medium">
            Reni
          </h3>
          <span className="text-teal-700/80 font-medium font-[parisienne] text-5xl lg:text-8xl ">
            &
          </span>
          <h2 className="text-5xl lg:text-8xl font-[parisienne] text-teal-700/80 font-medium">
            Abdul
          </h2>
        </motion.div>
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
