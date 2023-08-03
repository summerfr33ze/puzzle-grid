import {useEffect, useState, useRef} from 'react'
import {Form} from 'react-bootstrap'
import DynamicGrid from './DynamicGrid'
import uniqid from 'uniqid'
import {NameCell, AnswerCell} from './Cell'

function Create(props){

    const cellsPerSide = useRef(null)
    const colorOne = useRef(null)
    const [dataArray, setDataArray] = useState([])
    const colorTwo = useRef(null)
    const [chosenColorOne, setChosenColorOne] = useState("")
    const [chosenColorTwo, setChosenColorTwo] = useState("")
    const [chosenCellsPerSide, setChosenCellsPerSide] = useState(0)
    const hasHappenedOnce = useRef(false)



    function generateGrid(event){
        event.preventDefault()
        hasHappenedOnce.current = false
        setChosenColorOne(colorOne.current.value)
        setChosenColorTwo(colorTwo.current.value)
        setChosenCellsPerSide(cellsPerSide.current.value)
        
        
        
    }

    function submitPuzzle(event){
        event.preventDefault()
        
    }

    

    

    
    



    return (
        <div className="create-page">
        <Form className="grid-form">
        <Form.Label htmlFor="cells-per-side">How many cells per side?</Form.Label>
        <Form.Control type="number" name="cells-per-side"  ref={cellsPerSide}></Form.Control>

        <Form.Group className="color-container">
        <Form.Label htmlFor="color-one">Choose Two Colors For Your Puzzle</Form.Label>
        <Form.Control type="color" className="choose-color" name="color-one" ref={colorOne}></Form.Control>
        <Form.Control type="color" className="choose-color" ref={colorTwo}></Form.Control>
        </Form.Group>
        
        <div className="btn-container">
        <button  className="green-txt-btn"  onClick={(event) => {generateGrid(event)}}>Create Grid</button>
        <button className="green-txt-btn" onClick={(event) => {submitPuzzle(event)}}>Submit Puzzle</button>
        </div>
        
        </Form>

        <DynamicGrid chosenCellsPerSide={chosenCellsPerSide} hasHappenedOnce={hasHappenedOnce} />
        </div>
        


    )
    
}

export default Create