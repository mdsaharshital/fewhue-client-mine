import React from "react";
import loading from "../assets/loading.gif";

const Loading = () => {
  const style = {
    background: `radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 30%)`,
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        style={style}
        className="position-absolute top-0 bottom-0 start-0 end-0"
      ></div>
      <img src={loading} alt="Loading" />
    </div>
  );
};

export default Loading;
