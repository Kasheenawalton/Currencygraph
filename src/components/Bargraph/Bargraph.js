import React, { Component } from 'react';
import './Bargraph.css';

class Bargraph extends Component {
    render() {

    return (
            <div className="Bargraph">
                <figure aria-hidden="true" />
                <span class="graphRowLabel"></span>
                <span class="graphRowLabel"></span>
                <span class="graphRowLabel"></span>
                <span class="graphRowLabel"></span>
                <span class="graphRowLabel"></span>
                <span class="graphRowLabel"></span>
                <span class="graphRowLabel"></span>
                <span class="graphRowLabel"></span>
                <span class="graphRowLabel"></span>
                <span class="graphRowLabel"></span>
                <div class="graphBar"></div>
                <div class="graphBar"></div>
                <div class="graphBar"></div>
                <div class="graphBar"></div>
                <div class="graphBar"></div>
                <span><sup> </sup><sub> </sub></span>
                <span class="graphColumnLabel"></span>
                <span class="graphColumnLabel"></span>
                <span class="graphColumnLabel"></span>
                <span class="graphColumnLabel"></span>
                <span class="graphColumnLabel"></span>   
            </div>
            );
         }
    }

export default Bargraph;