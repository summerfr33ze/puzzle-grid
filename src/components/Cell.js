import {Form, Button} from 'react-bootstrap'
import {useEffect, useState, useRef} from 'react'





function NameCell(props){


    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [nameValue, setNameValue] = useState('')

    

       
    function submitCellData (event){
        event.preventDefault()
        setHasBeenSubmitted(true)

        
        let tempDataArray = props.dataArray.current
        console.log(tempDataArray)
        for(let cellData of tempDataArray){
        if(cellData.id === props.id){
        cellData.name = nameValue
        }
        }
       

    props.dataArray.current = tempDataArray
        
    }
    
    

        if (!hasBeenSubmitted){
        return (
            
            <Form className="grid-cell" onSubmit={(event) => submitCellData(event)}>
                <Form.Label htmlFor="cell-name">Name</Form.Label>
                <Form.Control name="cell-name" size="sm" onChange={(event) => {setNameValue(event.target.value)}}></Form.Control>
                <Button type="submit" hidden></Button>
            </Form>
           
        )
        }
        else {
            return <div className="grid-cell div-cell">{nameValue}</div>
        }
    
}



function AnswerCell(props) {

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [answerValue, setAnswerValue] = useState('')
    const [hintValue, setHintValue] = useState('')
    
    
    function submitCellData (event){
        event.preventDefault()
        setHasBeenSubmitted(true)

        
        let tempDataArray = props.dataArray.current
        console.log(tempDataArray)
        for(let cellData of tempDataArray){
        if(cellData.id === props.id){
        cellData.answer = answerValue
        cellData.hint = hintValue
        }

       

        props.dataArray.current = tempDataArray
        
    }
}
    
    if(!hasBeenSubmitted){
        return (
        
                <Form  className="grid-cell" onSubmit={(event) => submitCellData(event)}>
                <Form.Label htmlFor="answer" >Answer</Form.Label>
                <Form.Control name="answer" className="answer" size="sm" onChange={(event) => {setAnswerValue(event.target.value)}} ></Form.Control>
                <Form.Label htmlFor="hint">Hint</Form.Label>
                <Form.Control name="hint" size="sm" onChange={(event) => {setHintValue(event.target.value)}} ></Form.Control>
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

function PlayerNameCell(props) {
    return (
        <div className="grid-cell div-cell">
            <div>{props.name}</div>
        </div>
        )
}

function PlayerAnswerCell(props) {
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [answerValue, setAnswerValue] = useState('')

    function submitAnswerData(event){
        event.preventDefault()
        setHasHappened(true)

    }

    if(!hasBeenSubmitted){
        return (
            <div>
                <Form  className="grid-cell" onSubmit={(event) => submitAnswerData(event)}>
                <Form.Control name="answer" className="answer" size="sm" onChange={(event) => {setAnswerValue(event.target.value)}} ></Form.Control>
                <button type="submit" hidden></button>
                </Form>
                <div>{props.hint}</div>
            </div>  
        )
    }
    else {

        return (
            <div className="grid-cell div-cell">
                <div>* {props.answer} *</div>
                <div>{props.hint}</div>
                
            </div>
        )
    }
}



export {NameCell, AnswerCell, PlayerNameCell, PlayerAnswerCell}



