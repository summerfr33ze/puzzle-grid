import {Form, Button} from "react-bootstrap"
import {useRef, useState, useEffect} from "react"
import Popup from 'reactjs-popup'


function LoginPopup() {

    const username = useRef(null)
    const password = useRef(null)


    function loginUser(){
        const currentUsername = username.current.value
        const currentPassword = password.current.value
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

export default Login