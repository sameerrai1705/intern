import { BsArrowLeft } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import style from "./container.module.css";
import Details from "./content";
import Search from "./search";

const Content = () => {
  return (
    <div className={style.container}>
      <h2 className={style.test}>
        <BsArrowLeft className={style.left} />{" "}
        <span className={style.tests}> Select Tests </span>
      </h2>
      <p className={style.lab}>
        <span className={style.location}>
          <GoLocation className={style.golocation} />
          <span className={style.delhi}>Delhi</span>
        </span>
        | <span className={style.timing}>Lab timing: 8 AM to 12 AM </span>
      </p>

      <Search />

      <h3>Frequently booked tests</h3>
      <Details />

      <div className={style.btn}>
        <button className={style.hi}>Add Tests ( 0 selected )</button>
      </div>
    </div>
  );
};

export default Content;
