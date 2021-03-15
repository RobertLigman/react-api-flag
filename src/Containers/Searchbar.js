import { useState } from "react";
import "./Searchbar.css";
function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    // console.log(e.target.value);
    setSearchValue(e.target.value);
  };
  return (
    <div className="searchbar-form">
      <input
        className="searchbar-input"
        placeholder="wpisz nazwę flagi ..."
        onChange={(e) => handleChange(e)}
      />
      <button
        className="btn"
        type="submit"
        onClick={() => props.clicked(searchValue)}>
        Szukaj
      </button>
    </div>
  );
}

export default SearchBar;
