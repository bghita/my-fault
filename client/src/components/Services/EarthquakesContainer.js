import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import EarthquakesForm from './EarthquakesForm';
import EarthquakesMap from './EarthquakesMap';
import { fetchQuakes } from '../Services/earthquakes';
import { searchQuakes } from '../Services/earthquakes';
import { GoogleApiWrapper } from 'google-maps-react';

class EarthquakesContainer extends Component {

    state = {
        quakes: []
    }

    componentDidMount = () => {
        fetchQuakes()
            .then((json) => {
                this.setState({ quakes: json.features })
            })
    }

    onFilter = (event) => {
        searchQuakes(event)
            .then((json) => {
                this.setState({ quakes: json.features })
            })
    }
    

    render() {
        return (
            <div className="background">
            <div className="EarthquakesContainer" >
                    <Container fluid={false} className="SignBox">
                    <Row>
                    <Col md={3}>
                    <EarthquakesForm onFilter={this.onFilter} /></Col>
                    <Col md={9}>
                    <EarthquakesMap google={this.props.google} quakes={this.state.quakes} />
                    </Col>
                    </Row>
                    </Container>
            </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyChZPizXo_3sk70Cm4yveOd0YfQtuxc7As',
    libraries: ['visualization']
})(EarthquakesContainer)