import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3" style={{ backgroundColor: "#F5F0F9", borderRadius: "24px" }}>
        <Container>
          {/* <Route path="/order/:id" component={OrderScreen} /> */}
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
