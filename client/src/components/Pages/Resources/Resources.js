import React from 'react';
import ResourceCard from "../ResourceCard/ResourceCard";
import { Container, Row, Col } from "react-bootstrap";
import "./Resources.css";

function Resources() {
  return (

    <div className="background">
      <Container className="signBox">
        <Row>
          <Col>
            <h1 className="title">Emergency Resources</h1>
          </Col>
        </Row>
        <Row>
          {/* hotel search */}
          <ResourceCard imgUrl="https://media.giphy.com/media/FyRqWrXtj2W9G/giphy.gif" href="http://www.femaevachotels.com/index.php" title="Find Hotel" description={[
            { description: "Search for hotels in your state and city that are affordable & pet friendly." },
          ]} />

          {/* Medication */}
          <ResourceCard imgUrl="https://media.giphy.com/media/MaZiCmnaOnXlvbeqIF/giphy.gif" href="" title="Find Medication"
            description={[
              { description: "CVS (800) 746-7287", url: "https://www.cvs.com" },
              { description: "Walgreens 877-250-5823", url: "https://www.walgreens.com/" },
            ]} />

          {/* podcast */}
          <ResourceCard imgUrl="http://giphygifs.s3.amazonaws.com/media/LwxzFXEymTsf6/giphy.gif" href="https://play.google.com/music/listen?u=0#/ps/Iydeahoa4jeyayosfeqh36zvnfm" title="Podcast"
            description={[
              { description: "Click the picture to hear the emergency podcast." }
            ]} />
        </Row>

        <Row>
          {/* PG & E */}
          <ResourceCard imgUrl="https://media.giphy.com/media/TFOLtH7FaBfpu/giphy.gif" href="https://www.pge.com/en_US/safety/report-emergency/report-emergency.page?WT.pgeac=Home_Emergency" title="PG & E"
            description={[
              { description: "1-800-743-5000 PG & E report a gas leak, or downed line." }
            ]} />

          {/* Animal shelter */}
          <ResourceCard imgUrl="https://media.giphy.com/media/SB5fjrUhAeLte/giphy.gif" href="https://www.petfinder.com/animal-shelters-and-rescues/search" title="Animal Shelter"
            description={[
              { description: "Search for an animal shelters in your area if your pet is missing." }
            ]} />

          {/* buy emergency kit */}
          <ResourceCard imgUrl="https://media.giphy.com/media/26uf3GPKideludyj6/giphy.gif" href="https://www.quakekare.com/emergency-earthquake-kits-c-8_9/?gclid=Cj0KCQjwvo_qBRDQARIsAE-bsH9Ky6adSJCGQfyqg63iTywxsVImHVEQGAgRg2vp7MVBetStFQyQhu8aAhZzEALw_wcB" title="Supplies"
            description={[
              { description: "Quake Kare", url: "https://www.quakekare.com/emergency-earthquake-kits-c-8_9/?gclid=Cj0KCQjwvo_qBRDQARIsAE-bsH9Ky6adSJCGQfyqg63iTywxsVImHVEQGAgRg2vp7MVBetStFQyQhu8aAhZzEALw_wcB" },
              { description: "Amazon Supplies", url: "https://www.amazon.com/s?k=emergency+food&crid=1DH4FMBTQB7GA&sprefix=emer%2Caps%2C258&ref=nb_sb_ss_i_7_4" },
            ]} />

        </Row>

        {/* <h1>Be Prepared</h1> */}
        <Row>
          {/* family preparedness */}
          <ResourceCard imgUrl="https://media.giphy.com/media/jxzEhHBMmH7tm/giphy.gif" href="https://www.earthquakeauthority.com/California-Earthquake-Risk/Personal-Preparedness" title="FAQ"
            description={[
              { description: "Learn about the Seven Steps to Earthquake Safety.", url: "https://www.earthquakeauthority.com/California-Earthquake-Risk/Personal-Preparedness/Seven-Steps-to-Earthquake-Safety" }
            ]} />

          {/* pet preparedness */}
          <ResourceCard imgUrl="https://media.giphy.com/media/l2JhtCMwgCLcRXmgg/giphy.gif" href="https://www.fema.gov/blog/2019-06-13/pet-preparedness-10-items-youll-need-your-pets-hurricane-emergency-kit" title="Pets"
            description={[
              { description: "10 things that will helps your pet(s)." },
              { description: "Remember they are family too." }
            ]} />

          {/* retrofit your building */}
          <ResourceCard imgUrl="https://media.giphy.com/media/de4QmZqpcqQMOPL2Mt/giphy.gif" href="https://www.earthquakesafety.com/earthquake-retrofitting-faq.html" title="Retrofitting"
            description={[
              { description: "Get advice on cost and other questions on retrofit a home or building" },
            ]} />
        </Row>

      </Container>
    </div>

  );
}

export default Resources;
