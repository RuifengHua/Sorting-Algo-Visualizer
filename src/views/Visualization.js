import React from "react";

import SortingVisualizer from "./SortingVisualizer";
// react-bootstrap components
import { Container } from "react-bootstrap";

function Visualization() {
  return (
    <>
      <Container fluid>
        <SortingVisualizer></SortingVisualizer>
      </Container>
    </>
  );
}

export default Visualization;
