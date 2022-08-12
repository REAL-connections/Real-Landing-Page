import React from "react";

function DeviceMockup() {
  return (
    <div className="w-full h-full md:ml-24 flex ml-12">
      <video
        src="/assets/videos/app-login.mov"
        width="256"
        height="512"
        autoPlay={true}
        loop={true}
        playsInline={true}
        muted={true}
      />
    </div>
  );
}

export default DeviceMockup;
