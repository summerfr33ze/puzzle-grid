import {useState, useEffect} from 'react'
import {useParams} from 'react-router'
function Puzzle (props){

    const [puzzle, setPuzzle] = useState({})
    const {puzzleId} = useParams()

    useEffect(() => {
        const getPuzzle = async () => {
            fetch(`http://localhost:3000/genres/sports/puzzles/${puzzleId}`)
            .then(response => response.json())
            .then((data) => {setPuzzle(data)})
            
            
        }

        getPuzzle()
        
    }, [])
    return (
        <div>
            <div>{puzzle.title}</div>
        </div>
    )
}

export default Puzzle