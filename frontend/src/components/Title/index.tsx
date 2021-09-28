import { Container } from './style'


type HeaderProps = {
  children: React.ReactNode
}

export default function ImputText(props: HeaderProps) {
  return (
    <Container>
      {props.children}
    </Container>
  )
}