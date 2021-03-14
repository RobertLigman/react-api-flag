import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Country";

function App() {
  const [peopleApi, setPeopleApi] = useState();
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setPeopleApi(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="App">
      {peopleApi &&
        peopleApi.map((item) => (
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
