import {useEffect, useState, useRef, useParams} from 'react'
import {Form} from 'react-bootstrap'
import Footer from './Footer'
import Header from './Header'
import DynamicGrid from './DynamicGrid'

function Edit(props) {

    useEffect(() => {
        


        const getPuzzle = async () => {
            fetch(`http://localhost:3000/genres/sports/puzzles/${puzzleId}`)
            .then(response => response.json())
            .then((data) => {setPuzzle(data)})
            .then(console.log(puzzle))
            
        }
    
        getPuzzle()
        
     
    }, [])

    const [puzzle, setPuzzle] = useState({})
    const {puzzleId} = useParams()
    const [chosenColorOne, setChosenColorOne] = useState(puzzle.color_one)
    const [chosenColorTwo, setChosenColorTwo] = useState(puzzle.color_two)
    const [chosenCellsPerSide, setChosenCellsPerSide] = useState(puzzle.cells_per_side)
    const [chosenTitle, setChosenTitle] = useState(puzzle.title)
    const [chosenDescription, setChosenDescription] = useState(puzzle.description)
    const [chosenPlayTime, setChosenPlayTime] = useState(puzzle.play_time)
    const [chosenGenre, setChosenGenre] = useState(puzzle.genre.title)
    const cellsPerSide = useRef(puzzle.cells_per_side)
    const colorOne = useRef(puzzle.color_one)
    const colorTwo = useRef(puzzle.color_two)
    const hasHappenedOnce = useRef(false)
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const title = useRef(puzzle.title)
    const description = useRef(puzzle.description)
    const playTime = useRef(puzzle.play_time)
    const genre = useRef(puzzle.genre.title)
    const featured = useState(false)

    function generateGrid(event){
        event.preventDefault()
        hasHappenedOnce.current = false
        setChosenColorOne(colorOne.current.value)
        setChosenColorTwo(colorTwo.current.value)
        setChosenCellsPerSide(cellsPerSide.current.value)
        setHasBeenSubmitted(true)
        setChosenTitle(title.current.value)
        setChosenPlayTime(playTime.current.value)
        setChosenGenre(genre.current.value)
        setChosenDescription(description.current.value)
        
    }

    
    

    if (hasBeenSubmitted === false){
    return (
        <div className="create-page">

        <Header />

        <div className="form-container">
        

        <Form className="grid-form">

        <Form.Label htmlFor="title" >Puzzle Title: {puzzle.title}</Form.Label>
        <Form.Control type="text" name="title"ref={title} className="create-page-input"></Form.Control>

        <Form.Label htmlFor="description">Description: {puzzle.description}</Form.Label>
        <Form.Control type="textarea" name="description" ref={description} className="create-page-input" ></Form.Control>

        <Form.Label htmlFor="genre">Genre: {puzzle.genre.title}</Form.Label>
        <Form.Select name="genre" className="create-page-input" size="sm" ref={genre}>
            <option value="64eece4f4e6db924320059f6">Sports</option>
            <option value="64eecf1e4e6db924320059f7">TV and Movies</option>
            <option value="64eed04d4e6db924320059f8">Numbers</option>
            <option value="64eed10c4e6db924320059f9">Literature</option>
            <option value="64eed17e4e6db924320059fa">Miscellaneous</option>
        </Form.Select>

        <Form.Label htmlFor="cells-per-side">Number of cells per side: {puzzle.cells_per_side}</Form.Label>
        <Form.Control type="number" name="cells-per-side"  ref={cellsPerSide} className="create-page-input"></Form.Control>

        <Form.Group className="color-container">
        <Form.Label htmlFor="color-one">Light Color: {puzzle.color_one} Dark Color: {puzzle.color_two} </Form.Label>
        <Form.Control type="color" style={{width: "100px", border: "none"}} className="choose-color" name="color-one" ref={colorOne}  defaultValue={puzzle.color_one} />
        <Form.Control type="color" className="choose-color" ref={colorTwo} style={{width: "100px", border: "none"}} defaultValue={puzzle.color_two}/>
        </Form.Group>

        <Form.Label htmlFor="play-time">Playtime: {puzzle.play_time}</Form.Label>
        <Form.Control type="number" name="play-time"  ref={playTime}></Form.Control>

        

        
        
        <div className="btn-container">
        <button  className="green-txt-btn create-grid-button"  onClick={(event) => {generateGrid(event)}}>Create Grid</button>
        </div>
    
        
        </Form>

        

        </div>

    <Footer />

    </div>
    
    )
    }
    else {
        return <DynamicGrid chosenCellsPerSide={chosenCellsPerSide} hasHappenedOnce={hasHappenedOnce} title={chosenTitle} description={chosenDescription} playTime={chosenPlayTime} genre={chosenGenre} featured={featured} colorOne={chosenColorOne} colorTwo={chosenColorTwo}/>
    }


}

export default Edit