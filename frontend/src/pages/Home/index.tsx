import { useState } from "react";
import axios from "axios";

import Card from "./Card";
import LoginButton from "./LoginButton";
import { ReactComponent as Favorite } from '../../assets/svg/favorite.svg'


import { Button, Cards, Input, InputText, Container, Header, Title, Question, Text, ButtonSVG } from "./styles";
import { api } from "../../services/api";

// interface IRequestesLocation {
//   latitude: any
//   longitude: any
// }

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



  const [city, setCity] = useState("");
  const [clima, setClima] = useState<Number>();
  // const [latitude, setLongitude] = useState<Number>();
  // const [longitude, setLatitude] = useState<Number>();
  const [nameCity, setNameCity] = useState("");
  const [ritmo, setRitmo] = useState("");
  const [randomPlaylist, setRandomPlaylist] = useState<IRandomplaylistRequest[]>([]);

  const weatherApi = "e5939e7732a537cc4d47b4c98ee3b0e7";

  async function reqClima() {
    setNameCity(city)
    let baseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi}`
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    // latitude ? baseUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherApi}` : ''
    console.log(baseUrl);

    try {
      await axios
        .get(
          baseUrl
        )
        .then((response) => {
          console.log(response.data.main.temp);
          const kevin = response.data.main.temp;
          const celsius = parseInt(kevin) - 273;

          setClima(celsius);


          if (celsius > 32) {
            setRitmo("rock")
            reqMusic("rock");
          }
          if (celsius <= 32 && celsius >= 24) {
            setRitmo("pop")
            reqMusic("pop");
          }
          if (celsius <= 23 && celsius >= 16) {
            setRitmo("Clássica")
            reqMusic("Clássica");
          }
          if (celsius < 16) {
            setRitmo("lofi")
            reqMusic("lofi");
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function reqMusic(genre: string) {

    var randomNumber = Math.floor(Math.random() * 100 + 1)
    try {
      await axios
        .get("https://shazam.p.rapidapi.com/search", {
          params: {
            term: genre,
            locale: "en-US",
            offset: randomNumber,
            limit: "5",
          },
          headers: {
            "x-rapidapi-host": "shazam.p.rapidapi.com",
            "x-rapidapi-key":
              "05111dce6dmsh6f5edba24560a71p13a791jsna7034ac9ff64",
          },
        })
        .then((response) => {
          setRandomPlaylist(response.data.tracks.hits);
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function savePlaylist() {
    try {
      const musics = randomPlaylist.map((result) => {
        return {
          music_name: result.track.title,
          url_sound: result.track.url,
          url_image: result.track.share.image,
          artist: result.track.subtitle
        }
      })

      await api.post('playlists/save', {
        ritmo, temp: clima, musics,
      })

    } catch (error) {

    }
  }


  // async function handleLocation({ coords }: any) {
  //   const { latitude, longitude } = coords

  //   setLatitude(latitude);
  //   setLongitude(longitude);


  // }
  // function getLocation() {
  //   navigator.geolocation.getCurrentPosition(handleLocation)
  // }
  // getLocation()



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
        {ritmo
          ?
          <><p>Temperatura em {nameCity}: {clima}°C</p>
            <Question>
              <Text>Oque achou dessa playlist de MPB que selecionamos?</Text>
              <ButtonSVG onClick={savePlaylist}>
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
