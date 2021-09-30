import { Container } from './styles'

interface ICardsProps {
  url_image: string
  url_sound: string
  music_name: string
  subtible: string
}

export default function Card({ music_name, subtible, url_image, url_sound }: ICardsProps) {
  return (
    <>
      <Container>
        <img src={url_image} alt="Capa da música" />
        <div>
          <p>{music_name}</p>
          <span>{subtible}</span>
        </div>
      </Container>
    </>
  )
}