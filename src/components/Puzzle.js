import {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import uniqid from 'uniqid'
import {PlayerNameCell, PlayerAnswerCell} from './Cell'
function Puzzle (props){

    const [puzzle, setPuzzle] = useState({})
    const {puzzleId} = useParams()
    const [hasHappenedOnce, setHasHappenedOnce] = useState(false)
    const [cellArray, setCellArray] = useState([])

    useEffect(() => {
        if(!hasHappenedOnce){
            setHasHappenedOnce(true)
            const getPuzzle = async () => {
                fetch(`http://localhost:3000/genres/sports/puzzles/${puzzleId}`)
                .then(response => response.json())
                .then((data) => {setPuzzle(data)})
            }
    
            getPuzzle()

        }
        else {
            let tempCellArray = []
            for(let cellData of puzzle.data_array){
                if(cellData.name){
                    let uniqId = uniqid()
                    tempCellArray.push(<PlayerNameCell key={uniqId} id={uniqId} name={cellData.name}/>)
                }
                else {
                    let uniqId = uniqid()
                    tempCellArray.push(<PlayerAnswerCell key={uniqId} id={uniqId} hint={cellData.hint} answer={cellData.answer} />)
                }
            }

            setCellArray(tempCellArray)

        }
        
    

        


        
    }, [puzzle])

    return (
        <div className="puzzle">
            <div className="puzzle-title">{puzzle.title}</div>
            

            <div className="puzzle-grid" style={{gridTemplateColumns: `repeat(${puzzle.cells_per_side}, 1fr 2fr)`, gridTemplateRows: `repeat(${puzzle.cells_per_side}, 1fr)`}}>{cellArray}</div>

            <div className="description">{puzzle.description}</div>
        </div>
    )
}

export default Puzzle