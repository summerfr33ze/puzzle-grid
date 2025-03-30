import {useEffect, useState, useRef} from 'react'
import {useParams} from "react-router"
import {Form, Textarea} from 'react-bootstrap'
import Footer from './Footer'
import Header from './Header'
import DynamicGrid from './DynamicGrid'

function Edit(props) {

    

    const [puzzle, setPuzzle] = useState({})
    const params = useParams()
    const puzzleId = params.puzzleId
    const genreId = params.genreId
    const [chosenColorOne, setChosenColorOne] = useState(puzzle.color_one)
    const [chosenColorTwo, setChosenColorTwo] = useState(puzzle.color_two)
    const [chosenCellsPerSide, setChosenCellsPerSide] = useState(puzzle.cells_per_side)
    const [chosenTitle, setChosenTitle] = useState(puzzle.title)
    const [chosenDescription, setChosenDescription] = useState(puzzle.description)
    const [chosenPlayTime, setChosenPlayTime] = useState(puzzle.play_time)
    const [chosenGenre, setChosenGenre] = useState(puzzle.genre)
    const cellsPerSide = useRef(null)
    const colorOne = useRef(null)
    const colorTwo = useRef(null)
    const hasHappenedOnce = useRef(false)
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const title = useRef(null)
    const description = useRef(null)
    const playTime = useRef(null)
    const genre = useRef(null)
    const featured = useState(false)
    const jwtToken = sessionStorage.getItem('jwtToken')

    function generateGrid(event){
        event.preventDefault()
        hasHappenedOnce.current = false


        setChosenColorOne(colorOne.current.value || chosenColorOne)
        setChosenColorTwo(colorTwo.current.value || chosenColorTwo)
        setChosenCellsPerSide(cellsPerSide.current.value || chosenCellsPerSide)
        setChosenTitle(title.current.value || chosenTitle)
        setChosenPlayTime(playTime.current.value || chosenPlayTime)
        setChosenGenre(genre.current.value ||chosenGenre)
        setChosenDescription(description.current.value || chosenDescription)
        setHasBeenSubmitted(true)
        
    }

    useEffect(()=>{
        fetch(`http://localhost:3000/genres/${genreId}/puzzles/${puzzleId}`, {
            method: 'GET',
            headers: {
                "authorization": `Bearer ${jwtToken}`
            },
            
        })
        .then(response => response.json())
        .then((data) => {setPuzzle(data)})
        
        
    }, [])

    
    

    if (hasBeenSubmitted === false){
    return (
        <div className="create-page">

        <Header />

        <div className="form-container">
        

        <Form className="grid-form">

        <Form.Label htmlFor="title" >Puzzle Title: &nbsp;&nbsp; {`  ${puzzle.title}`}</Form.Label>
        <Form.Control type="text" name="title" ref={title} className="create-page-input"></Form.Control>

        <Form.Label htmlFor="description">Description: &nbsp;&nbsp; {puzzle.description}</Form.Label>
        <Form.Control  name="description" ref={description} className="create-page-input" ></Form.Control>

        <Form.Label htmlFor="genre">Genre: {}</Form.Label>
        <Form.Select name="genre" className="create-page-input" size="sm" ref={genre}>
            <option value="64eece4f4e6db924320059f6">Sports</option>
            <option value="64eecf1e4e6db924320059f7">TV and Movies</option>
            <option value="64eed04d4e6db924320059f8">Numbers</option>
            <option value="64eed10c4e6db924320059f9">Literature</option>
            <option value="64eed17e4e6db924320059fa">Miscellaneous</option>
        </Form.Select>

        <Form.Label htmlFor="cells-per-side">Number of cells per side: &nbsp;&nbsp; {puzzle.cells_per_side}</Form.Label>
        <Form.Control type="number" name="cells-per-side"  ref={cellsPerSide} className="create-page-input"></Form.Control>

        
        <Form.Label htmlFor="color-one">Light Color: </Form.Label>
        <Form.Control type="color" name="color-one" style={{width: "100px", border: "none"}} className="choose-color"  ref={colorOne}  defaultValue={puzzle.color_one} />
        <Form.Label htmlFor="color-two">Dark Color: </Form.Label>
        <Form.Control type="color" name="color-two" className="choose-color" ref={colorTwo} style={{width: "100px", border: "none"}} defaultValue={puzzle.color_two}/>
        

        <Form.Label htmlFor="play-time">Playtime: &nbsp;&nbsp;{puzzle.play_time}</Form.Label>
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
        return <DynamicGrid puzzle_id={puzzleId} chosenCellsPerSide={chosenCellsPerSide} hasHappenedOnce={hasHappenedOnce} title={chosenTitle} description={chosenDescription} playTime={chosenPlayTime} genre={chosenGenre} featured={featured} colorOne={chosenColorOne} colorTwo={chosenColorTwo}  type="edit" data_array={puzzle.data_array}/>
    }


}

export default Edit