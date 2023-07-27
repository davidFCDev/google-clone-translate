import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStore } from "./hooks/useStore";

import { Container, Row, Col } from "react-bootstrap";

function App() {
  const { fromLanguage, setFromLanguage } = useStore();

  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <h2>From</h2>
        </Col>
        <Col>
          <button>Intercambiar</button>
        </Col>
        <Col>
          <h2>To</h2>
        </Col>
      </Row>
      <button onClick={() => setFromLanguage("es")}>Cambiar a Español </button>
      {fromLanguage}
    </Container>
  );
}

export default App;
