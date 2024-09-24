import React from 'react'
import {Button , Card, Col} from 'react-bootstrap'

const HeroesListItem =(props)=>
{
    
   const{ name, thumbnail }= props.info;
     
    
    return (      
            <Col sm={4}> 
            <Card style={{"marginBottom":"2em", }} >
                <center>
                    <img alt={name} src={thumbnail.path+"/portrait_xlarge."+thumbnail.extension} 
                    style={{ "marginTop":"1em"}}/>
                
                    <Card.Body>
                        <Card.Title> {name}</Card.Title> 
                        <Button variant="primary">Details</Button>
                    </Card.Body>
                </center>
                </Card> 
                <br></br> 
            </Col>
        
        
       
    );
};

export default HeroesListItem;