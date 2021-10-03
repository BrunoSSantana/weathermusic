import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';
import { Container, Painel, Input, ContainerCenter, ContainerInput, Titulo, ContainerPassword, RegisterButton, Info, ContainerInfo, CheckboxButton, CheckboxInput, H2Message, SingUp } from './styles'

export default function Login() {
    var validator = require('validator');
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const [colorTextEmail, setColorTextEmail] = useState('')
    const [textEmail, setTextEmail] = useState('')



    useEffect(() => {
        if (email === "") {
            return setTextEmail('')
        }
        var validEmail = validator.isEmail(email)
        if (validEmail === true) {
            setColorTextEmail('#3AB600')
            setTextEmail('Valid email')
        } else {
            setColorTextEmail('#e62e2e')
            setTextEmail('Invalid email')
        }
    }, [email, validator])



    function showPassword() {
        var idPassword = document.getElementById('password')
        var check = document.getElementById('mostrar')
        if (idPassword.type === "password") {
            check.checked = true
            idPassword.type = "text"
        } else {
            idPassword.type = "password"
            check.checked = false
        }
    }

    async function LoginUser() {
        console.log('asdasd')
        try {
            await axios.post("http://localhost:3003/users/auth", {
                email,
                password
            }).then((response) => {
                localStorage.setItem('token', response.data)
                console.log(response);
                document.location.reload(true)
                history.push('/');
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>

            <Painel>
                <Titulo></Titulo>
                <Titulo>Login</Titulo>
                <ContainerCenter>
                    <ContainerInput>
                        <ContainerPassword>
                            <Input placeholder="Email" type="text" onChange={(e) => {
                                setEmail(e.target.value)
                            }}></Input>
                            <Input placeholder="Password" id="password" type="password" onChange={(e) => {
                                setPassword(e.target.value)
                            }}></Input>
                        </ContainerPassword>
                        <CheckboxButton onClick={showPassword}>
                            <CheckboxInput id='mostrar' value='pass' type='checkbox' >
                            </CheckboxInput>
                            Show password
                        </CheckboxButton>
                    </ContainerInput>

                    <ContainerInfo>
                        <H2Message color={colorTextEmail}>{textEmail}</H2Message>
                    </ContainerInfo>
                    <RegisterButton onClick={LoginUser}>Login</RegisterButton>
                    <SingUp href='/register'>Sing Up</SingUp>
                </ContainerCenter>
                <Info></Info>
            </Painel>

        </Container>
    )
}
