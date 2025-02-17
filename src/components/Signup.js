import {Form, Button} from 'react-bootstrap'
import {useEffect, useState, useRef} from 'react'
import {useNavigate} from 'react-router-dom'


function Signup (props){
    const username = useRef(null)
    const password = useRef(null)
    const confirmPassword = useRef(null)
    const [responseDisplay, setResponseDisplay] = useState("")
    const [responseDisplay2, setResponseDisplay2] = useState("")
    const navigate = useNavigate()
    

    async function signUpUser(e){
        e.preventDefault()
        const currentUsername = username.current.value
        const currentPassword = password.current.value
        const currentConfirmPassword = confirmPassword.current.value

        
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
            .then((response) => {
                console.log(response)
                if (response.message === "user exists"){
                    setResponseDisplay("user already exists")
                }
                else if (response.errors){
                    if(response.errors.length == 2){
                        setResponseDisplay("Username must be between 5 and 20 characters.")
                        setResponseDisplay2("Password must be between 8 and 20 characters.")
                    }
                    else if(response.errors[0].path == "username"){
                        setResponseDisplay("Username must be between 5 and 20 characters")
                    }
                    else {
                        setResponseDisplay("Password must be between 8 and 20 characters")
                    }
                    
                }

            })
        }
            else {
                setResponseDisplay("Passwords do not Match")
            }
            
            

            
            
            
        
    }

  return (
        <div className="signup-container">
            <div className="signup-banner">Puzzle Grid</div>
            <Form className="signup-form">
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control type="text" name="username" ref={username}></Form.Control>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control type="password" name="password" ref={password}></Form.Control>
            <Form.Label htmlFor="confirm-password">Confirm Password</Form.Label>
            <Form.Control type="password" name="confirm-password" ref={confirmPassword}></Form.Control>
            <button className="signup-form-btn" onClick={(e) => {signUpUser(e)}}>Sign Up</button>
            </Form>
            <div>{responseDisplay}</div>
            <div className="response-display2">{responseDisplay2}</div>
        </div>
        
  )
} 

export default Signup