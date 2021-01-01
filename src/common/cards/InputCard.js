import React from 'react';
import { Card, Col, Form, Button } from 'react-bootstrap';
import NumericInput from 'react-numeric-input';

import './InputCard.css';

class InputCard extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      file: null,
      n: 1,
      length: 10,
      prefix: ''
    }

    //this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onSettingChange = this.onSettingChange.bind(this)
    this.setFile = this.setFile.bind(this);
    //this.fileUpload = this.fileUpload.bind(this)
  }

  setFile(e) {
    this.setState({
      file: e.target.files[0]
    });
  }

  onSettingChange(field, value) {
    let state = {};
    state[field] = value;
    this.setState(state);
  }

  render() {
    return (
      <Card>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>
                Choose a file with a block of text and we will transform it into a Markov Chain.
              </Form.Label>
              <Form.File
                id="text-file"
                label="Upload a text file."
                custom
               />
            </Form.Group>
            <Form.Row className="mt-4">
              <Col md={2}>
                <Form.Label className="settings-label">Start With</Form.Label>
              </Col>
              <Col md={6}>
                <Form.Control type="text" placeholder="Enter starting text..." name="prefix" size='20' value={this.state.prefix} onChange={this.onSettingChange} />
              </Col>
            </Form.Row>
            <Form.Row className="mt-4">
              <Col md={2}>
                <Form.Label className="settings-label">Prefix Size</Form.Label>
              </Col>
              <Col md={2}>
                <NumericInput className='form-control' name="n" value={this.state.n} size="2"  min="1" onChange={(e) => this.onSettingChange('n', e)} />
              </Col>
            </Form.Row>
            <Form.Row className="mt-4">
              <Col md={2}>
                <Form.Label className="settings-label">Length</Form.Label>
              </Col>
              <Col md={2}>
                <NumericInput className='form-control' name="length" value={this.state.length} size="2" min="0"  onChange={(e) => this.onSettingChange('length', e)} />
              </Col>
              <Col>
                <Form.Text className="text-muted mt-2">
                  Use "0" to let chain end organically.
                </Form.Text>
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
