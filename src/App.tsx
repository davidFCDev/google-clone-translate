import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStore } from "./hooks/useStore";

import { Container, Row, Col } from "react-bootstrap";
import { AUTO_LANGUAGE } from "./constants";
import { LanguageSelector } from "./components/LanguageSelector";

function App() {
  const { fromLanguage, toLanguage, interchangeLenguages } = useStore();

  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <LanguageSelector />
        </Col>
        <Col>
          <button
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLenguages}
          >
            Intercambiar
          </button>
        </Col>
        <Col>
          <LanguageSelector />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
