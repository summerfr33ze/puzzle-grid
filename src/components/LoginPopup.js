import {Form, Button} from "react-bootstrap"
import {useRef, useState, useEffect} from "react"
import Popup from 'reactjs-popup'


function LoginPopup(props) {

    const username = useRef(null)
    const password = useRef(null)





    async function loginUser(event){
        event.preventDefault()
        const user = {
            username: username.current.value,
            password: password.current.value
        } 


        try {
            fetch("http://localhost:3000/login",  {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            
            })
            .then(response => response.json())
            .then((token) => {
                if(token.message === "auth successful"){
                    props.setCurrentUsername(username.current.value)
                    props.setLoginDisplay({display: "none"})
                    props.setUsernameDisplay({display: "block"})
                    const jwtToken = token.jwt_token
                    sessionStorage.setItem('jwtToken', jwtToken)
                    sessionStorage.setItem('username', username.current.value)
                    
                }
            })
            .then(console.log(props.loginDisplay))

            
        
    }
    catch (error){
        console.error(error)
    }
}

    return(
        <Popup trigger={<button style={props.loginDisplay} className="green-txt-btn">Login</button>}>
            <Form className="login-form">
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control type="text" name="username" ref={username}></Form.Control>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control type="password" name="password" ref={password}></Form.Control>
            <button   className="green-txt-btn login-form-btn" onClick={(event) => {loginUser(event)}}>Log In</button>
            </Form>
        </Popup>
        
    )
}

export default LoginPopup