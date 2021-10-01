import React, { useEffect, useState } from 'react'

import { Container, Painel, Input,ContainerCenter, ContainerInput, Titulo,ContainerPassword, ContainerName, RegisterButton, Info, ContainerInfo, CheckboxButton,CheckboxInput ,H2Message } from './styles'
import { useHistory } from 'react-router';
import axios from 'axios';
export default function Register() {
    var validator = require('validator');
  
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    const [colorTextPassword, setColorTextPassword] = useState('')
    const [textStrong, setTextStrong] = useState('')

    const [colorTextEmail, setColorTextEmail] = useState('')
    const [textEmail, setTextEmail] = useState('')

    const [colorTextName, setColorTextName] = useState('')
    const [textName, setTextName] = useState('')

    const history = useHistory()

    useEffect(()=>{
        if(password === "" || confirmPassword === ""){
            return setTextStrong('')
        }

        var strongPassword = validator.isStrongPassword(password, {returnScore: true})
        if(password === confirmPassword){
            if(password.length < 8){
                setColorTextPassword('#e62e2e')
                return setTextStrong('Be at least 8 characters long')
            } else if(strongPassword > "46" && password.length >= 8){
                setColorTextPassword('#3AB600')
                setTextStrong('Your password is strong')
            }else{
                setColorTextPassword('#e4d61b')
                setTextStrong('Your password is weak')
            }
        }else{
            setColorTextPassword('#e62e2e')
            return setTextStrong('Passwords do not match')
        }
    },[confirmPassword, password , validator])

    useEffect(()=>{
        if(email === ""){
            return setTextEmail('')
        }
       var validEmail = validator.isEmail(email)
        if(validEmail === true){
            setColorTextEmail('#3AB600')
            setTextEmail('Valid email')
        }else{
            setColorTextEmail('#e62e2e')
            setTextEmail('Invalid email')
        }
    },[email, validator])

    useEffect(()=>{

        let validName = /^[a-záàâãéèêíïóôõöúçñ ]+$/;

        if(name === "" ){
            return setTextName('')
        }else if(name.length < 3){
            setColorTextName('#e62e2e')
            return setTextName('Small name')
        } else if(validName.test(name)){
            setColorTextName('#3AB600')
            setTextName('Valid name')
        }else{
            setColorTextName('#e62e2e')
            setTextName('Invalid name')
        }
    },[name])

    

    function showPassword() {
        var idPassword = document.getElementById('password')
        var idConfirmPassword = document.getElementById('confirmPassword')
        var check = document.getElementById('mostrar')
        if (idPassword.type === "password") {
            check.checked = true
            idPassword.type = "text"
            idConfirmPassword.type = "text"
        } else {
            idPassword.type = "password"
            idConfirmPassword.type = "password"
            check.checked = false
        }
    }

    async function registerUser() {
        try {
          await axios.post("http://localhost:3003/users/new", {
            name,
            email,
            password
          }).then((response) => {
            console.log(response);
            history.push("/login");
          });
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <Container>
           
           <Painel>
            <Titulo></Titulo>
            <Titulo>Here, you can create an account on this website</Titulo>
               <ContainerCenter>
               <ContainerInput>
                   <ContainerName>
                        <Input placeholder="Name" largura={100 + "%"} onChange={(e)=>{
                            setName(e.target.value)
                        }}></Input>
                   </ContainerName>
                   <ContainerPassword>
                   <Input placeholder="Email" type="text" largura={100 + "%"} onChange={(e)=>{
                            setEmail(e.target.value)
                        }}></Input>
                    <Input placeholder="Password" id="password" type="password" largura={100 + "%"} onChange={(e)=>{
                            setPassword(e.target.value)
                        }}></Input>
                    <Input placeholder="Confirm password" id="confirmPassword" type="password" largura={100 + "%"} onChange={(e)=>{
                            setConfirmPassword(e.target.value)
                        }}></Input>
                    </ContainerPassword>
                    <CheckboxButton onClick={showPassword}><CheckboxInput id='mostrar' value='pass' type='checkbox' ></CheckboxInput>Show password</CheckboxButton>
               </ContainerInput>
              
               <ContainerInfo>
                    <H2Message color={colorTextPassword}>{textStrong}</H2Message>
                    <H2Message color={colorTextEmail}>{textEmail}</H2Message>
                    <H2Message color={colorTextName}>{textName}</H2Message>
               </ContainerInfo>
               <RegisterButton onClick={registerUser}>Register</RegisterButton>
               </ContainerCenter>
               <Info></Info>
           </Painel>
           
        </Container>
    )
}
