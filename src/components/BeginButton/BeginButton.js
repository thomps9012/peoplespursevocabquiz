import React from 'react';
import Button from 'react-bootstrap/Button';

function BeginButton(){
  return(
    <>
  <div className="mb-2">
    <Button variant="warning" size="lg">
      Begin Quiz!
    </Button>{' '}
  </div>
</>
  )
}

export default BeginButton;