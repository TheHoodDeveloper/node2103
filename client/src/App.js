import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
import LeftComponent from "./components/LeftComponent";
import RightComponent from "./components/RightComponent";

function App() {
  return (
    <div id="main">
      <Navigation />
      <div className="mt-4 container">
        <Row>
          <Col md={9}>
            <LeftComponent />
          </Col>
          <Col md={3}>
            <RightComponent />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
