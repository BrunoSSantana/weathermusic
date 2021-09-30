import { ReactComponent as Login } from '../../../assets/svg/login.svg'
import { Container } from './styles'

export default function LoginButton() {
  return (
    <>
      <Container href='#'>
        Login <Login />
      </Container>
    </>
  )
}
