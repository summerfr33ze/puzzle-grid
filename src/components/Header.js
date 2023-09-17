import {useNavigate, Link} from "react-router-dom"



function Header(props){
    const navigate = useNavigate()

    const navigateToMiscellaneous = () => {
        navigate('genres/miscellaneous')
        
    }

    const navigateToSports = () => {
        navigate('genres/sports')
    }

    const navigateToNumbers = () => {
        navigate('genres/numbers')
    }

    const navigateToTVandMovies = () => {
        navigate('genres/tv-and-movies')
    }

    const navigateToLiterature = () => {
        navigate('genres/literature')
    }

    const navigateToCreate = () => {
        navigate('create')
    }
    
    return (
        <div className="header">
                <div className="header-left">
                    <img className="logo-icon"></img>
                    <div className="title"><span className="title-span">Puzzle</span> Grid</div>
                </div>
                <div className="genres">
                    <button className="green-txt-btn" onClick={navigateToMiscellaneous}>Miscellaneous</button>
                    <button className="green-txt-btn" onClick={navigateToSports}>Sports</button>
                    <button className="green-txt-btn" onClick={navigateToNumbers}>Numbers</button>
                    <button className="green-txt-btn" onClick={navigateToTVandMovies}>TV and Movies</button>
                    <button className="green-txt-btn" onClick={navigateToLiterature}>Literature</button>
                </div>
                <div className="header-right">
                    <button className="green-txt-btn" onClick={navigateToCreate}>Create</button>
                    <div className="user">{}</div>
                    <img className="user-icon"></img>
                </div>
        </div>
    )
}



export default Header