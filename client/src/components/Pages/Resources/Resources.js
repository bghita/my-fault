import React from 'react';
import ResourceCard from "../ResourceCard/ResourceCard";
import { Container, Row,} from "react-bootstrap";

function App() {
  return (
    <div>

      <Container />
      <h1>Get Help</h1>
      <Row>
        <ResourceCard imgUrl="https://media.giphy.com/media/NDEVHw57wMU5a/giphy.gif" href="http://www.femaevachotels.com/index.php"  title="Find Hotel" description="Search for hotels in your state and city."/>
        <ResourceCard imgUrl="https://media.giphy.com/media/26uf3GPKideludyj6/giphy.gif" href="http://www.femaevachotels.com/index.php"  title="Shelter" description="Search for hotels in your state and city."/>
      </Row>

      {/* <h1>Be Prepared</h1> */}
      {/* <Row> */}

        {/* buy emergency kit */}
        {/* <ResourceCard imgUrl="https://media.giphy.com/media/26uf3GPKideludyj6/giphy.gif" href="https://www.quakekare.com/emergency-earthquake-kits-c-8_9/?gclid=Cj0KCQjwvo_qBRDQARIsAE-bsH9Ky6adSJCGQfyqg63iTywxsVImHVEQGAgRg2vp7MVBetStFQyQhu8aAhZzEALw_wcB"  title/> */}
        {/* <h1>Buy Kits</h1> */}
        {/* <p>Buy an emergency kit for all locations, for yourself, family, students or co-workers.</p> */}

        {/* family preparedness */}

        {/* <ResourceCard imgUrl="https://media.giphy.com/media/l3vR9Q7dANqZyK2sw/giphy.gif"  href title/> */}

        {/* pet preparedness */}
        {/* <ResourceCard imgUrl="http://picsum.photos/200/200" href="https://www.fema.gov/blog/2019-06-13/pet-preparedness-10-items-youll-need-your-pets-hurricane-emergency-kit" /> */}
        {/* <h1>Pets</h1> */}
        {/* <p>10 things that will helps your pet(s). Remember they are family too.</p> */}

      {/* </Row>   */}

    </div>
  );
}

export default App;
