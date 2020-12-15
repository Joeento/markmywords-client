import logo from './logo.svg';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './common/NavigationBar';
import InputCard from './common/cards/InputCard';
import ResultsCard from './common/cards/ResultsCard';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Row className="mt-3 mx-3">
        <Col md={5}>
          <InputCard />
        </Col>
        <Col md={7}>
          <ResultsCard />
        </Col>
      </Row>
    </div>
  );
}

export default App;
