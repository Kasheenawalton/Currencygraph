import React, { Component } from 'react';
import './Bargraph.css';

class Bargraph extends Component {
    render() {

    return (
        <div class="Container">
               <nav class="Navigation">
                <h1>Currency Exchange</h1>
            </nav>
            
            <figure aria-hidden="true">
            <div class="graph">
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
            </figure>
        </div>
            );
         }
    }


export default Bargraph;