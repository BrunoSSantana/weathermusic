import { Link } from 'react-router-dom'
import { ReactComponent as Login } from '../../../assets/svg/login.svg'
import { Container } from './styles'

export default function LoginButton() {
  const token = localStorage.getItem('token')
  

  return (
    <>
    {token 
    ? ''
    : <Link to='/login'>
        <Container href='#'>
          Login <Login />
        </Container>
      </Link>
    }
    </>
  )
}
