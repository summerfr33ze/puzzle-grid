import {Form, Button} from 'react-bootstrap'
import {useEffect, useState, useRef} from 'react'





function NameCell(props){

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const cellName = useRef(null)
    const currentCellName = useRef('')

    
    function submitCellData (e){
        e.preventDefault()
        setHasBeenSubmitted(true)
    }

    useEffect(() => {
       currentCellName.current = cellName
    }, [hasBeenSubmitted])

        if (!hasBeenSubmitted){
        return (
            
            <Form className="grid-cell" onSubmit={(e) => submitCellData(e)}>
                <Form.Label htmlFor="cell-name">Name</Form.Label>
                <Form.Control name="cell-name" ref={cellName}></Form.Control>
                <Button type="submit"></Button>
            </Form>
           
        )
        }
        else {
            return <div></div>
        }
    
}



function AnswerCell(props) {
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const hint = useRef(null)
    const answer = useRef(null)
    const currentHint = useRef(null)
    const currentAnswer = useRef(null)

    function submitCellData (e){
        e.preventDefault()
        setHasBeenSubmitted(true)

    }

    useEffect(()=>{
        currentHint.current = hint.current.value
        currentAnswer.current = answer.current.value
    }, [hasBeenSubmitted])
    
    if(!hasBeenSubmitted){
        return (
        
                <Form  className="grid-cell" onSubmit={(e) => submitCellData(e)}>
                <Form.Label htmlFor="answer">Answer</Form.Label>
                <Form.Control name="answer" ref={answer}></Form.Control>
                <Form.Label htmlFor="hint">Hint</Form.Label>
                <Form.Control name="hint" ref={hint}></Form.Control>
                </Form>
            
        )
    }
    else {
        return (
            <div className="grid-cell div-cell">
                <div>*{currentHint}*</div>
                <div>{currentAnswer}</div>
            </div>
        )
    }
        
}

export {NameCell, AnswerCell}



