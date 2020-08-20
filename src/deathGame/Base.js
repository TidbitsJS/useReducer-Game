import React, { useState, useReducer } from 'react'
import { InputGroup, FormControl, 
         Card, ListGroup, Button,
        OverlayTrigger, Tooltip } from 'react-bootstrap'
import 'deathGame/game.css'
import Notice from 'deathGame/Notice'

const initialState = {
    items: [{
        hp: 100,
        name: 'Bilbo Baggins'
    }, {
        hp: 80,
        name: 'Harry Potter'
    }, {
        hp: 60,
        name: 'Pippin Took'
    }, {
        hp: 50,
        name: 'Thorin Oakenshield'
    }]
};


const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            let sethp = Math.floor((Math.random() * 100 ) + 1)
            let newItems = JSON.parse(JSON.stringify(state.items))
            newItems.push({ name: action.payload, hp: sethp })
            return {...state, items: newItems}        
        
        case 'kill':
            let randomHp =  Math.floor((Math.random() * 100) + 1)
            console.log("randomHp, value",randomHp, action.value)
            if(randomHp >= action.value) {
                let newItemsK = (state.items).filter((_, index) => (index) !== action.payload)
                action.letter('Death has been Summoned')
                return {...state, items: newItemsK}
            } else {
                action.letter('You Shall not Pass')
                return state
            }          

        default:
            return state
    }
}


const Base = () => {
    const [person, setPerson] = useState('')
    const [message, setMessage] = useState('You Shall not Pass')
    const modal = {} 
    const [state, dispatch] = useReducer(reducer, initialState)

    const life = (person) => {
        console.log(person)
        if(person === '') return
        dispatch({
            type:'add',
            payload: person
        })
        setPerson('')
    }

    const death = (power, index, setMessage) => {
        dispatch({type: 'kill', 
            payload: index, 
            value: power,
            letter: setMessage})

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

            <Card style={{width: 500}} className="cards">
                <Card.Header className="bg-success" style={{fontSize: 21}}>
                    Living the Dreams 
                    <i className="fa fa-heart" style={{color:'red', marginLeft: 10}}></i>
                </Card.Header>
                <ListGroup variant="flush">
                 {(state.items).map( (human, index) => {
                     return <ListGroup.Item 
                     key={index}
                     style={{textAlign:'center'}}> 
                   
                   { human.name } 

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
                             onClick={() => death(human.hp, index, setMessage)}>
                                 <i className="fa fa-heartbeat" />
                           </Button>
                     </OverlayTrigger>
                     </ListGroup.Item>

                   })}
                </ListGroup>
            </Card>
                <Notice modal={modal} message={message}/>
        </div>
    )
}

export default Base
