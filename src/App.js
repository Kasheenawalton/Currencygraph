import React, { Component } from 'react';
import './App.css';

import Bargraph from './components/Bargraph/Bargraph.js';
import Currencyselector from './components/Currencyselector/Currencyselector.js';
import Form from './components/Form/Form.js';


class App extends Component {
    state = {
        isLoading: false,
        apiData: [],
        results: [],
        rates: {},
    }

    render() {
        return (
            <div className="graph">
                {
                    this.rateKeys().map(countryCode => (
                        <div className="graph" style={{ height: this.state.rates[countryCode] + "%" }}>
                            <div className="Tooltiptext">
                                <span class="tooltiptext"></span>
                                {countryCode}{this.state.rates[countryCode]}
                            </div>
                        </div>
                    ))
                }

                <Currencyselector />
                <Bargraph />
                <Form />

            </div>

        );
    }

    componentDidMount() {
        fetch('https://api.exchangeratesapi.io/latest')
            .then(response => response.json())
            .then(data => {
                console.log(data)

                this.setState({
                    rates: data.rates,
                    results: []
                });
            })
    }

    rateKeys() {
        return Object.keys(this.state.rates);
    }
}

export default App;