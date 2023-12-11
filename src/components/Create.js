import {useEffect, useState, useRef} from 'react'
import {Form} from 'react-bootstrap'
import DynamicGrid from './DynamicGrid'
import uniqid from 'uniqid'
import {NameCell, AnswerCell} from './Cell'

function Create(props){

    
    const [chosenColorOne, setChosenColorOne] = useState("")
    const [chosenColorTwo, setChosenColorTwo] = useState("")
    const [chosenCellsPerSide, setChosenCellsPerSide] = useState(0)
    const [chosenTitle, setChosenTitle] = useState('')
    const [chosenDescription, setChosenDescription] = useState('')
    const [chosenPlayTime, setChosenPlayTime] = useState('')
    const [chosenGenre, setChosenGenre] = useState('')
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

        

        <div className="form-container">


        <Form className="grid-form">

        <Form.Label htmlFor="title">Puzzle Title</Form.Label>
        <Form.Control type="text" name="title"ref={title} className="create-page-input"></Form.Control>

        <Form.Label htmlFor="description">Description</Form.Label>
        <Form.Control type="textarea" name="description" ref={description} className="create-page-input" ></Form.Control>

        <Form.Label htmlFor="genre">Genre</Form.Label>
        <Form.Select name="genre" className="create-page-input" size="sm" ref={genre}>
            <option value="64eece4f4e6db924320059f6">Sports</option>
            <option value="64eecf1e4e6db924320059f7">TV and Movies</option>
            <option value="64eed04d4e6db924320059f8">Numbers</option>
            <option value="64eed10c4e6db924320059f9">Literature</option>
            <option value="64eed17e4e6db924320059fa">Miscellaneous</option>
        </Form.Select>

        <Form.Label htmlFor="cells-per-side">How many cells per side?</Form.Label>
        <Form.Control type="number" name="cells-per-side"  ref={cellsPerSide} className="create-page-input"></Form.Control>

        <Form.Group className="color-container">
        <Form.Label htmlFor="color-one">Choose Two Colors For Your Puzzle, One Light And Then One Dark</Form.Label>
        <Form.Control type="color" style={{width: "100px", border: "none"}} className="choose-color" name="color-one" ref={colorOne}  defaultValue="#7B68EE" />
        <Form.Control type="color" className="choose-color" ref={colorTwo} style={{width: "100px", border: "none"}} defaultValue="#00FA9A"/>
        </Form.Group>

        <Form.Label htmlFor="play-time">How many minutes does the user have to play?</Form.Label>
        <Form.Control type="number" name="play-time"  ref={playTime}></Form.Control>

        

        
        
        <div className="btn-container">
        <button  className="green-txt-btn"  onClick={(event) => {generateGrid(event)}}>Create Grid</button>
        </div>
    
        
        </Form>
        </div>
    
    )
    }
    else {
        return <DynamicGrid chosenCellsPerSide={chosenCellsPerSide} hasHappenedOnce={hasHappenedOnce} title={chosenTitle} description={chosenDescription} playTime={chosenPlayTime} genre={chosenGenre} featured={featured} colorOne={chosenColorOne} colorTwo={chosenColorTwo}/>
    }


        
        
        



    
    
}

export default Create