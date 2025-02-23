import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import logo from "../assets/logoo.webp";

const Loader = () => {
  return (
    <div className="flex flex-col items-center   justify-center h-screen">
      <DotLottieReact
        src="https://lottie.host/2a8e103d-7e5b-4146-aec8-441edb45cdf4/087GY2fcwU.lottie"
        loop
        autoplay
      />
      {/* Logo */}
     
    </div>
  );
};

export default Loader;
