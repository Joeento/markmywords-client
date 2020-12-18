import logo from './logo.svg';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './common/NavigationBar';
import InputCard from './common/cards/InputCard';
import ResultsCard from './common/cards/ResultsCard';
import Footer from './common/Footer';

function App() {
  return (
    <div className="App">
      <Container>
        <NavigationBar />
        <Row className="mt-3 mx-3">
          <Col sm={5}>
            <InputCard />
          </Col>
          <Col sm={7}>
            <ResultsCard />
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
