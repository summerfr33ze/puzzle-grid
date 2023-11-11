import {Card} from "react-bootstrap"
import {useState, useRef, useEffect} from 'react'
import {Button} from 'react-bootstrap'

 function FeaturedPuzzles (props){

    const [currentPuzzles, setCurrentPuzzles] = useState([])

    
    

    useEffect(() => {
        const getPuzzles = async () => {
            fetch(`http://localhost:3000/genres/${props.type}`)
            .then(response => response.json())
            .then(data => setCurrentPuzzles(data))
            
        }

        getPuzzles()
        
    }, [])

    return(
        <div >
        <Header />
        
        <div className="genre-container">{currentPuzzles.map((puzzle) => {
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

export default FeaturedPuzzles