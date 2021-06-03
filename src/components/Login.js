import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { setSignIn } from '../features/user/userSlice'
import { auth, provider } from '../Firebase'

function Login() {
    const dispatch = useDispatch()
    const history = useHistory()
    const login = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider)
            .then(res => {
                let user = res.user
                let newUser = {
                    username: user.displayName,
                    email: user.email,
                    imageUrl: user.photoURL
                }
                localStorage.setItem('user', JSON.stringify(newUser))
                dispatch(setSignIn(newUser))
                history.push('/');

            }).catch(error => {
                alert(error.message);
            })
    }
    return (
        <Container>
            <Content>
                <AmazonLogo src="https://ereputation-dereferencement.fr/storage/2021/01/Amazon-logo.png" />
                <SignInBtn onClick={login}>Sign in with Google</SignInBtn>
            </Content>

        </Container>
    )
}

export default Login
const Container = styled.div`
height:100%;
margin-top:50px;
display:flex;
justify-content:center;
align-items:center;



`
const Content = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
background-color:white;
width:400px;
height:400px;
box-shadow:rgb(0 0 0 / 80% )0px 40px 58px -16px,
    rgb(0 0 0 / 72%)0px 30px 22px -10px;
`
const AmazonLogo = styled.img`
width:100%;
margin-bottom:25px;


`
const SignInBtn = styled.button`
background-color:orange;
height:30px;
padding:0 10px;
border-radius:4px;
width:80%;
border:1px solid #4d2e00;
cursor:pointer;
&:hover{
    background-color:#ffb84d;
}

`

