import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
      <InfinitySpin width="200" color="#3f51b5" />
    </div>
  );
};

export default Loader;
