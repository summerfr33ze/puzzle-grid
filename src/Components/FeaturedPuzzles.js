import {Card} from "react-bootstrap"
import {useState, useRef, useEffect} from 'react'

 function FeaturedPuzzles (props){

    const [currentPuzzlesArray, setCurrentPuzzlesArray] = useState([])

    if (props.type === "home"){
        async function getFeaturedHomePuzzles() {
            const homePuzzles = await fetch(
                //fetchez la vache! 
                //quoi?
            )
        }
    }

    return(
        
            <Card>
            <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>{puzzle.title}</Card.Title>
                            <Card.Text>{puzzle.genre}</Card.Text>
                            <Card.Text>{puzzle.description}</Card.Text>
                            <Button onClick={navigateToReview} className="navigate-button" >Play</Button>
                            </Card.Body>
        </Card>
        
        
        

    )
}

export default FeaturedPuzzles