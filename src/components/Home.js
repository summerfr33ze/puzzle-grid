import React, {useState, useEffect, useRef} from "react"
import Button from 'react-bootstrap/Button'
import FeaturedPuzzles from "./FeaturedPuzzles"
import {useNavigate, Link} from "react-router-dom"
import '../App.css'

function Home (props) {

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
        <div>
            <div className="header">
                <div className="header-left">
                    <img className="logo-icon"></img>
                    <div className="title"><span className="title-span">Puzzle</span> Grid</div>
                </div>
                <div className="genres">
                    <Button  onClick={navigateToMiscellaneous}>Miscellaneous</Button>
                    <Button  onClick={navigateToSports}>Sports</Button>
                    <Button  onClick={navigateToNumbers}>Numbers</Button>
                    <Button  onClick={navigateToTVandMovies}>TV and Movies</Button>
                    <Button  onClick={navigateToLiterature}>Literature</Button>
                </div>
                <div className="header-right">
                    <Button  onClick={navigateToCreate}>Create</Button>
                    <div className="user">{}</div>
                    <img className="user-icon"></img>
                </div>
                
            </div>
            <div className="main">
                
                <FeaturedPuzzles type="home"/>
                
            </div>
            <div className="footer"></div>
        </div>
    )
}

export default Home

