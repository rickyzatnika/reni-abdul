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
      <div className="flex flex-col items-center py-10">
        <img src="/images/orn-center.png" alt="" width={220} />
        <h1 className="text-center border-b-2 border-emerald-800/50  pb-2  font-[parisienne] text-4xl lg:text-5xl text-emerald-800/80">
          Happy Moment
        </h1>
      </div>
      <div className="gallery w-full max-w-5xl mx-auto columns-3 gap-0 px-1">
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
    </>
  );
};

export default SectionGallery;
