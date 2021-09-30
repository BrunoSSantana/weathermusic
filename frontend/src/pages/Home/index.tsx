import InputText from "./InputText";
import Card from "./Card";
import Question from "./Question";
import LoginButton from "./LoginButton";

import { Cards } from "./styles";
import { Container } from "./styles";
import { Header } from "./styles";
import { Title } from "./styles";

export default function Home() {
  return (
    <Container>
      <Header >
        <Title>Descubra sugestões de músicas de acordo com clima</Title>
        <InputText />
        <Question />
        <LoginButton />
      </Header>

      <Cards>
        <Card
          url_image='https://i.scdn.co/image/ab67616d0000b27319f2f5dfee3023fb8630c08e'
          url_sound=''
          music_name='Num é só ver'
          subtible='Emicida'
        />
      </Cards>
    </Container>
  )
}
