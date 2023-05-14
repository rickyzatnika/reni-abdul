import React, { useRef, useState, useEffect } from "react";
import { HiPause, HiPlay } from "react-icons/hi";
import Audio from "../../assets/audio/audio.mp3";

const BackSound = () => {
  const [isPlay, setIsPlay] = useState(false);
  const audioEl = useRef();

  useEffect(() => {
    if (isPlay) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }, [isPlay]);

  const togglePlay = () => {
    setIsPlay(!isPlay);
  };

  return (
    <div className="fixed z-[99] top-4 left-4">
      <button
        onClick={togglePlay}
        className="cursor-pointer rounded-full backdrop-blur w-fit shadow-lg shadow-white/40 transition-all duration-700 delay-75 ease-linear p-2 bg-gradient-to-tr from-[#9c8450] via-[#665531] to-[#9c8450]"
      >
        {!isPlay ? (
          <HiPlay
            size={25}
            className={`text-zinc-100/80 shadow rounded-full shadow-black/40 ${
              isPlay === true ? "animate-spin" : "animate-none"
            }`}
          />
        ) : (
          <HiPause
            size={25}
            className={`text-zinc-100/80 shadow rounded-full shadow-black/40 ${
              isPlay === false ? "animate-none" : "animate-spin"
            }`}
          />
        )}
      </button>
      <audio ref={audioEl} autoPlay loop>
        <source src={Audio} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default BackSound;
