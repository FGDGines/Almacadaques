import { useState } from "react";
import "./Searchbar.css";
import { AiOutlineSearch } from "react-icons/ai";
const Searchbar = () => {
  const [search, setSearch] = useState("");

  return (
    <form className="Searchbar" action="">
      <input
        type="text"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        placeholder="Buscar..."
      ></input>

      <button type="submit" className="icon">
        <AiOutlineSearch />
      </button>
    </form>
  );
};

export default Searchbar;
