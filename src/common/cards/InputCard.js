import React, { Component } from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import NumericInput from 'react-numeric-input';

import './InputCard.css';

class InputCard extends Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                Choose a file with a block of text and we will transform it into a Markov Chain.
              </Form.Label>
              <Form.File
                id="text-file"
                label="Upload a text file."
                custom />
            </Form.Group>
            <Form.Row className="mt-4">
              <Col md={2}>
                <Form.Label className="settings-label">Start With</Form.Label>
              </Col>
              <Col md={6}>
                <Form.Control type="text" placeholder="Enter starting text..." size='20' />
              </Col>
            </Form.Row>
            <Form.Row className="mt-4">
              <Col md={2}>
                <Form.Label className="settings-label">Prefix Size</Form.Label>
              </Col>
              <Col md={2}>
                <NumericInput className='form-control' value="3" size="2" />
              </Col>
            </Form.Row>
            <Form.Row className="mt-4">
              <Col md={2}>
                <Form.Label className="settings-label">Length</Form.Label>
              </Col>
              <Col md={2}>
                <NumericInput className='form-control' value="20" size="2" />
              </Col>
            </Form.Row>
            <Button variant="success" type="submit" size="lg" className="float-right">
              Generate!
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default InputCard;
