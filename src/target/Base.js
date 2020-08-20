import React, { useState } from 'react'
import { InputGroup, FormControl, 
         Card, ListGroup, Button,
        OverlayTrigger, Tooltip } from 'react-bootstrap'
import 'target/game.css'


const Base = () => {
    const [person, setPerson] = useState('')
    const [people, setPeople] = useState([ 'Bilbo Baggins','Thorin Oakenshield', 'Pippin Took','Samwise Gamgee'])

    const addPerson = () => {
        console.log(`Hello ${person}`);
        people.push(person)
        console.log(people)
        setPerson('')
    }

    const death = (key) => {
        people.splice(key,1)
        console.log(people)
        setPeople(people)
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
                <Button className="btns" onClick={() => addPerson()} >Add</Button>
            </div>

            <Card style={{width: 400}}>
                <Card.Header className="bg-success">Living</Card.Header>
                <ListGroup variant="flush">
                   { people.map((human, index) => {
                       console.log("Render",people)
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
                    }) }
                </ListGroup>
            </Card>

        </div>
    )
}

export default Base
