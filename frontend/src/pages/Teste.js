import { useEffect, useState } from "react";
import axios from "axios";

export default function Teste() {
  useEffect(() => {
  }, []);

  const [city, setCity] = useState("");
  const [clima, setClima] = useState("");
  const [nameCity, setNameCity] = useState("");
  const [randomPlaylist, setRandomPlaylist] = useState([]);

  const weatherApi = "e5939e7732a537cc4d47b4c98ee3b0e7";

  async function reqClima() {
    setNameCity(city)
    try {
      await axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi}`
        )
        .then((response) => {
          console.log(response.data.main.temp);
          const kevin = response.data.main.temp;
          const celsius = parseInt(kevin) - 273;

          setClima(celsius);

          if (celsius > 32) {
            reqMusic("rock");
          }
          if (celsius <= 32 && celsius >= 24) {
            reqMusic("pop");
          }
          if (celsius <= 23 && celsius >= 16) {
            reqMusic("Clássica");
          }
          if (celsius < 16) {
            reqMusic("lofi");
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function reqMusic(genre) {
    try {
      await axios
        .get("https://shazam.p.rapidapi.com/search", {
          params: {
            term: genre ,
            locale: "en-US",
            offset: "1",
            limit: "5",
          },
          headers: {
            "x-rapidapi-host": "shazam.p.rapidapi.com",
            "x-rapidapi-key":
              "05111dce6dmsh6f5edba24560a71p13a791jsna7034ac9ff64",
          },
        })
        .then((response) => {
          console.log(response.data.tracks.hits);
          setRandomPlaylist(response.data.tracks.hits);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>O clima de {nameCity} é: {clima}°C</h1>
      <input
        placeholder="city"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      ></input>
      <button onClick={reqClima}>Digite uma cidade</button>


      {randomPlaylist.map((val)=>{
        return(
          <div key={val.track.key}>
            <a href={val.track.url} target="_blank" rel="noopener noreferrer">
            <img src={val.track.share.image} alt="Foto música"/>
            <h1>Música{val.track.title}</h1>
            <h1>Banda{val.track.subtitle}</h1>
            </a>
          </div>
        )
      })

      }
    </div>
  );
}
