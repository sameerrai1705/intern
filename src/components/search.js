import { AiOutlineSearch } from "react-icons/ai";
import style from "./search.module.css";

const Search = () => {
  return (
    <div className={style.contain}>
        <input className={style.text} type={"text"} placeholder="Search tests" name="q" />
        <button className={style.submit} type="submit">
          <AiOutlineSearch className={style.outline} />
        </button>
    </div>
  );
};

export default Search;
