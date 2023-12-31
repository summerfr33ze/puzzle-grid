import {Form, Button} from "react-bootstrap"
import {useRef, useState, useEffect} from "react"
import Popup from 'reactjs-popup'


function LoginPopup() {

    const username = useRef(null)
    const password = useRef(null)


    async function loginUser(){
        const user = {
            username: username.current,
            password: password.current
        }

        try {
            const response = await fetch("http://localhost:3000/login",  {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            
            })

            const result = await response.json()
        
    }
    catch (error){
        console.error(error)
    }
}

    return(
        <Popup trigger={<Button className="green-txt-btn">Login</Button>}>
            <Form className="login-form">
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control type="text" name="username" ref={username}></Form.Control>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control type="password" name="password" ref={password}></Form.Control>
            <Button variant="secondary" className="login-form-button" onClick={(event) => {loginUser(event)}}>Log In</Button>
            </Form>
        </Popup>
        
    )
}

export default LoginPopup