import {useEffect, useState, useRef} from 'react'
import {Form} from 'react-bootstrap'

function Create(props){

    const cellsPerSide = useRef(null)
    const colorOne = useRef(null)
    const colorTwo = useRef(null)

    const [chosenColorOne, setchosenColorOne] = useState("")
    const [chosenColorTwo, setchosenColorTwo] = useState("")
    const [chosenCellsPerSide, setChosenCellsPerSide] = useState("")

    function generateGrid(e){
        e.preventDefault()
        setchosenColorOne(colorOne.current.value)
        setchosenColorTwo(colorTwo.current.value)
        setChosenCellsPerSide(cellsPerSide.current.value)
    }

    return (
        <div>
        <Form>
        <Form.Label htmlFor="cells-per-side">How many cells per side?</Form.Label>
        <Form.Control type="number" name="cells-per-side"  ref={cellsPerSide}></Form.Control>

        <Form.Fieldset>
        <Form.Legend>Choose two colors for your grid</Form.Legend>
        <Form.Control type="color" class="choose-color" ref={colorOne}></Form.Control>
        <Form.Control type="color" class="choose-color" ref={colorTwo}></Form.Control>
        </Form.Fieldset>

        <Button variant="secondary" className="grid-gen-button" onClick={(event) => {generateGrid(event)}}></Button>
        </Form>

        <DynamicGrid chosenColorOne={chosenColorOne} chosenColorTwo={chosenColorTwo} chosenCellsPerSide={chosenCellsPerSide} />
        </div>
        


    )
    
}

export default Create