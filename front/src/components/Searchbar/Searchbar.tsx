import { useState } from "react";
import "./Searchbar.css";
import { FaMagnet } from "react-icons/fa";

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

      <button type="submit" className="">
        <FaMagnet />
      </button>
    </form>
  );
};

export default Searchbar;
