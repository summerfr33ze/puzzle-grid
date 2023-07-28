import {Routes, Route, useNavigate} from 'react-router-dom'
import FeaturedPuzzles from './FeaturedPuzzles'
import {Outlet} from 'react-router-dom'

function Genres (props) {
    return(
        
    <div className="genre-container"> 
        <Outlet/>
    </div>
    
    )
    
    
}




function Sports (props) {
    return(
    <FeaturedPuzzles type="sports"></FeaturedPuzzles>
    )
}

function TVandMovies (props) {
    return(
    <FeaturedPuzzles type="TVandMovies"></FeaturedPuzzles>
    )
}

function Numbers (props) {
    return(
    <FeaturedPuzzles type="Numbers"></FeaturedPuzzles>
    )
}

function Literature (props) {
    return (
    <FeaturedPuzzles type="Literature"></FeaturedPuzzles>
    )
}

function Miscellaneous (props) {
    return (
        <div>
        <FeaturedPuzzles type="miscellaneous"></FeaturedPuzzles>
        </div>
    )
}

export {Genres, Miscellaneous, Sports, TVandMovies, Numbers, Literature}
