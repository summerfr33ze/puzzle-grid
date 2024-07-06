import Popup from 'reactjs-popup'
import {useRef, useState, useEffect} from "react"

function UsernamePopup (props){

    function logoutUser() {

    }

    return (
        <Popup trigger={<button style={props.usernameDisplay} className="green-txt-btn">{props.currentUsername}</button>}>
            <button className="menu-button" onClick={(event) => {logoutUser(event)}}>Logout</button>
        </Popup>
    )
}

export default UsernamePopup