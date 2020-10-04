import React from 'react';
import TaxImg from '../../../assets/tax.png';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import NextQues from '../../NextQues/NextQues';
import AnswerForm from '../../AnswerForm/AnswerForm';
import  Card  from 'react-bootstrap/Card';

function Tax() {
    return(
<>
<Header />
<Card className="text-center">
  <Card.Header>Question 1</Card.Header>
  <Card.Body>
    <Card.Title>Taxes</Card.Title>
    <Card.Img src={TaxImg} />
    <Card.Text>
      We pay our taxes to the federal government to receive services from the government (i.e. healthcare)
    </Card.Text>
    <AnswerForm />
    <NextQues />
  </Card.Body>
</Card>
<Footer />
</>
    )
}
export default Tax;