import Playlist from "./Playlist";
import { Container, Header, Img, Infos, Playlists } from "./styles";

export default function Profile() {
  return (
    <Container>

      <Header>
        <Infos>
          <Img src="https://images.hdqwalls.com/download/monkey-d-luffy-one-piece-4k-ln-1440x900.jpg" />
          <div>
            <h3>Monkey D. Luffy</h3>
            <p>inf do clima atual</p>
          </div>
        </Infos>

        <div>
          <span>6</span>
          <p>Playlists salvas</p>
        </div>
      </Header>

      <Playlists>

        <Playlist id='654654-s5d46s-dasd3' reference='mpb-30-09-2021-54349895985'/>
        <Playlist id='' reference=''/>
        <Playlist id='' reference=''/>

      </Playlists>


    </Container>
  )
}