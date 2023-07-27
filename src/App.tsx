import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const initialState = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromText: "",
  result: "",
  loading: false,
};



function App() {
  return (
    <div className="app">
      <h1>Google Translate</h1>
    </div>
  );
}

export default App;
