import React from 'react'
import {useState, useRef, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'
import uniqid from 'uniqid'
import {useParams} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'


function MyPuzzles (props){
    const {currentUsername} = useParams()
    const [currentPuzzles, setCurrentPuzzles] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        
        
       
        const getPuzzles = async () => {
            const jwtToken = sessionStorage.getItem('jwtToken')
            fetch(`http://localhost:3000/mypuzzles/${currentUsername}`, {
                method: 'GET',
                headers: {
                    "authorization": `Bearer ${jwtToken}` 
                }
            })
            .then(response => response.json())
            .then(data => setCurrentPuzzles(data))

           
            
            
            
        }

        getPuzzles()
        
    }, [])

    return (
        
        <div className="genre-page">
        <Header />

        <div className="featured-puzzles">

        
        <div className="genre-title">My Puzzles</div>
        
        
        <div className="genre-container">{
        
            currentPuzzles.map((puzzle) => {
            console.log(puzzle)
            let puzzleId = puzzle._id
            let genreId = puzzle.genre.title
            const navigateToPuzzle = () => navigate(`/genres/${genreId}/puzzles/${puzzleId}`)
            const navigateToEdit = () => navigate(`/genres/${genreId}/puzzles/${puzzleId}/edit`)
            return (
                <Card style={{border: "3px solid black"}} key={uniqid()} className="puzzle-card">
                <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>{puzzle.title}</Card.Title>
                                <Card.Text>{puzzle.genre.title}</Card.Text>
                                <div className="button-container">
                                    <button className="card-play-btn" onClick={navigateToPuzzle}>Play</button>
                                    <button className="card-play-btn" onClick={navigateToEdit}>Edit</button>
                                </div>
                                
                                </Card.Body>
            </Card>
            )
        })}</div>
        </div>

        <Footer />
        </div>
        
        
    )
}

export default MyPuzzles