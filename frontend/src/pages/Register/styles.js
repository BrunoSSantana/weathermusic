import styled from 'styled-components';
import img from '../../assets/background-login.jpg'

export const Container = styled.div`
    background: url(${img});
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
    box-shadow: 0 0 50px  var(--login-Register-shadow);

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
export const ContainerName = styled.div`
    display: flex;
    justify-content: space-between;
`
export const ContainerPassword = styled.div`

`
export const ContainerInfo = styled.div`
    height: 100px;
    
`
export const Titulo = styled.h1`
    text-align: center;
    font-size: 2.5vh;
    font-weight: bold;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

export const Input = styled.input`
    margin-top: 40px;
	border: 0;
	border-bottom: 2px solid var(--border-bottom-login);
	outline: none;
	width: ${props => props.largura};

    :focus {
	border-bottom: 2px solid var(--login-focus-shadow);
    
    }
`

export const RegisterButton = styled.button`
    width: 100%;
    height: 5vh;
    background: var(--button-login-Register);
    border-radius: 10px;
    border: none;
    color: var(--button-text-login);
    font-weight: bold;
    
    box-shadow: 0 7px 15px  var(--login-Register-shadow);

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


