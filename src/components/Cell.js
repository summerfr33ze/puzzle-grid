import {Form, Button} from 'react-bootstrap'
import {useEffect, useState, useRef} from 'react'





function NameCell(props){


    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [nameValue, setNameValue] = useState('')

    useEffect(()=>{
            let tempArray = props.dataArray
            for(let cellData in tempArray){
                if(cellData.key === props.id){
                    cellData.name = nameValue
                }
                else{return}
            }
            props.setDataArray(tempArray)
        

        
    },[hasBeenSubmitted])

       
    
    
    
    function submitCellData (event){
        event.preventDefault()
        setHasBeenSubmitted(true)
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
    
    useEffect(()=>{

        props.answerCellUpdatesDataArray(props.id,answerValue, hintValue)

    },[hasBeenSubmitted])

    function submitCellData (event){
        event.preventDefault()
        setHasBeenSubmitted(true)
    }

    
    if(!hasBeenSubmitted){
        return (
        
                <Form  className="grid-cell" onSubmit={(event) => submitCellData(event)}>
                <Form.Label htmlFor="answer" >Answer</Form.Label>
                <Form.Control name="answer" size="sm" onChange={(event) => {setAnswerValue(event.target.value)}} ></Form.Control>
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

export {NameCell, AnswerCell}



