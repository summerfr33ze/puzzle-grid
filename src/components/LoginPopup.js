import {Form, Button} from "react-bootstrap"
import {useRef, useState, useEffect} from "react"
import Popup from 'reactjs-popup'
import {Link} from "react-router-dom"


function LoginPopup(props) {

    const username = useRef(null)
    const password = useRef(null)
    const [popupDisplay, setPopupDisplay] = useState({display: 'none'})
    const closePopup = () => setPopupDisplay({display: "none"})
    const openPopup = () => setPopupDisplay({display: "block"})
    
    


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
                    props.setCreateDisplay({display:"block"})
                    const jwtToken = token.jwt_token
                    sessionStorage.setItem('jwtToken', jwtToken)
                    sessionStorage.setItem('username', username.current.value)
                    closePopup()
                }
            })
            
            
            

            
        
    }
    catch (error){
        console.error(error)
    }
}

    return(
            <div className="dropdown">
                <button  className="green-txt-btn" style={props.loginDisplay} onClick={openPopup}>Login</button>
                <div style={popupDisplay}  className="dropdown-form"   >
            
                <Form className="login-form" > 
                <Form.Label htmlFor="username">Username</Form.Label>
                <Form.Control type="text" name="username" ref={username}></Form.Control>
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control type="password" name="password" ref={password}></Form.Control>
                <div className="btn-div">
                <button className="login-form-btn green-txt-btn" onClick={(event) => {loginUser(event)} }>Log In</button>
                <Link className="green-txt-btn login-form-btn"  to="/signup" >Sign Up</Link>
                </div>
            
                </Form> 
                </div>
            </div>

        
        
        
    )
}

export default LoginPopup