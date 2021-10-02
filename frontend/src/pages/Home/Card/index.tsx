import { Container } from './styles'

interface ICardsProps {
  url_image: string
  url_sound: string
  music_name: string
  subtible: string
}

export default function Card(props: ICardsProps) {
  return (

    <a href={props.url_sound} target="_blank" rel="noopener noreferrer" >
      <Container >

        <img src={props.url_image} alt="Capa da música"/>

        <div>
          <p>{props.music_name}</p>
          <span>{props.subtible}</span>
        </div>
      </Container>
    </a>

  )
}