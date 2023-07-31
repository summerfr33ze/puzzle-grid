import {Form, Button} from 'react-bootstrap'
import {useEffect, useState, useRef} from 'react'





function NameCell(props){


    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    useEffect(()=>{
        console.log(props.nameValue)
    },[hasBeenSubmitted])
    
    
    function submitCellData (event){
        event.preventDefault()
        setHasBeenSubmitted(true)
        props.updateDataArray(props.id)
    }

        if (!hasBeenSubmitted){
        return (
            
            <Form className="grid-cell" onSubmit={(event) => submitCellData(event)}>
                <Form.Label htmlFor="cell-name">Name</Form.Label>
                <Form.Control name="cell-name" size="sm" onChange={props.handleNameValueChange}></Form.Control>
                <Button type="submit" hidden></Button>
            </Form>
           
        )
        }
        else {
            return <div className="grid-cell div-cell">{props.nameValue}</div>
        }
    
}



function AnswerCell(props) {

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    

    function submitCellData (event){
        event.preventDefault()
        setHasBeenSubmitted(true)
        props.updateDataArray(props.id)
    }

    
    if(!hasBeenSubmitted){
        return (
        
                <Form  className="grid-cell" onSubmit={(event) => submitCellData(event)}>
                <Form.Label htmlFor="answer" >Answer</Form.Label>
                <Form.Control name="answer" size="sm" onChange={props.handleAnswerValueChange} ></Form.Control>
                <Form.Label htmlFor="hint">Hint</Form.Label>
                <Form.Control name="hint" size="sm" onChange={props.handleHintValueChange} ></Form.Control>
                <button type="submit" hidden></button>
                </Form>
            
        )
    }
    else {
        return (
            <div className="grid-cell div-cell">
                <div>* {props.hintValue} *</div>
                <div>{props.answerValue}</div>
            </div>
        )
    }
        
}

export {NameCell, AnswerCell}



