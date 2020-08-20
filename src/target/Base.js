import React, { useState, useReducer } from 'react'
import { InputGroup, FormControl, 
         Card, ListGroup, Button,
        OverlayTrigger, Tooltip } from 'react-bootstrap'
import 'target/game.css'
import Notice from 'target/Notice'

const initialState = [
    'Biblo Baggins',
    'Harry Potter',
    'Pippin Took',
    'Thorin Oakenshield'
]

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [
                ...state, action.payload
            ]
        
        case 'kill':            
            let newState = state.filter((_, index) => index !== action.payload)
            console.log(newState)
            return newState

        default:
            return state
    }
}


const Base = () => {
    const [person, setPerson] = useState('')
    const modal = {} 
    const [state, dispatch] = useReducer(reducer, initialState)

    const life = (person) => {
        console.log(person)
        dispatch({
            type:'add',
            payload: person
        })
        setPerson('')
    }

    const death = (index) => {
        dispatch({type: 'kill', payload: index})
        if (modal.handleShow) {
            modal.handleShow()
        }
    }

    return (
        <div className="base">
            <h1>Life & Death</h1>

            <div>
                <InputGroup className="mb-3 my-3">
                    <FormControl
                        placeholder="Bring a life"
                        value={person}
                        onChange={(e) => setPerson(e.target.value)}
                        aria-label="Bring a life"
                        aria-describedby="basic-addon2"
                    />
                </InputGroup>
                <Button className="btns" onClick={() => life(person)} >Add</Button>
            </div>

            <Card style={{width: 500}}>
                <Card.Header className="bg-success">Living Beings</Card.Header>
                <ListGroup variant="flush">
                 {state.map( (human, index) => {
                     return <ListGroup.Item 
                     key={index+human}
                     style={{textAlign:'center'}}> 
                   
                   { human } 

                     <OverlayTrigger
                       placement='left'
                       overlay={
                           <Tooltip id='tooltip-left'>
                              <strong>Kill</strong>  
                           </Tooltip>
                       }>
                           <Button
                             variant="danger"
                             style={{marginLeft:10}}
                             onClick={() => death(index)}>
                                 <i className="fa fa-heartbeat" />
                           </Button>
                     </OverlayTrigger>
                     </ListGroup.Item>

                   })}
                </ListGroup>
            </Card>
                <Notice modal={modal}/>
        </div>
    )
}

export default Base
