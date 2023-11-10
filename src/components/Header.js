import {Link} from "react-router-dom"



function Header(props){
    
    
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

                </div>
                    
                <div className="header-right">
                    <Link className="green-txt-btn" to="/create">Create</Link>
                    <div className="user">{}</div>
                    <img className="user-icon"></img>
                </div>
        </div>
    )
}



export default Header