import React, { useState } from "react";
import axios from "axios";
import CurrentTime from "./CurrentTime";
import "./Weather.css"
import Wind from "./img/wind.svg";
import Pressure from "./img/heart.svg";
import Humidity from "./img/humidity.svg";
import Water from "./img/water-waves.svg";
import Like from "./img/like.svg";

export default function Weather() {
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            pressure: response.data.main.pressure,
            description: response.data.weather[0].description,
            wind: response.data.wind.speed,
            city: response.data.name,
            date: new Date(response.data.dt * 1000)

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
                    <div className="temperature offset-md-3">
                        <div className="main-info">
                            <div className="row">
                                <div className="col-md-4 col-xs-6 col-sm-6 offset-xs-1">
                                    <div className="city-main">
                                        <p className="city-main-name" id="citymain">{weatherData.city}</p>
                                        <p className="city-info">Last update: <CurrentTime date={weatherData.date} />  <span id="lastupdate"></span> </p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-xs-6 col-sm-6 offset-md-1">
                                    <div className="city-temp">
                                        <p className="city-main-temp">
                                            <img src="" alt="" id="icon" /> <span id="temperaturemain">{Math.round(weatherData.temperature)}</span>
                                            <span className="unit" id="metric"> <a href="#metric" className="active" id="celsius">°C</a> | <a href="#faren"
                                                className="faren" id="faren">°F</a> </span>
                                        </p>
                                        <p className="city-sky offset-md-1" id="descriptionmain">{weatherData.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="weather-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-3 ">
                                    <div className="card" id="card-details">
                                        <div className="details-icon">
                                            <img src={Wind} className="card-img-top" alt="..." />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Wind speed</h5>
                                            <p className="card-text-detail "><span id="metrick-wind">{Math.round(weatherData.wind)}</span> km/h</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-3 ">
                                    <div className="card" id="card-details">
                                        <img src={Pressure} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Pressure</h5>
                                            <p className="card-text-detail"><span id="metrick-pressure">{weatherData.pressure}</span> hpa</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-3 ">
                                    <div className="card" id="card-details">
                                        <img src={Humidity} className="card-img-top" id="card-img-hum" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Humidity</h5>
                                            <p className="card-text-detail"><span id="humidity">{weatherData.humidity}</span>%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-3 ">
                                    <div className="card" id="card-details">
                                        <img src={Water} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Water</h5>
                                            <p className="card-text-detail"><span id="metrick-water">21</span> °C</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="music-recom">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-6 col-xs-12 col-sm-12">
                                <div className="music-block">

                                    <div className="col-md-4 ">
                                        <div className="music-name">
                                            Playlist on today </div>
                                        <div className="music-playlist">Today's Top Hits</div>
                                    </div>
                                    <div className="playlist-play">
                                        <div className="col-md-12">
                                            <iframe title="spoty-music"
                                                src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWzQTBs5BHX9?utm_source=generator&theme=0"
                                                width="100%" height="75" frameborder="0" allowfullscreen=""
                                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12 col-sm-12">
                                <div className="block-recomendations">
                                    <div className="like-icon">
                                        <div className="col-md-1">
                                            <img src={Like} alt="like icon" width="50px" />
                                        </div>
                                    </div>
                                    <div className="rec-text">
                                        <div className="info-head">Recommendation!</div>
                                        <div className="info-text">
                                            Use sunscreen, wear a hat and drink cold drinks.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="weather-week" id="weather-week"> </div>


                <div className="footer">
                    <p className="copy">Developed by <a href="https://github.com/pohuliaieva/Weather-App-by-Pohuliaieva" className="copy-link"
                        target="_blank" rel="noreferrer"> Yevheniia Pohuliaieva</a> </p>
                </div>
            </div >
        );
    }
    else {

        const apiKey = "49813f7b6218c304bf646ff9c4c866c4";
        let city = "Madrid";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);

        return "Loading..";
    }
}