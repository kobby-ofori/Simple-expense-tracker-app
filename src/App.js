import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TrackerForm from "./components/TrackerForm";
import { Col, Container, Row } from "react-bootstrap";
import TrackerList from "./components/TrackerList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Header />
        </Row>
        <Row>
          <Col md="6" xs="12">
            <TrackerForm />
          </Col>
          <Col md="6" xs="12">
            <TrackerList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
