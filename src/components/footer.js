import { HiBriefcase } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import {BsTwitter} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'
import {BiCopyright} from 'react-icons/bi';
import style from './footer.module.css';

const Footer = () => {
  return (
    <div className={style.footer}>
      <h1>
        <HiBriefcase className={style.brief} />
        <span className={style.logo}>Logo</span>
      </h1>
      <p className={style.lorem}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className={style.media}>
        <div className={style.m}> <BsTwitter /> </div>
        <div className={style.m}> <BsLinkedin /> </div>
        <div className={style.m}> <FaFacebookSquare /> </div>
        <div className={style.m}> <FcGoogle /> </div>
      </div>
      <div>
        <h3 className={style.copyright}> <BiCopyright /> 2022  lyfestring.com</h3>
      </div>
    </div>
  );
};

export default Footer;
