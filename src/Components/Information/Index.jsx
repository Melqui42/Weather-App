import { TbWind } from "react-icons/tb";
import { FiArrowLeft } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsFillCloudSunFill, BsDropletHalf } from "react-icons/bs";

import "./Style.scss";
import React from "react";

export default function Information(props) {

  return (
    <div className={!props.stateValue ? "WeatherAppInformationHide" : "WeatherAppInformationShow"}>
      <div className="Title">
        <button onClick={() => props.stateFunction(!props.stateValue)}>
          <FiArrowLeft />
        </button>
        <h1>Weather App</h1>
      </div>
      <div className="Container">
        <p className="Location">{`${props.dataInformation?.name}, ${props.dataInformation?.sys.country}`}</p>
        <div className="Content">
          <div className="Climete">
            <img src={`http://openweathermap.org/img/wn/${props.dataInformation?.weather[0].icon}.png`} alt="" />
            <h1>{`${Math.floor(props.dataInformation?.main.temp)}°C`}</h1>
          </div>
          <div className="Information">
            <p>{`${props.dataInformation?.weather[0].description}`}</p>
            <ul className="List">
              <li className="Item">
                <BsDropletHalf className="Icon" />
                {`${props.dataInformation?.main.humidity}%`}
              </li>
              <li className="Item">
                <TbWind className="Icon" />
                {`${props.dataInformation?.wind.speed}km/h`}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
