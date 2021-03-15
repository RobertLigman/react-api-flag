import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Country";
import SearchBar from "./Containers/Searchbar";
import Loading from "./components//Loading";
function App() {
  const [flagApi, setflagApi] = useState();
  const [flagsToRender, setFlagsToRender] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        setflagApi(res.data);
        setFlagsToRender(res.data);
        console.log(res.data);
        setIsLoading(false);
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
    if (newFlagApi.length > 0) return setFlagsToRender(newFlagApi);

    setFlagsToRender(null);
  };

  return (
    <div className="App">
      <SearchBar clicked={startSearching} />
      {isLoading && <Loading />}
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
        {!isLoading && !flagsToRender && (
          <h1 className="main-title">Brak wyników</h1>
        )}
      </div>
    </div>
  );
}

export default App;
