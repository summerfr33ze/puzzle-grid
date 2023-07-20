import {useEffect, useState, useRef} from 'react'
import {Form} from 'react-bootstrap'

function Create(){

    const cellsPerSide = useRef(null)

    return (
        <Form>
        <Form.Label htmlFor="cells-per-side">How many cells do you want your grid to have per side?</Form.Label>
        <Form.Control type="number" name="cells-per-side"  ref={cellsPerSide}></Form.Control>
        <Form.Label htmlFor="" >Use hex code to choose two colors for your grid</Form.Label>
        <Form.Control type="text" name="" ref={}></Form.Control>
        <Button variant="secondary" className="create-form-button" onClick={(event) => {}}></Button>
        </Form>
    )
    
}