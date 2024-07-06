import {Link} from "react-router-dom"
import LoginPopup from "./LoginPopup"
import UsernamePopup from './UsernamePopup'
import {useState,useEffect} from 'react'

function Header(props){
    const [currentUsername, setCurrentUsername] = useState('')
    const [usernameDisplay, setUsernameDisplay] = useState({display: "none"})
    const [loginDisplay, setLoginDisplay] = useState({display: "block"})

    useEffect(()=> {
        const username = sessionStorage.getItem('username')
        if (username) {
            setCurrentUsername(username)
            setUsernameDisplay({display: "block"})
            setLoginDisplay({display: "none"})
        }

    },[])
    
    return (
        <div className="header">
                <div className="header-left">
                    <img className="logo-icon"></img>
                    <div className="title"><span className="title-span">Puzzle</span> Grid</div>
                </div>
                <div className="genres">
                
                    
                    <Link className="green-txt-btn" to="/genres/miscellaneous">Miscellaneous</Link>
                    
                    <Link className="green-txt-btn" to="/genres/sports">Sports</Link>
                   
                    <Link className="green-txt-btn" to="/genres/tv-and-movies">TV and Movies</Link>
                   
                    <Link className="green-txt-btn" to="/genres/numbers">Numbers</Link>
                   
                    <Link className="green-txt-btn" to="/genres/literature">Literature</Link>

                    <Link className="green-txt-btn" to={`/my-puzzles/${currentUsername}`} >My Puzzles</Link>

                </div>
                    
                <div className="header-right">
                    <Link className="green-txt-btn" to="/create">Create</Link>
                    <LoginPopup setCurrentUsername={setCurrentUsername} loginDisplay={loginDisplay}  setLoginDisplay={setLoginDisplay} setUsernameDisplay= {setUsernameDisplay}></LoginPopup>
                    <UsernamePopup currentUsername={currentUsername}  usernameDisplay={usernameDisplay} setLoginDisplay={setLoginDisplay} setUsernameDisplay= {setUsernameDisplay}/>
                </div>
        </div>
    )
}



export default Header