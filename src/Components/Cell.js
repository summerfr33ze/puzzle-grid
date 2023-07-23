import {FormGroup} from 'react-bootstrap'

function NameCell(props){
    <FormGroup className="grid-cell">
        <Form.Label htmlFor="cell-name">Cell Name</Form.Label>
        <Form.Control name="cell-name"></Form.Control>
    </FormGroup>
}


function AnswerCell(props) {
    return (
        <FormGroup className="grid-cell" >
            <Form.Label htmlFor="hint">Hint</Form.Label>
            <Form.Control name="hint"></Form.Control>
            <Form.Label htmlFor="answer">Answer</Form.Label>
            <Form.Control name="answer"></Form.Control>
        </FormGroup>
    )
}




