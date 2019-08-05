import React from 'react';
import ResourceCard from "../ResourceCard/ResourceCard";
// import "./Resources/Resources.css";
import { Container, Row, } from "react-bootstrap";

function App() {
  return (
    <div>

      <Container />
      <h1>Resources</h1>
      <Row>
        {/* hotel search */}
        <ResourceCard imgUrl="https://media.giphy.com/media/FyRqWrXtj2W9G/giphy.gif" href="http://www.femaevachotels.com/index.php" title="Find Hotel" description={["Search for hotels in your state and city.", "Locates hotels that are pet friendly.", "Hotels have affordable rates for the night."]} />

        {/* Medication */}
        <ResourceCard imgUrl="https://media.giphy.com/media/MaZiCmnaOnXlvbeqIF/giphy.gif" href="" title="Find Medication" description={["CVS (800) 746-7287", "Walgreens 877-250-5823", "Kaiser Permanente (855) 470-3815"]} />

        {/* podcast */}
        <ResourceCard imgUrl="http://giphygifs.s3.amazonaws.com/media/LwxzFXEymTsf6/giphy.gif" href="https://play.google.com/music/listen?u=0#/ps/Iydeahoa4jeyayosfeqh36zvnfm" title="Podcast" description={["Click the picture to hear the emergency podcast."]} />
      </Row>

      <Row>
        {/* social media */}
        <ResourceCard imgUrl="http://giphygifs.s3.amazonaws.com/media/L8QmMBDvxVKrm/giphy.gif" href="" title="Social Media" description={["Twitter", "Facebook", "Snapchat", "Instagram"]} />

        {/* PG & E */}
        <ResourceCard imgUrl="https://media.giphy.com/media/l4Ki9kSidioZfrENa/giphy.gif" href="" title="PG & E" description={["1-800-743-5000 PG & E gas leak, or downed line."]} />

        {/* phone link */}
        <ResourceCard imgUrl="https://media.giphy.com/media/1SyXpUUfyAe1Yx8rUU/giphy.gif" href="" title="Phone Numbers" description={["911 Emergency", "#411 Information Services", "Personal phone numbers of family and friends."]} />

      </Row>

      <h1>Be Prepared</h1>
      <Row>
        {/* family preparedness */}
        <ResourceCard imgUrl="https://media.giphy.com/media/jxzEhHBMmH7tm/giphy.gif" href="https://www.earthquakeauthority.com/California-Earthquake-Risk/Personal-Preparedness" title="FAQ" description={["Earth Quake Authority offers information on earthquake prep.", "Learn about the Seven Steps to Earthquake Safety."]} />

        {/* buy emergency kit */}
        <ResourceCard imgUrl="https://media.giphy.com/media/26uf3GPKideludyj6/giphy.gif" href="https://www.quakekare.com/emergency-earthquake-kits-c-8_9/?gclid=Cj0KCQjwvo_qBRDQARIsAE-bsH9Ky6adSJCGQfyqg63iTywxsVImHVEQGAgRg2vp7MVBetStFQyQhu8aAhZzEALw_wcB" title="Supplies" description={["Buy an emergency kit for all locations, for yourself, family, students or co-workers."]} />

        {/* safeway delivery */}
        <ResourceCard imgUrl="https://media.giphy.com/media/5ev3alRsskWA0/giphy.gif" href="https://shop.safeway.com/home.html?zipcode=94611&cmpid=ps_swy_noc_ecom_goo&r=https%3A%2F%2Fwww.google.com%2F" title="Food Delivery" description={["Safewway Food Delivery Service"]} />
      </Row>

      <Row>
        {/* pet preparedness */}
        <ResourceCard imgUrl="https://media.giphy.com/media/l2JhtCMwgCLcRXmgg/giphy.gif" href="https://www.fema.gov/blog/2019-06-13/pet-preparedness-10-items-youll-need-your-pets-hurricane-emergency-kit" title="Pets" description={["10 things that will helps your pet(s). Remember they are family too."]} />

        {/* dog walking */}
        <ResourceCard imgUrl="https://media.giphy.com/media/8zFpA8HgcewXC/giphy.gif" href="" title="Dog Walking Serivces" description={["If you are unable to get home to walk or feed your pets, visit Wag or Rover."]} />

        {/* Animal shelter */}
        <ResourceCard imgUrl="https://media.giphy.com/media/SB5fjrUhAeLte/giphy.gif" href="https://www.petfinder.com/animal-shelters-and-rescues/search/" title="Animal Shelter" description={["Search for an animal shelters in your area if your pet is missing."]} />
      </Row>

      <Row>
        {/* retrofit your building */}
        <ResourceCard imgUrl="https://media.giphy.com/media/de4QmZqpcqQMOPL2Mt/giphy.gif" href="https://www.earthquakesafety.com/earthquake-retrofitting-faq.html" title="Retrofitting" description={["Get advice on cost and other questions on retrofit a home or building"]} />

        {/* locksmith */}
        <ResourceCard imgUrl="https://media.giphy.com/media/Z1FlpamrHC8hy/giphy.gif" href="#" title="Locksmith Services" description={[""]} />

        {/* towing services */}
        <ResourceCard imgUrl="https://media.giphy.com/media/xT5LMOzPaDffpaUbfO/giphy.gif" href="" title="Towing Services" description={[""]} />
      </Row>

    </div>
  );
}

export default App;
