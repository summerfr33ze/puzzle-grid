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
    const [cellArray, setCellArray] = useState([])
    const [isPlaying, setIsPlaying] = useState(false)
    const hasBeenClicked = useRef(false)

    const startGame = () => {
        setIsPlaying(true)
        hasBeenClicked.current = true
        console.log(isPlaying)
        
    }

    useEffect(() => {
        if(!hasHappenedOnce){
            
            const getPuzzle = async () => {
                fetch(`http://localhost:3000/genres/sports/puzzles/${puzzleId}`)
                .then(response => response.json())
                .then((data) => {setPuzzle(data)})
            }
    
            getPuzzle()
            setHasHappenedOnce(true)
        }
        else {
            let tempCellArray = []
            
            

            puzzle.data_array.forEach((cellData, i)=>{
                if(cellData.name){
                    let uniqId = uniqid()
                    tempCellArray.push(<PlayerNameCell key={uniqId} id={i} name={cellData.name}/>)
                }
                else {
                    let uniqId = uniqid()
                    tempCellArray.push(<PlayerAnswerCell key={uniqId} id={i} hint={cellData.hint} answer={cellData.answer} color_one={puzzle.color_one} color_two={puzzle.color_two} is_playing={isPlaying}/>)
                }
            })



            setCellArray(tempCellArray)

        }
        
     

        


        
    }, [puzzle])

    return (
        <div>
            <div className="timer">
                <Timer time={puzzle.play_time} is_playing={isPlaying} puzzleId={puzzleId} has_been_clicked={hasBeenClicked.current} />
            </div>
            
            
            <div className="puzzle">
                
                <div className="puzzle-title">{puzzle.title}</div>
                <Button onClick={startGame}>Play</Button>
                <div className="puzzle-grid" style={{gridTemplateColumns: `repeat(${puzzle.cells_per_side}, 1fr 2fr)`, gridTemplateRows: `repeat(${puzzle.cells_per_side}, 1fr)`}}>{cellArray}</div>
                <div className="description">{puzzle.description}</div>
            </div>
        </div>
        
        
        
    )
}

export default Puzzle