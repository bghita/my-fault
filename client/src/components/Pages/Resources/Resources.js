import React from 'react';
import ResourceCard from "../ResourceCard/ResourceCard";
import { Container, Row, } from "react-bootstrap";

function App() {
  return (
    <div>

      <Container />
      <h1>Resources</h1>
      <Row>
        {/* hotel search */}
        <ResourceCard imgUrl="https://media.giphy.com/media/NDEVHw57wMU5a/giphy.gif" href="http://www.femaevachotels.com/index.php" title="Find Hotel" description={["Search for hotels in your state and city.", "Locates hotels that are pet friendly.", "Hotels have affordable rates for the night."]} />

        {/* PG & E */}
        <ResourceCard imgUrl="http://picsum.photos/200/200" href="" title="PG & E" description={["1-800-743-5000 PG & E gas leak, or downed line."]} />

        {/* Medication */}
        <ResourceCard imgUrl="http://picsum.photos/200/200" href="" title="Find Medication" description={[""]} />
      </Row>

      <h1>Be Prepared</h1>
      <Row>
        {/* family preparedness */}
        <ResourceCard imgUrl="https://media.giphy.com/media/l3vR9Q7dANqZyK2sw/giphy.gif" href="https://www.earthquakeauthority.com/California-Earthquake-Risk/Personal-Preparedness" title="FAQ" description={["Earth Quake Authority offers information on earthquake prep.", "Learn about the Seven Steps to Earthquake Safety."]} />

        {/* buy emergency kit */}
        <ResourceCard imgUrl="https://media.giphy.com/media/26uf3GPKideludyj6/giphy.gif" href="https://www.quakekare.com/emergency-earthquake-kits-c-8_9/?gclid=Cj0KCQjwvo_qBRDQARIsAE-bsH9Ky6adSJCGQfyqg63iTywxsVImHVEQGAgRg2vp7MVBetStFQyQhu8aAhZzEALw_wcB" title="Supplies" description={["Buy an emergency kit for all locations, for yourself, family, students or co-workers." ]}/>

        {/* safeway delivery */}
        <ResourceCard imgUrl="http://picsum.photos/200/200" href="" title="" description={[""]}/>
      </Row>

      <Row>
        {/* pet preparedness */}
        <ResourceCard imgUrl="http://picsum.photos/200/200" href="https://www.fema.gov/blog/2019-06-13/pet-preparedness-10-items-youll-need-your-pets-hurricane-emergency-kit" title="Pets" description={["10 things that will helps your pet(s). Remember they are family too."]} />

        {/* dog walking */}
        <ResourceCard imgUrl="http://picsum.photos/200/200" href="" title="Dog Walking Serivces" description={["If you are unable to get home to walk or feed your pets, visit Wag or Rover."]} />

        {/* Animal shelter */}
        <ResourceCard imgUrl="http://picsum.photos/200/200" href="" title="Animal Shelter" description={["Search for an animal shelter if your pet is missing."]} />
      </Row>

      <Row>
        {/* retrofit your building */}
        <ResourceCard imgUrl="http://picsum.photos/200/200" href="" title="Retrofit a Building" description={[""]}/>

        {/* locksmith */}
        <ResourceCard imgUrl="http://picsum.photos/200/200" href="" title="Locksmith Services" description={[""]}/>

        {/* towing services */}
        <ResourceCard imgUrl="http://picsum.photos/200/200" href="" title="Towing Services" description={[""]}/>
      </Row>

    </div>
  );
}

export default App;
