import React, { useState, useEffect } from 'react';
import FiscalYear from '../../../assets/fiscal.jpg';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import  Card  from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import './Tax.css';

function Tax() {
    const [value, setValue] = useState(' ');
    useEffect(() => {
      localStorage.setItem('fiscal year definition', value);
    });
      console.log()
    
  
    return(
<>
<Header />
<Card className="text-center">
  <Card.Header>Question 1</Card.Header>
  <Card.Body>
    <Card.Title>Fiscal Year</Card.Title>
    <Card.Img src={FiscalYear} />
    <Card.Text>
      The financial operations of the federal government are carried out throughout the fiscal year.
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
export default Tax;