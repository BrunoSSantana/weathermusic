import { ReactComponent as Favorite } from '../../../assets/svg/favorite.svg'
import { Text, Button, Container } from "./styles";

export default function Question() {
  return (
    <Container>
      <Text>Oque achou dessa playlist de MPB que selecionamos?</Text>
      <Button>
        <Favorite /> Salvar
      </Button>
    </Container>
  )
}