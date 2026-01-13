import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="footerContainer">
      <Image src="/biglogo.png" alt="OSMO" width={160} height={48} />
      <span>© 2025. osmo</span>
    </div>
  );
};

export default Footer;
