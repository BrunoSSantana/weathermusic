
import {Container, A} from './styles'

export default function MenuComponent() {

    function sair(){
        localStorage.removeItem('token')
    }


    return (
        <Container>
            <A href='/'>
               Menu 
            </A>
            <A href='/profile'>
               Profile 
            </A>
            <A onClick={sair} href='/'>
               sair 
            </A>

        </Container>
    )
}
