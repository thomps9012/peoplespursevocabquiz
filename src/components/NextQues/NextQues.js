import React from 'react';
import Button from 'react-bootstrap/Button';

function NextQuestion(){
  return(
    <>
  <div className="mb-2">
    <Button variant="warning" size="lg">
      Next Vocab Word
    </Button>{' '}
  </div>
</>
  )
}

export default NextQuestion;