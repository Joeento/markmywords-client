import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import MarkovCard from './MarkovCard';

import './ResultsCard.css';

class ResultsCard extends Component {
  render() {
    return (
      <Card className="results-card">
        <Card.Body>
          <MarkovCard
            result="Dorothy thought, were lovely patches of the room, now here, or I should have not like a roof, which made it up and as they turned their friend, although they were being rocked gently, like it. He worked hard that she wore a cradle."
            original="Dorothy lived in the midst of the great Kansas prairies, with Uncle Henry, who was a farmer, and Aunt Em, who was the farmer's wife... (see more)" />
          <MarkovCard
            result="the other black beetle bled only black blood but the other black beetle bled only black blood but the other black beetle bled blue"
            original="One black beetle bled only black blood but the other black beetle bled blue" />
          <MarkovCard
            result="the theirs, ok? yes, ok? yes, it is a theremin is, ok? yes, theremin is, this a theremin is a theremin."
            original="the theremin is theirs, ok? yes, it is, this is a theremin." />

          <MarkovCard
            result="theirs, it is, theremin."
            original="the theremin is theirs, ok? yes, it is, this is a theremin." />
        </Card.Body>
      </Card>
    );
  }
}

export default ResultsCard;
