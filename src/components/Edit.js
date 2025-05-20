import {useEffect, useState, useRef} from 'react'
import {useParams} from "react-router"
import {Form, Textarea} from 'react-bootstrap'
import Footer from './Footer'
import Header from './Header'
import EditGrid from './EditGrid'

function Edit(props) {

    

    const [puzzle, setPuzzle] = useState({})
    const params = useParams()
    const puzzleId = params.puzzleId
    const genreId = params.genreId
    const [chosenColorOne, setChosenColorOne] = useState('')
    const [chosenColorTwo, setChosenColorTwo] = useState('')
    const [chosenTitle, setChosenTitle] = useState('')
    const [chosenDescription, setChosenDescription] = useState('')
    const [chosenPlayTime, setChosenPlayTime] = useState('')
    const [chosenGenre, setChosenGenre] = useState('')
    const cellsPerSide = useRef(null)
    const colorOne = useRef(null)
    const colorTwo = useRef(null)
    const hasHappenedOnce = useRef(false)
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const description = useRef(null)
    const playTime = useRef(null)
    const genre = useRef(null)
    const featured = useState(false)
    const jwtToken = sessionStorage.getItem('jwtToken')

    function generateGrid(event){
        event.preventDefault()
        hasHappenedOnce.current = false


        setChosenColorOne(colorOne.current.value || puzzle.color_one)
        setChosenColorTwo(colorTwo.current.value || puzzle.color_two)
        setChosenPlayTime(playTime.current.value || puzzle.play_time)
        setChosenGenre(genre.current.value || puzzle.genre)
        setChosenDescription(description.current.value || puzzle.description)
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

        <div>Puzzle Title: &nbsp;&nbsp; {puzzle.title}</div>
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

        

        
        <Form.Label htmlFor="color-one">Light Color: </Form.Label>
        <Form.Control type="color" name="color-one" style={{width: "100px", border: "none"}} className="choose-color"  ref={colorOne}  defaultValue={puzzle.color_one} />
        <Form.Label htmlFor="color-two">Dark Color: </Form.Label>
        <Form.Control type="color" name="color-two" className="choose-color" ref={colorTwo} style={{width: "100px", border: "none"}} defaultValue={puzzle.color_two}/>
        

        <Form.Label htmlFor="play-time">Playtime: &nbsp;&nbsp;{puzzle.play_time} &nbsp;minutes</Form.Label>
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
        return <EditGrid puzzleId={puzzleId} chosenCellsPerSide={puzzle.cells_per_side} hasHappenedOnce={hasHappenedOnce} title={puzzle.title} description={chosenDescription} playTime={chosenPlayTime} genreId={chosenGenre} featured={featured} colorOne={chosenColorOne} colorTwo={chosenColorTwo}   data={puzzle.data_array} userId={puzzle.userId} />
    }


}

export default Edit