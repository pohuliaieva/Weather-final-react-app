import React, { useState } from "react";
import axios from "axios";


import InfoWeather from "./InfoWeather";
import "./Weather.css"


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {

        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            pressure: response.data.main.pressure,
            description: response.data.weather[0].description,
            wind: response.data.wind.speed,
            date: new Date(response.data.dt * 1000),
            city: response.data.name
        });

    }

    if (weatherData.ready) {

        return (
            <div className="header">
                <div className="first-part">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 offset-md-3">
                                <form className="search" id="search-form">
                                    <input type="search" placeholder="Search for a city..." autocomplete="off" autofocus="on"
                                        className="form-control col-md-4" id="city-input" />
                                    <input type="submit" value="Search city" id="btn-search" className="offset-md-3" />
                                </form>

                            </div>

                        </div>

                    </div>
                    <InfoWeather data={weatherData} />
                </div>

            </div>

        );
    }
    else {

        const apiKey = "49813f7b6218c304bf646ff9c4c866c4";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);

        return "Loading..";
    }
}