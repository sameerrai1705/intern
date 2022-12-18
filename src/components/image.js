import React from "react";
import style from "./image.module.css";
import path from "../image/TEST.jpg";

const Image = () => {
  return (
    <div className={style.image}>
      <div className={style.contain}><img src={path} /></div>
    </div>
  );
};

export default Image;