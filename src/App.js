import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TrackerForm from "./components/TrackerForm";
import { Container } from "react-bootstrap";
import TrackerList from "./components/TrackerList";

function App() {
  return (
    <Container>
      <TrackerForm />
      <TrackerList />
    </Container>
  );
}

export default App;
