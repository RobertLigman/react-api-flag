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
      console.log(res.data);
    });
    setFlagsToRender(flagApi);
  }, []);

  const startSearching = (inputValue) => {
    // console.log(e);
    const newFlagApi = flagApi.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    if (newFlagApi.length === 0) {
      console.log("empty");
    }
    setFlagsToRender(newFlagApi);
  };

  return (
    <div className="App">
      <SearchBar clicked={startSearching} />
      {flagsToRender &&
        flagsToRender.map((item) => (
          <Country
            key={item.name}
            name={item.name}
            capital={item.capital}
            flag={item.flag}
          />
        ))}
    </div>
  );
}

export default App;
