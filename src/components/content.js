import Data from "./data";
import style from "./content.module.css";

const Details = () => {
  const write = "Book Now";

  return (
    <div>
      {Data.map((data, index) => {
        return (
          <div className={style.box}>
            <div className={style.title}>
              <h3>{data.title}</h3>
              <input className={style.checkbox} type={"checkbox"}></input>
            </div>
            <p>
              Panel type : <span className={style.panel}>{data.Panel_type}</span>
            </p>
            <p>Report within : {data.Report_within}</p>
            {data.time && <p className={style.time}>{data.time}</p>}
            <p>Name & no. of parameters : {data.no_of_parameters} </p>
            {data.parameters.map((d) => {
              return <li>{d}</li>;
            })}
            <div className={style.parameter}>
              <p className={style.view}>View all parameters</p>
              <p className={style.price}>
                Rs. <span className={style.money}> {data.price} </span>
              </p>
            </div>
            <div className={style.btn}>
              <button>{write}</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
