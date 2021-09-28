import Header from "../components/Header";
import Title from "../components/Title";
import InputText from "../components/InputText";
import Card from "../components/Card";
import Cards from "../components/Cards";
import Question from "../components/Question";
import LoginButton from "../components/LoginButton";

export default function Home() {
  return (
    <>
      <Header >
        <Title>Descubra sugestões de músicas de acordo com clima</Title>
        <InputText />
      </Header>

      <Cards>
        <Question />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Cards>
      <LoginButton />
    </>
  )
}