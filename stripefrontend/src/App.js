import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import SummaryScreen from "./screens/SummaryScreen";
import SuccessScreen from "./screens/SuccessScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <main
        className="py-3"
        style={{ backgroundColor: "#F5F0F9", borderRadius: "24px", display: "flex", alignItems: "center" }}
      >
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/summary" component={SummaryScreen} />
          <Route path="/success" component={SuccessScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
