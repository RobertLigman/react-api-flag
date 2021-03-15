import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Country";
import SearchBar from "./Containers/Searchbar";

function App() {
  const [flagApi, setflagApi] = useState();
  const [flagsToRender, setFlagsToRender] = useState();
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setflagApi(res.data);
      setFlagsToRender(res.data);
      console.log(res.data);
    });
  }, []);

  const startSearching = (inputValue) => {
    // console.log(e);
    const newFlagApi = flagApi.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFlagsToRender(newFlagApi);
  };

  return (
    <div className="App">
      <SearchBar clicked={startSearching} />
      <div className="Flag-container">
        {flagsToRender &&
          flagsToRender.map((item) => (
            <Country
              key={item.name}
              name={item.name}
              capital={item.capital}
              flag={item.flag}
              currencyName={item.currencies[0].name}
              currencySymbol={item.currencies[0].symbol}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
