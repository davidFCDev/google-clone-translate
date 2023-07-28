import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStore } from "./hooks/useStore";

import { Container, Row, Col, Button } from "react-bootstrap";
import { AUTO_LANGUAGE } from "./constants";
import { LanguageSelector } from "./components/LanguageSelector";

function App() {
  const {
    fromLanguage,
    toLanguage,
    interchangeLenguages,
    setFromLanguage,
    setToLanguage,
  } = useStore();

  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <LanguageSelector onChange={setFromLanguage} />
          {fromLanguage}
        </Col>
        <Col>
          <Button
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLenguages}
          >
            Intercambiar
          </Button>
        </Col>
        <Col>
          <LanguageSelector onChange={setToLanguage} />
          {toLanguage}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
