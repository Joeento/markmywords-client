import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import './MarkovCard.css';

class MarkovCard extends Component {
  render() {
    return (
      <Card className="markov-card">
        <Card.Body>
          <span className="result-text">{this.props.result}</span>
          <br />
          <div className="float-right">
            <small className="text-muted">5 minutes ago</small>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div className="original-text">
            <strong>Original: </strong> {this.props.original}
          </div>
        </Card.Footer>
      </Card>
    );
  }
}

export default MarkovCard;
