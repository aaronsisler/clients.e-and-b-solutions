// import React from "react";
import React, { useEffect, useRef } from "react";
import NextLink from "next/link";
import cn from "classnames";

import "./logo.scss";

const useCanvas = callback => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    callback([canvas, ctx]);
  }, []);

  return canvasRef;
};

const Logo = ({ className }) => {
  // const [position, setPosition] = React.useState({});
  const canvasRef = useCanvas(([canvas, ctx]) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.arc(35, 35, 30, -0.35 * Math.PI, 1.35 * Math.PI);
    ctx.stroke();
  });

  return (
    <canvas
      className={cn("logo", className)}
      width={50}
      height={50}
      ref={canvasRef}
    />
  );
};
export default Logo;
