import React, { Component } from "react";

import Header from "./header";

class Investment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startAmount: 10000,
            period: 5,
            periodFactor: 12,
            incrementAmount: 5,
            incrementType: "percent",
            incrementFrequency: 12,
            rate: 10,
            result: null
        };

        this.calculateResult = this.calculateResult.bind(this);
    }

    handleStartAmountChange(e) {
        this.setState({
            ...this.state,
            startAmount: parseFloat(e.target.value),
            result: null
        });
    }

    handlePeriodChange(e) {
        this.setState({
            ...this.state,
            period: parseFloat(e.target.value),
            result: null
        });
    }

    handlePeriodTypeChange(e) {
        this.setState({
            ...this.state,
            periodFactor: parseFloat(e.target.value),
            result: null
        });
    }

    handleIncrementChange(e) {
        this.setState({
            ...this.state,
            incrementAmount: parseFloat(e.target.value),
            result: null
        });
    }

    handleIncrementTypeChange(e) {
        this.setState({
            ...this.state,
            incrementType: e.target.value,
            result: null
        });
    }

    handleIncrementFrequencyChange(e) {
        this.setState({
            ...this.state,
            incrementFrequency: parseFloat(e.target.value),
            result: null
        });
    }

    handleRateChange(e) {
        this.setState({
            ...this.state,
            rate: parseFloat(e.target.value),
            result: null
        });
    }

    calculateResult() {
        let N = parseInt(this.state.period * this.state.periodFactor);
        let C = 0;
        let F = this.state.incrementFrequency;
        let E = this.state.startAmount;
        let I = (this.state.rate / (12 * 100));
        let A = 0.0;
        let P = 0.0;
        let R = this.state.incrementAmount;
        while (C != N) {
            if ((C % F) == 0) {
                if (this.state.incrementType === "percent") {
                    E = E + (E * (R / 100));
                } else {
                    E = E + R;
                }
            }
            A = (A * (1 + I)) + E;
            P = P + E;
            C++;
        }

        this.setState({
            ...this.state,
            result: {
                amount: A,
                sum: P,
                gain: (A - P),
                sumPercent: ((P / A) * 100),
                gainPercent: (((A - P) / A) * 100)
            }
        });
    }

    render() {
        return (
            <div>
                <Header location={this.props.location} />
                <div className="form-group">
                    <strong>Investment Start Ammount</strong>
                    <input type="number" id="startAmount" className="form-control" value={this.state.startAmount} onChange={e => this.handleStartAmountChange(e)} />
                </div>
                <div className="form-group">
                    <strong>For Period</strong>
                    <div className="input-group">
                        <input type="number" className="form-control" id="period" min="1" max="1000" value={this.state.period} onChange={e => this.handlePeriodChange(e)} />
                        <div className="input-group-append">
                            <select className="btn custom-select btn-outline-secondary" id="periodType" value={this.state.periodFactor} onChange={e => this.handlePeriodTypeChange(e)}>
                                <option value="12" className="dropdown-item">Year(s)</option>
                                <option value="1" className="dropdown-item">Month(s)</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <strong>Increase Amount By</strong>
                    <div className="input-group mb-1">
                        <input type="number" className="form-control" id="incrementAmount" min="0.0" value={this.state.incrementAmount} onChange={e => this.handleIncrementChange(e)} />
                        <div className="input-group-append">
                            <select className="btn custom-select btn-outline-secondary" id="incrementType" value={this.state.incrementType} onChange={e => this.handleIncrementTypeChange(e)}>
                                <option value="percent" className="dropdown-item">{"%"}</option>
                                <option value="currency" className="dropdown-item">Currency</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="incrementFrequency">Every</label>
                        </div>
                        <select className="custom-select" id="incrementFrequency" value={this.state.incrementFrequency} onChange={e => this.handleIncrementFrequencyChange(e)} >
                            <option value="1">Month</option>
                            <option value="3">3 Month</option>
                            <option value="6">6 Month</option>
                            <option value="12">Year</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <strong>Apreciation Rate (Per Anum)</strong>
                    <div className="input-group">
                        <input type="number" className="form-control" id="rate" min="0.1" value={this.state.rate} onChange={e => this.handleRateChange(e)} />
                        <div className="input-group-append">
                            <span className="input-group-text">{"%"}</span>
                        </div>
                    </div>
                </div>
                <button className="btn btn-md btn-primary" onClick={this.calculateResult}>Calculate</button>

                <table className="table table-primary table-hover mt-3">
                    <thead>
                        <tr>
                            <th colSpan="2" className="text-center bg-info text-white">Calculation Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Total Amount After Appreciation</th>
                            <td id="resultAmount">{this.state.result ? this.state.result.amount : ""}</td>
                        </tr>
                        <tr>
                            <th>Total Sum Invested</th>
                            <td id="resultPrincipal">{this.state.result ? this.state.result.sum : ""}</td>
                        </tr>
                        <tr>
                            <th>Gain Incurred</th>
                            <td id="resultGain">{this.state.result ? this.state.result.gain : ""}</td>
                        </tr>
                        <tr>
                            <th>Invested Sum (%)</th>
                            <td id="resultPrincipalPercent">{this.state.result ? this.state.result.sumPercent : ""}</td>
                        </tr>
                        <tr>
                            <th>Gains (%)</th>
                            <td id="resultGainPercent">{this.state.result ? this.state.result.gainPercent : ""}</td>
                        </tr>
                    </tbody>
                </table>
            </div >
        );
    }
}

export default Investment;