import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HomePageComponent() {
  return (
    <div className='homeBg'>
      <Row className='g-0'>
        <Col xs={1}></Col>
        <Col xs={10}>
          <div className='boxDiv'>
            <div className='box d-flex justify-content-center align-items-center'>
              <h1 className='homeTxt'>Choose an api</h1>
            </div>
          </div>
        </Col>
        <Col xs={1}></Col>
      </Row>
      <p className='darkBlue homeRules'>*Instructions: HAVE FUN!(scroll down if you don't see intructions for api's)</p>
    </div>
  )
}
