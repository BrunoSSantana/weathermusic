import styled from 'styled-components';
import img from '../../assets/background-login.jpg'

export const Container = styled.div`
    background-color: #08AEEA;
    background-image: linear-gradient(-45deg, #08AEEA 0%, #2AF598 100%);

    background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    justify-content: end;
    align-items: center;
`;

export const Painel = styled.div`
    background: white;
    height: 80vh;
    width: 60vh;
    border-radius: 16px;
    margin-left: 100px;
    margin-right: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: -2px 1px 20px rgba(0, 0, 0, .2);

`

export const ContainerCenter = styled.div`
    display: flex;
    flex-direction: column;
    width: 40vh;
    margin-left: 11vh;
    margin-right: 11vh;
    //aqui
`

export const ContainerInput = styled.div`

`
export const ContainerPassword = styled.div`
    width: 100%;
`
export const ContainerInfo = styled.div`
    height: 100px;
    
`
export const Titulo = styled.h1`
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

export const Input = styled.input`
    margin-top: 40px;
	border: 0;
	border-bottom: 2px solid var(--border-bottom-login);
	outline: none;
	width: 100%;

    :focus {
	border-bottom: 2px solid var(--login-focus-shadow);
    
    }
`

export const SingUp = styled.a`
    font-size: 14px;
    font-weight: normal;
    text-align: center;
    margin-top: 20px;
    color: #FFF;

    background: #FF5349;
    padding: 7px;
    border-radius: 10px;
    box-shadow: -1px 1px 5px rgba(0, 0, 0, .3);

`

export const RegisterButton = styled.button`
    width: 100%;
    height: 5vh;
    background: var(--button-login-Register);
    border-radius: 10px;
    border: none;
    color: #FFF;
    font-weight: normal;
    font-size: 14px;
    
    box-shadow: -1px 1px 5px rgba(0, 0, 0, .3);

    :hover{
        background: var(--button-login-Register-hover);
    }

`
export const Info = styled.div`
    width: 100%;
    height: 40px;
    background: var(--login-text-info);
    border-radius: 0 0 16px 16px;
`

export const CheckboxButton = styled.button`
 height: 25px;
 text-align: center;
 font-size: 14px;
 background: none;
 border: none;
`
export const CheckboxInput = styled.input`
    margin-top: 5px;
    cursor: pointer;
    width: 13px;
    height: 13px;
`

export const H2Message = styled.h2`
font-size: 15px;
    color: ${props => props.color};
`


