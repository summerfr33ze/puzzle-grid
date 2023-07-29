import {Form, Button} from 'react-bootstrap'
import {useEffect, useState, useRef} from 'react'





function NameCell(props){

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [nameValue, setNameValue] = useState('')

    const handleChange = (event) => {
        setNameValue(event.target.value)
    }

    
    function submitCellData (event){
        event.preventDefault()
        setHasBeenSubmitted(true)
    }

        if (!hasBeenSubmitted){
        return (
            
            <Form className="grid-cell" onSubmit={(event) => submitCellData(event)}>
                <Form.Label htmlFor="cell-name">Name</Form.Label>
                <Form.Control name="cell-name" size="sm" onChange={handleChange}></Form.Control>
                <Button type="submit" hidden></Button>
            </Form>
           
        )
        }
        else {
            return <div className="grid-cell">{nameValue}</div>
        }
    
}



function AnswerCell(props) {
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [hintValue, setHintValue] = useState("")
    const [answerValue, setAnswerValue] = useState("")

    const handleHintChange = (event) => {
        setHintValue(event.target.value)
    }

    const handleAnswerChange = (event) => {
        setAnswerValue(event.target.value)
    }

    function submitCellData (event){
        event.preventDefault()
        setHasBeenSubmitted(true)

    }

    
    if(!hasBeenSubmitted){
        return (
        
                <Form  className="grid-cell" onSubmit={(event) => submitCellData(event)}>
                <Form.Label htmlFor="answer" >Answer</Form.Label>
                <Form.Control name="answer" size="sm" onChange={handleAnswerChange} ></Form.Control>
                <Form.Label htmlFor="hint">Hint</Form.Label>
                <Form.Control name="hint" size="sm" onChange={handleHintChange} ></Form.Control>
                <button type="submit" hidden></button>
                </Form>
            
        )
    }
    else {
        return (
            <div className="grid-cell div-cell">
                <div>* {hintValue} *</div>
                <div>{answerValue}</div>
            </div>
        )
    }
        
}

export {NameCell, AnswerCell}



