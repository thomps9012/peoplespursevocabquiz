import React, { useState, useEffect } from 'react';
import BudgetPic from '../../../assets/budget.jpg';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import  Card  from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import './Budget.css';

function Budget() {
    const [value, setValue] = useState(' ');
    useEffect(() => {
      localStorage.setItem('Budget definition', value);
    });
      console.log()
    
  
    return(
<>
<Header />
<Card className="text-center">
  <Card.Header>Question 1</Card.Header>
  <Card.Body>
    <Card.Title>Budget</Card.Title>
    <Card.Img src={BudgetPic} />
    <Card.Text>
      Sherry wanted to budget out her next month so that she could pay her rent, electric bills, and have enough money to eat out a few times.
    </Card.Text>
    <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Type Your Definition Here!</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      id="def"
      />
  </InputGroup>
    <Button variant="warning" size="lg" onClick={() => setValue(document.getElementById('def').value)}>
    Next Vocab Word
      </Button>
  </Card.Body>
</Card>
<Footer />
</>
    )
}
export default Budget;