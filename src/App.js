import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Country";
import SearchBar from "./Containers/Searchbar";
import Loading from "./components//Loading";
function App() {
  const [flagApi, setflagApi] = useState();
  const [flagsToRender, setFlagsToRender] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        setflagApi(res.data);
        setFlagsToRender(res.data);
        console.log(res.data);
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err);
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
      {!isLoading && <Loading />}
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
