
import {useState, useRef, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'
import uniqid from 'uniqid'
import Link from 'react-router-dom'

 function FeaturedPuzzles (props){

    const [currentPuzzles, setCurrentPuzzles] = useState([])
    const navigate = useNavigate()

    // capitalize first letter of genre to display on title
    const firstLetter = props.type.charAt(0)
    const capFirstLetter = firstLetter.toUpperCase()
    const capitalized = capFirstLetter + props.type.slice(1)
    
    


    useEffect(() => {
        const getPuzzles = async () => {
            fetch(`http://localhost:3000/genres/${props.type}`)
            .then(response => response.json())
            .then(data => setCurrentPuzzles(data))
            
        }

        getPuzzles()
        
    }, [])

    return(
        <div>

        
        <div class="genre-title">{capitalized + " Puzzles" }</div>
        
        
        <div className="genre-container">{
        
            currentPuzzles.map((puzzle) => {
            let puzzleId = puzzle._id
            const navigateToPuzzle = () => navigate(`puzzles/${puzzleId}`)
            
            return (
                <Card key={uniqid()} className="puzzle-card">
                <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>{puzzle.title}</Card.Title>
                                <Card.Text>{puzzle.genre.title}</Card.Text>
                                <Card.Text>{puzzle.description}</Card.Text>
                                <Button className="puzzle-card-button" onClick={navigateToPuzzle}>Play</Button>
                                </Card.Body>
            </Card>
            )
        })}</div>
        </div>

    )
}

export default FeaturedPuzzles