import React from 'react';
import Tax from '../../../assets/tax.png';
import Footer from '../../Footer';
import Header from '../../Header';
import NextQues from '../../NextQues';
import AnswerForm from '../../AnswerForm';
import { Card } from 'react-bootstrap/Card';

function Tax() {
<>
<Header />
<Card className="text-center">
  <Card.Header>Question 1</Card.Header>
  <Card.Body>
    <Card.Title>Taxes</Card.Title>
    <Card.Img src={Tax} />
    <Card.Text>
      We pay our taxes to the federal government to receive services from the government (i.e. healthcare)
    </Card.Text>
    <AnswerForm />
    <NextQues />
  </Card.Body>
</Card>
<Footer />
</>
}
export default Tax;