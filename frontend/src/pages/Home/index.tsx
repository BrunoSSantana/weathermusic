import { useEffect, useState } from "react";
import axios from "axios";

import Card from "./Card";
import LoginButton from "./LoginButton";
import { ReactComponent as Favorite } from '../../assets/svg/favorite.svg'


import { Button, Cards, Input, InputText, Container, Header, Title, Question, Text,ButtonSVG } from "./styles";

interface IRandomplaylistRequest {

  track: {
    key: string
    title: string
    subtitle: string
    url: string
    share: {
      image: string
    }
  }

}

export default function Home() {

  useEffect(() => {
  }, []);

  const [city, setCity] = useState("");
  const [clima, setClima] = useState<Number>();
  const [nameCity, setNameCity] = useState("");
  const [randomPlaylist, setRandomPlaylist] = useState<IRandomplaylistRequest[]>([]);

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

  async function reqMusic(genre: string) {
    try {
      await axios
        .get("https://shazam.p.rapidapi.com/search", {
          params: {
            term: genre,
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
    <Container>
      <Header >
        <Title>Descubra sugestões de músicas de acordo com clima</Title>
        <InputText>
          <Input placeholder="city"
            onChange={(e) => {
              setCity(e.target.value);
            }} />
          <Button onClick={reqClima}>Pesquisar</Button>
        </InputText>
        {city
          ?
          <><h1>Temperatura em {nameCity}: {clima}°C</h1>
            <Question>
              <Text>Oque achou dessa playlist de MPB que selecionamos?</Text>
              <ButtonSVG>
                <Favorite /> Salvar
              </ButtonSVG>
            </Question></>
          : ''
        }
        <LoginButton />
      </Header>

      <Cards>

        {randomPlaylist.map((result) => {
          return (
            <Card
              key={result.track.key}
              url_image={result.track.share.image}
              url_sound={result.track.url}
              music_name={result.track.title}
              subtible={result.track.subtitle}
            />
          )
        })}

      </Cards>
    </Container>
  )
}