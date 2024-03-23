import {Routes, Route, useNavigate} from 'react-router-dom'
import FeaturedPuzzles from './FeaturedPuzzles'
import {Outlet} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import uniqid from 'uniqid'
import Header from './Header'
import Footer from './Footer'

function Genres (props) {
    return(
    <div className="genre-page">
        <Header />    
        <div> 
            <Outlet/>
        </div>
        <Footer />
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
    <FeaturedPuzzles type="tv-and-movies"></FeaturedPuzzles>
    )
}

function Numbers (props) {
    return(
    <FeaturedPuzzles type="numbers"></FeaturedPuzzles>
    )
}

function Literature (props) {
    return (
    <FeaturedPuzzles type="literature"></FeaturedPuzzles>
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
