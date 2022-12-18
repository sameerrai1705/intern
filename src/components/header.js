import React from "react";
import { HiBriefcase } from "react-icons/hi2";
import { CgMenuRightAlt } from "react-icons/cg";
import style from "./header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.head}>
        <h1>
          <HiBriefcase className={style.brief} />
          <span className={style.logo}>Logo</span>
        </h1>
        <CgMenuRightAlt className={style.right} />
      </div>
      <div className={style.line}></div>
    </div>
  );
};

export default Header;