import {Form, Button} from 'react-bootstrap'
import {useEffect, useState, useRef} from 'react'


function Signup (props){
    const username = useRef(null)
    const password = useRef(null)
    const confirmPassword = useRef(null)



    async function signUpUser(e){
        e.preventDefault()
        const currentUsername = username.current.value
        const currentPassword = password.current.value
        const currentConfirmPassword = confirmPassword.current.value

        try {
            console.log(currentUsername)
            let userData = {
                username: currentUsername,
                password: currentPassword
            }

            if (currentPassword === currentConfirmPassword){
                const response = await fetch("http://localhost:3000/signup", {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(userData)
                
            })
            .then(response => response.json()) 
            .then(json => console.log(json));
            }
            

            
            
            
        }
        catch (error) {
            console.error(error)
        }
    }

  return (
        <Form className="login-form">
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control type="text" name="username" ref={username}></Form.Control>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control type="password" name="password" ref={password}></Form.Control>
            <Form.Label htmlFor="confirm-password">Confirm Password</Form.Label>
            <Form.Control type="password" name="confirm-password" ref={confirmPassword}></Form.Control>
            <Button variant="secondary" className="login-form-button" onClick={(e) => {signUpUser(e)}}>Sign Up</Button>
        </Form>
  )
}

export default Signup