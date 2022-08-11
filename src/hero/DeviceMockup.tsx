import Image from "next/image";
import React from "react";

function DeviceMockup() {
  return (
    <Image
      src={"/assets/images/real-app-login.png"}
      width={256}
      height={512}
      alt="real-app-login"
    />
  );
}

export default DeviceMockup;
