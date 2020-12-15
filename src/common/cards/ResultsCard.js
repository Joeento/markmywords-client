import React, { Component } from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import NumericInput from 'react-numeric-input';

//import './ResultsCard.css';

class ResultsCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            this is where the results will go.
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ResultsCard;
