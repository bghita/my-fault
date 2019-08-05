import React, { Component } from 'react';
import "./EarthquakeForm.css";


class EarthquakesForm extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onFilter(event)
    }

    render() {
        return (
            <div className="filterQuake">
                <h4>Filter Earthquakes:</h4>
                <form onSubmit={this.handleSubmit}>
                    <label className="mag">Minimum Magnitude</label>
                    <select className="button" name="magnitude">
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="8">9</option>
                        <option value="8">10</option>

                    </select>
                    <br />
                    <br />
                    <div className="center">
                    <label className="filter-column">Date Range:</label><br />
                    <input type="date" name="min" /><br />
                    <input type="date" name="max" /><br />
                    <br />
                    <input type="submit" className="myButton" />
                    </div>
                </form>
            </div>
        )
    }
}

export default EarthquakesForm;