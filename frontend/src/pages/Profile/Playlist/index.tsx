import { ReactComponent as Arrow } from '../../../assets/svg/arrow-right.svg'
import { Container } from "./styles";

interface IPlaylistProps {
  id: string
  reference: string
}

export default function Playlist({ id, reference }: IPlaylistProps) {
  return (
    <Container>

      <div>
        <h3>{reference}</h3>
        <p>{id}</p>
      </div>

      <Arrow />

    </Container>
  )
}