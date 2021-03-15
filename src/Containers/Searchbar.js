import { useState } from "react";

function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };
  return (
    <div className="">
      <input
        placeholder="wpisz nazwę flagi ..."
        onChange={(e) => handleChange(e)}
      />
      <button type="submit" onClick={() => props.clicked(searchValue)}>
        Szukaj
      </button>
    </div>
  );
}

export default SearchBar;
