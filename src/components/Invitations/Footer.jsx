import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full py-2 text-center bg-gradient-to-tr from-emerald-800 to-teal-700 text-sm">
      <Link to="https://webhouse.webqodes.com" className="text-zinc-200">
        Powered By : WebHouse Invitation
      </Link>
    </div>
  );
};

export default Footer;
