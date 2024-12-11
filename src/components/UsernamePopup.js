import Popup from 'reactjs-popup'
import {useRef, useState, useEffect} from "react"

function UsernamePopup (props){
    const [popupDisplay, setPopupDisplay] = useState({display: 'none'})
    const closePopup = () => setPopupDisplay({display: "none"})
    const openPopup = () => setPopupDisplay({display: "block"})

    function logoutUser(event) {
        event.preventDefault()
        sessionStorage.removeItem('jwtToken')
        sessionStorage.removeItem('username')
        props.setLoginDisplay({display: "block"})
        props.setUsernameDisplay({display: "none"})
        props.setCreateDisplay({display: "none"})
        closePopup()
    }

    return (
        <div class="dropdown">
            <button style={props.usernameDisplay} className="green-txt-btn" onClick={openPopup} >{props.currentUsername} </button>

            <button style={popupDisplay} className="green-txt-btn menu-btn dropdown-logout"  onClick={(event) => {logoutUser(event)}}>Logout</button>
            
        </div>
        
    )
}

export default UsernamePopup