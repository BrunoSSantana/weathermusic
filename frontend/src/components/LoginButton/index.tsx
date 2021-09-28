import { ReactComponent as Login } from '../../assets/svg/login.svg'
import { Container } from './style'

export default function LoginButton() {
  return (
    <>
      <Container href='#'>
        <Login />
      </Container>
    </>
  )
}
