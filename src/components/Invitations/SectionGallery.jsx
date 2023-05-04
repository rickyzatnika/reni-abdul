import React, { useEffect } from "react";
import baguetteBox from "baguettebox.js";
import "baguettebox.js/dist/baguetteBox.min.css";

const SectionGallery = () => {
  useEffect(() => {
    baguetteBox.run(".gallery", {
      buttons: "auto",
    });
  }, []);

  return (
    <>
      <div className="w-full h-full relative">
        <div className="flex flex-col items-center py-10">
          <img src="/images/orn-center.png" alt="" width={220} />
          <h1 className="text-center border-b-2 border-emerald-800/50  pb-2  font-[parisienne] text-4xl lg:text-5xl text-emerald-800/80">
            Happy Moment
          </h1>
        </div>
        <div className="gallery w-full max-w-5xl mx-auto columns-3 gap-0 px-1 relative">
          <div className="mb-0">
            <a href="/gallery/gallery-1.jpg">
              <img
                src="/gallery/gallery-1.jpg"
                alt=""
                className="border-2 border-teal-800"
              />
            </a>
          </div>
          <div className="mb-0">
            <a href="/gallery/gallery-2.jpg">
              <img
                src="/gallery/gallery-2.jpg"
                alt=""
                className="border-2 border-teal-800"
              />
            </a>
          </div>
          <div className="mb-0">
            <a href="/gallery/gallery-3.jpg">
              <img
                src="/gallery/gallery-3.jpg"
                alt=""
                className="border-2 border-teal-800"
              />
            </a>
          </div>
          <div className="mb-0">
            <a href="/gallery/gallery-4.jpg">
              <img
                src="/gallery/gallery-4.jpg"
                alt=""
                className="border-2 border-teal-800"
              />
            </a>
          </div>
          <div className="mb-0">
            <a href="/gallery/gallery-5.jpg">
              <img
                src="/gallery/gallery-5.jpg"
                alt=""
                className="border-2 border-teal-800"
              />
            </a>
          </div>
          <div className="mb-0">
            <a href="/gallery/gallery-6.jpg">
              <img
                src="/gallery/gallery-6.jpg"
                alt=""
                className="border-2 border-teal-800"
              />
            </a>
          </div>
          <div className="mb-0">
            <a href="/gallery/gallery-10.jpg">
              <img
                src="/gallery/gallery-10.jpg"
                alt=""
                className="border-2 border-teal-800"
              />
            </a>
          </div>
          <div className="mb-0">
            <a href="/gallery/gallery-11.jpg">
              <img
                src="/gallery/gallery-11.jpg"
                alt=""
                className="border-2 border-teal-800"
              />
            </a>
          </div>
          <div className="mb-0">
            <a href="/gallery/gallery-1.jpg">
              <img
                src="/gallery/gallery-1.jpg"
                alt=""
                className="border-2 border-teal-800"
              />
            </a>
          </div>
        </div>
        <div className="w-full absolute -bottom-1 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#DAD8C0"
              fillOpacity="1"
              d="M0,224L34.3,218.7C68.6,213,137,203,206,202.7C274.3,203,343,213,411,218.7C480,224,549,224,617,202.7C685.7,181,754,139,823,149.3C891.4,160,960,224,1029,245.3C1097.1,267,1166,245,1234,218.7C1302.9,192,1371,160,1406,144L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default SectionGallery;
