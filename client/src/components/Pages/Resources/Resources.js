import React from 'react';
import ResourceCard from "../ResourceCard/ResourceCard";
// import "./ResourceCard.css"
import { Container, Row, Col } from "react-bootstrap";

function Resources() {
  return (
    <div>

      {/* const Changebackground = () => {
  stylesResource = {
    background: "green"
  }; */}

      <Container>
        <Row>
          <Col>
            <h1>Emergency Resources</h1>
          </Col>
        </Row>
        <Row>
          {/* hotel search */}
          <ResourceCard imgUrl="https://media.giphy.com/media/FyRqWrXtj2W9G/giphy.gif" href="http://www.femaevachotels.com/index.php" title="Find Hotel" description={[
            { description: "Search for hotels in your state and city." },
            { description: "Locates hotels that are pet friendly." },
            { description: "Hotels have affordable rates for the night." }
          ]} />

          {/* Medication */}
          <ResourceCard imgUrl="https://media.giphy.com/media/MaZiCmnaOnXlvbeqIF/giphy.gif" href="" title="Find Medication"
            description={[
              { description: "CVS (800) 746-7287", url: "https://www.cvs.com" },
              { description: "Walgreens 877-250-5823", url: "https://www.walgreens.com/" },
              { description: "Kaiser Hospital (855) 470-3815", url: "https://healthy.kaiserpermanente.org/" }
            ]} />

          {/* podcast */}
          <ResourceCard imgUrl="http://giphygifs.s3.amazonaws.com/media/LwxzFXEymTsf6/giphy.gif" href="https://play.google.com/music/listen?u=0#/ps/Iydeahoa4jeyayosfeqh36zvnfm" title="Podcast"
            description={[
              { description: "Click the picture to hear the emergency podcast." }
            ]} />
        </Row>

        <Row>
          {/* social media */}
          {/* <ResourceCard imgUrl="http://giphygifs.s3.amazonaws.com/media/L8QmMBDvxVKrm/giphy.gif" href="" title="Social Media"
          description={[
            { description: "Twitter", url: "https://www.twitter.com" },
            { description: "Facebook", url: "https://www.facebook.com" },
            { description: "Snapchat", url: "https://www.snapchat.com" },
            { description: "Instagram", url: "https://www.instagram.com" }
          ]} /> */}

          {/* PG & E */}
          <ResourceCard imgUrl="https://media.giphy.com/media/l4Ki9kSidioZfrENa/giphy.gif" href="https://www.pge.com/en_US/safety/report-emergency/report-emergency.page?WT.pgeac=Home_Emergency" title="PG & E"
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
              { description: "Buy an emergency kit for all locations, for yourself, family, students or co-workers." },
              { description: "Quake Kare", url: "https://www.quakekare.com/emergency-earthquake-kits-c-8_9/?gclid=Cj0KCQjwvo_qBRDQARIsAE-bsH9Ky6adSJCGQfyqg63iTywxsVImHVEQGAgRg2vp7MVBetStFQyQhu8aAhZzEALw_wcB" },
              { description: "Amazon Supplies", url: "https://www.amazon.com/s?k=emergency+food&crid=1DH4FMBTQB7GA&sprefix=emer%2Caps%2C258&ref=nb_sb_ss_i_7_4" },
              { description: "Whole Foods", url: "https://www.wholefoodsmarket.com/online-ordering?gclid=CjwKCAjwyqTqBRAyEiwA8K_4O5V3yi4B8F5T96VsLsI7U96h1O7WxMRPYhDMeLhgMLc8expY1-fiRRoCndoQAvD_BwE" },
              { description: "Safeway Food Delivery Service", url: "https://shop.safeway.com/home.html?zipcode=94611&cmpid=ps_swy_noc_ecom_goo&r=https%3A%2F%2Fwww.google.com%2F" }
            ]} />

          {/* phone link */}
          {/* <ResourceCard imgUrl="https://media.giphy.com/media/1SyXpUUfyAe1Yx8rUU/giphy.gif" href="" title="Phone Numbers"
          description={[
            { description: "911 Emergency" },
            { description: "#411 Information Services" },
            { description: "Personal phone numbers of family and friends." }
          ]} /> */}
        </Row>

        {/* <h1>Be Prepared</h1> */}
        <Row>
          {/* family preparedness */}
          <ResourceCard imgUrl="https://media.giphy.com/media/jxzEhHBMmH7tm/giphy.gif" href="https://www.earthquakeauthority.com/California-Earthquake-Risk/Personal-Preparedness" title="FAQ"
            description={[
              { description: "Earth Quake Authority offers information on earthquake prep." },
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

        <Row>
          {/* dog walking */}
          {/* <ResourceCard imgUrl="https://media.giphy.com/media/8zFpA8HgcewXC/giphy.gif" href="https://wagwalking.com/" title="Dog Walking Serivces"
          description={[
            { description: "If you are unable to get home to walk or feed your pets visit:" },
            { description: "Wag", url: "https://wagwalking.com/" },
            { description: "Rover", url: "https://www.rover.com/" }
          ]} /> */}
        </Row>

        <Row>
          {/* locksmith */}
          {/* <ResourceCard imgUrl="https://media.giphy.com/media/Z1FlpamrHC8hy/giphy.gif" href="#" title="Locksmith Services"
          description={[
            { description: "", url:"" }
          ]} /> */}

          {/* towing services */}
          {/* <ResourceCard imgUrl="https://media.giphy.com/media/xT5LMOzPaDffpaUbfO/giphy.gif" href="" title="Towing Services"
          description={[
            { description: "AAA", url: "https://AAA.com" }
          ]} /> */}
        </Row>
      </Container>
    </div >
  );
}

export default Resources;
