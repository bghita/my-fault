import React from 'react';
import ResourceCard from "../ResourceCard/ResourceCard";
import {Container, Row} from "react-bootstrap";

function App() {
  return (
    <div>

      <Container />
      <Row>
        {/* <ImageCard cardTitle=""/> */}
        <ResourceCard imgUrl="http://picsum.photos/200/200" />
        <ResourceCard imgUrl="http://picsum.photos/200/200" />
        <ResourceCard imgUrl="http://picsum.photos/200/200" />
        {/* http://www.femaevachotels.com/index.php */}
      </Row>

      <Row>
        <ResourceCard imgUrl="http://picsum.photos/200/200" />
        <ResourceCard imgUrl="http://picsum.photos/200/200" />
        <ResourceCard imgUrl="http://picsum.photos/200/200" />
      </Row>



      

    </div>
  );
}

export default App;
