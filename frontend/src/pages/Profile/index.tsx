import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { api } from "../../services/api";
import Card from "../Home/Card";
import Playlist from "./Playlist";
import { Container, Content, Header, Img, Infos, Musics, PlaylistButton, Playlists } from "./styles";

interface IPlaylistsRequest {
  id: string
  reference: string
}

interface IUserRequest {
  name: string
  id: string
  email: string
}

interface IPlaylistRequest {
  id: string
  playlist_id: string
  artist: string
  music_name: string
  url_sound: string
  url_image: string
}

export default function Profile() {

  const [playlists, setPlaylists] = useState<IPlaylistsRequest[]>([])
  const [playlist, setPlaylist] = useState<IPlaylistRequest[]>([])
  const [user, setUser] = useState<IUserRequest>()

  useEffect(() => {
    getPlaylists()
  }, [])
  async function getPlaylists() {
    const { data } = await api.get('playlists')

    setPlaylists(data.playlists_id)
    setUser(data.user)

  }

  async function getPlaylist(id: string) {
    const { data } = await api.get(`playlists/${id}`)
    console.log(data);

    setPlaylist(data)

  }

  return (
    <Container>

      <Header>
        <Infos>
          <Img src="https://images.hdqwalls.com/download/monkey-d-luffy-one-piece-4k-ln-1440x900.jpg" />
          <div>
            <h3>{user?.name}</h3>
            <p>{user?.email}</p>
          </div>
        </Infos>

        <div>
          <span>{playlists.length}</span>
          <p>Playlists salvas</p>
        </div>
      </Header>

      <Content>

        <Playlists>

          {playlists.map(({ id, reference }) => {
            return (
              <PlaylistButton key={id} onClick={() => getPlaylist(id)}>
                <Playlist key={id} id={id} reference={reference} />
              </PlaylistButton>
            )
          })}

        </Playlists>

        <Musics>

          {playlist.map((result) => {
            console.log(result.id);

            return (
              <Card
                key={result.id}
                music_name={result.music_name}
                subtible={result.artist}
                url_image={result.url_image}
                url_sound={result.url_sound}
              />
            )
          })}

        </Musics>

      </Content>

    </Container >
  )
}