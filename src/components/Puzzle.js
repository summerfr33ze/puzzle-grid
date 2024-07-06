import {useState, useEffect, useRef} from 'react'
import {useParams} from 'react-router'
import uniqid from 'uniqid'
import {PlayerNameCell, PlayerAnswerCell} from './Cell'
import {Button} from 'react-bootstrap'
import Timer from './Timer'


function Puzzle (props){
 
    const [puzzle, setPuzzle] = useState({})
    const {puzzleId} = useParams()
    const [hasHappenedOnce, setHasHappenedOnce] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const hasBeenClicked = useRef(false)
    const [isEnded, setIsEnded] = useState(false)

    function endGame (){
        setIsEnded(true)
    }

    const startGame = () => {
        
         setIsPlaying(true)
         
        hasBeenClicked.current = true
        
        
    }

   
    

    useEffect(() => {
        
            
        const getPuzzle = async () => {
            fetch(`http://localhost:3000/genres/sports/puzzles/${puzzleId}`)
            .then(response => response.json())
            .then((data) => {setPuzzle(data)})
            .then(console.log(puzzle))
            
        }
    
        getPuzzle()
        
     
    }, [])

    

    return (
        <div>
            
            <Timer  time={puzzle.play_time} is_playing={isPlaying} puzzleId={puzzleId} has_been_clicked={hasBeenClicked.current} end_game={endGame}/>
            
            
            
            <div className="puzzle">
                
                <div className="puzzle-title" style={{ color: puzzle.colorTwo}}>{puzzle.title}</div>
                <Button size="lg" onClick={startGame} style={{backgroundColor: 'black', color: puzzle.colorTwo}} >Play</Button>
                <div className="puzzle-grid" style={{gridTemplateColumns: `repeat(${puzzle.cells_per_side}, 1fr 2fr)`, gridTemplateRows: `repeat(${puzzle.cells_per_side}, 1fr)`}}>{

                    puzzle.data_array?.map((cellData, i)=> {
                        
                        let uniqId = uniqid()
                        let currentPuzzle = puzzle
                        if(cellData.name){
                            return <PlayerNameCell key={uniqId} id={i} name={cellData.name}/>
                        }
                        else {
                            
                            return <PlayerAnswerCell key={uniqId} id={i} hint={cellData.hint} displayed_answer={cellData.displayed_answer} accepted_answers={cellData.accepted_answers} color_one={puzzle.colorOne} color_two={puzzle.colorTwo} is_playing={isPlaying} end_game={endGame} is_ended={isEnded} has_been_clicked={hasBeenClicked.current}/>
                        }
                    })
                    
                }</div>
                <div className="description" >{puzzle.description}</div>
            </div>
            
            
        </div>
        
        
        
    )
}

export default Puzzle