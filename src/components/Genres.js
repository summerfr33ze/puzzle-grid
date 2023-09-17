import {Routes, Route, useNavigate} from 'react-router-dom'
import FeaturedPuzzles from './FeaturedPuzzles'
import {Outlet} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import uniqid from 'uniqid'
import Header from './Header'

function Genres (props) {
    return(
        
    <div> 
        <Outlet/>
    </div>
    
    )
    
    
}




function Sports (props) {
    
    const [sportsPuzzles, setSportsPuzzles] = useState([])

    

    useEffect(() => {
        const getPuzzles = async () => {
            const response = await fetch("http://localhost:3000/genres/sports")
            setSportsPuzzles(await response.json())
        }

        getPuzzles()
        
    }, [])

    return(
        <div >
        <Header />
        
        <div className="genre-container">{sportsPuzzles.map((puzzle) => {
            return (
                <Card key={uniqid()} style={{width: '10rem'}} className="puzzle-card">
                <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>{puzzle.title}</Card.Title>
                                <Card.Text>{puzzle.genre.title}</Card.Text>
                                <Card.Text>{puzzle.description}</Card.Text>
                                <Button className="navigate-button" >Play</Button>
                                </Card.Body>
            </Card>
            )
        })}</div>
        </div>

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
