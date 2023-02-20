import Axios from "axios";
import React from "react";

import Information from "./Components/Information/Index";

import "./Style.scss";

export default function App(props) {
  const [response, setResponse] = React.useState({});
  const [state, setState] = React.useState();
  const [inputSearch, setInputSearch] = React.useState("");

  const key = "bd16c61e5d02fae394723e49ab73f4d0";

  function handleSearchClimate() {
    if (inputSearch === "") {
      window.alert("Insira um valor no input!!!");
    } else {
      return Axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          q: inputSearch,
          appid: key,
          units: "metric",
          lang:"pt_br"
        },
      })
        .then((response) => {
          console.log(response.data);
          setResponse(response);
          setInputSearch("");
          setState(!state);
        })
        .catch((error) => console.error(error));
    }
  }

  return (
    <div className="App">
      <div className="WeatherApp">
        <h1>Weather App</h1>
        <div>
          <input
            type="text"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            placeholder="Nome de uma cidade..."
          />
          <button onClick={handleSearchClimate}>Buscar</button>
        </div>
      </div>
      <Information stateValue={state} stateFunction={setState} dataInformation={response.data} />
    </div>
  );
}
