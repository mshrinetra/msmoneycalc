import React, { Component } from "react";

import Header from "./header";

class Loan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            principal: 100000,
            period: 5.0,
            periodFactor: 12,
            rate: 10,
            result: null
        };

        this.calculateResult = this.calculateResult.bind(this);
    }

    handleAmountChange(e) {
        this.setState({
            ...this.state,
            principal: parseFloat(e.target.value),
            result: null
        });
    }

    handleDiurationChange(e) {
        this.setState({
            ...this.state,
            period: parseFloat(e.target.value),
            result: null
        });
    }

    handleDurationTypeChange(e) {
        this.setState({
            ...this.state,
            periodFactor: parseFloat(e.target.value),
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
        let P = this.state.principal;
        let I = (this.state.rate / (12 * 100));
        let N = this.state.period * this.state.periodFactor;
        let emi = (P * I * (1 + I) ** N) / ((1 + I) ** N - 1)
        let amount = emi * N;
        this.setState({
            ...this.state,
            result: {
                emi: emi,
                amount: amount,
                principalPercent: ((P / amount) * 100),
                interest: (amount - P),
                interestPercent: (((amount - P) / amount) * 100)
            }
        });
    }


    render() {
        return (
            <div>
                <Header location={this.props.location} />
                <div className="form-group">
                    <strong>Amount</strong>
                    <input type="number" className="form-control" id="amount" min="0.0" value={this.state.principal} onChange={e => this.handleAmountChange(e)} />
                </div>
                <div className="form-group">
                    <strong>Period</strong>
                    <div className="input-group">
                        <input type="number" className="form-control" id="time" min="1" max="1000" value={this.state.period} onChange={e => this.handleDiurationChange(e)} />
                        <div className="input-group-append">
                            <select className="btn custom-select btn-outline-secondary" id="durationType" onChange={e => this.handleDurationTypeChange(e)} value={this.state.periodFactor}>
                                <option value="12" className="dropdown-item">Year(s)</option>
                                <option value="1" className="dropdown-item">Month(s)</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <strong>Interest Rate</strong>
                    <div className="input-group">
                        <input type="number" className="form-control" id="rate" min="0.1" max="99.9" value={this.state.rate} onChange={e => this.handleRateChange(e)} />
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
                            <th>Total Payment</th>
                            <td id="resultAmount">{this.state.result ? this.state.result.amount : ""}</td>
                        </tr>
                        <tr>
                            <th>Monthly EMI</th>
                            <td id="resultEmi">{this.state.result ? this.state.result.emi : ""}</td>
                        </tr>
                        <tr>
                            <th>Principal</th>
                            <td id="resultPrincipal">{this.state.result ? this.state.principal : ""}</td>
                        </tr>
                        <tr>
                            <th>Principal (%)</th>
                            <td id="resultPrincipalPercent">{this.state.result ? this.state.result.principalPercent : ""}</td>
                        </tr>
                        <tr>
                            <th>Interest</th>
                            <td id="resultInterest">{this.state.result ? this.state.result.interest : ""}</td>
                        </tr>
                        <tr>
                            <th>Interest (%)</th>
                            <td id="resultInterestPercent">{this.state.result ? this.state.result.interestPercent : ""}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Loan;