
import {useState, useRef, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'
import uniqid from 'uniqid'
import Link from 'react-router-dom'

 function FeaturedPuzzles (props){

    const [currentPuzzles, setCurrentPuzzles] = useState([])
    const navigate = useNavigate()

    // capitalize first letter of genre to display on title
 
   
    


    useEffect(() => {

        
        const getPuzzles = async () => {
            fetch(`http://localhost:3000/genres/${props.type}`)
            .then(response => response.json())
            .then(data => setCurrentPuzzles(data))
        }

        getPuzzles()
        
    }, [])

    return(
        <div className="featured-puzzles">

        
        <div className="genre-title">{props.type + " Puzzles" }</div>
        
        
        <div className="genre-container">{
        
            currentPuzzles.map((puzzle) => {
            let puzzleId = puzzle._id
            let genre = puzzle.genre.title
            console.log(props.type, genre)
            console.log(puzzle)
            const navigateToPuzzle = () => navigate(`/genres/${genre}/puzzles/${puzzleId}`)
            
            if(genre === props.type){
                return (
                    <Card style={{border: "3px solid black"}} key={uniqid()} className="puzzle-card">
                    <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title>{puzzle.title}</Card.Title>
                                    <Card.Text>{puzzle.genre.title}</Card.Text>                                
                                    <button className="card-play-btn" onClick={navigateToPuzzle}>Play</button>
                                    </Card.Body>
                </Card>
                )
            }
            
        })}</div>
        </div>

    )
}

export default FeaturedPuzzles