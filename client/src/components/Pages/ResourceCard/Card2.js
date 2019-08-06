import React from 'react';
import ResourceCard from "../ResourceCard/ResourceCard";
// import "./Resources/Resources.css";
import { Container, Row, Button } from "react-bootstrap";

function App() {
    return (
        <div className="background">
            <Container className="signBox">
                <p className="title">Resources</p>
                <Button variant="primary" size="lg" href="https://play.google.com/music/listen?u=0#/ps/Iydeahoa4jeyayosfeqh36zvnfm" block>
                    FEMA Podcast
                </Button>
                <Button variant="primary" size="lg" href="http://www.femaevachotels.com/index.php" block>
                    Find a Hotel
                </Button>
                <Button variant="primary" size="lg" href="https://www.earthquakeauthority.com/California-Earthquake-Risk/Personal-Preparedness" block>
                    Personal Preparedness
                </Button>
                <Button variant="primary" size="lg" href="https://www.quakekare.com/emergency-earthquake-kits-c-8_9/?gclid=Cj0KCQjwvo_qBRDQARIsAE-bsH9Ky6adSJCGQfyqg63iTywxsVImHVEQGAgRg2vp7MVBetStFQyQhu8aAhZzEALw_wcB" block>
                    Home, Work and Car Earthquake Kit Guide
                </Button>
                <Button variant="primary" size="lg" href="https://www.fema.gov/blog/2019-06-13/pet-preparedness-10-items-youll-need-your-pets-hurricane-emergency-kit" block>
                    Earthquake Kit for your Pet
                </Button>
                <Button variant="primary" size="lg" href="https://www.petfinder.com/animal-shelters-and-rescues/search/" block>
                    Animal Shelter Pet Finder!
                </Button>
                <Button variant="primary" size="lg" href="https://www.earthquakesafety.com/earthquake-retrofitting-faq.html" block>
                    Retrofitting your Home
                </Button>
            </Container>
        </div>
    )
};

export default App;