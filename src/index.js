import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./assets/sass/main.scss";

import { Card, Container, CardImage } from "./ui/components";

class CardExample extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Card>
          <CardImage
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
          />
          Test
        </Card>
      </Container>
    );
  }
}

ReactDOM.render(<CardExample />, document.getElementById("root"));
