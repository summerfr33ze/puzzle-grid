import {useEffect, useState, useRef} from 'react'
import {Form} from 'react-bootstrap'
import DynamicGrid from './DynamicGrid'

function Create(props){

    const cellsPerSide = useRef(null)
    const colorOne = useRef(null)
    const colorTwo = useRef(null)
    const hasHappenedOnce = useRef(false)

    const [chosenColorOne, setchosenColorOne] = useState("")
    const [chosenColorTwo, setchosenColorTwo] = useState("")
    const [chosenCellsPerSide, setChosenCellsPerSide] = useState(0)

    function generateGrid(e){
        hasHappenedOnce.current = false
        e.preventDefault()
        setchosenColorOne(colorOne.current.value)
        setchosenColorTwo(colorTwo.current.value)
        setChosenCellsPerSide(cellsPerSide.current.value)
        
    }

    return (
        <div className="create-page">
        <Form className="grid-form">
        <Form.Label htmlFor="cells-per-side">How many cells per side?</Form.Label>
        <Form.Control type="number" name="cells-per-side"  ref={cellsPerSide}></Form.Control>

        <Form.Group className="color-container">
        <Form.Label htmlFor="color-one">Choose Two Colors For Your Grid</Form.Label>
        <Form.Control type="color" className="choose-color" name="color-one" ref={colorOne}></Form.Control>
        <Form.Control type="color" className="choose-color" ref={colorTwo}></Form.Control>
        </Form.Group>

        <button  className="grid-gen-button" onClick={(event) => {generateGrid(event)}}>Create Grid</button>
        </Form>

        <DynamicGrid hasHappenedOnce={hasHappenedOnce} chosenColorOne={chosenColorOne} chosenColorTwo={chosenColorTwo} chosenCellsPerSide={chosenCellsPerSide} />
        </div>
        


    )
    
}

export default Create