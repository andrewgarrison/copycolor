import React, { Component } from 'react';
import './ContrastResults.css';

class ContrastResults extends Component {
	render() {
		return (
			<div className='contrast-results'>
                <h4>Results</h4>
                {this.props.ratio >= 4.5 ? (
                    <div className='c-ratio' style={{border: '5px solid #007934'}}>
                        <h2 className='c-ratio__num'><span className='c-ratio__label'>Contrast Ratio:</span> {this.props.ratio.toFixed(2)}</h2>
                    </div>
                ) : (
                    <div className='c-ratio' style={{border: '5px solid #e0e0e0'}}>
                        <h2 className='c-ratio__num'><span className='c-ratio__label'>Contrast Ratio:</span> {this.props.ratio.toFixed(2)}</h2>
                    </div>
                )} 
                <div className='c-wcag'>
                    <h3>Normal Text</h3>
                    <ul>
                        <li>WCAG AA: {this.props.AA.charAt(0).toUpperCase() + this.props.AA.slice(1)}</li>
                        <li>WCAG AAA: {this.props.AAA.charAt(0).toUpperCase() + this.props.AAA.slice(1)}</li>
                    </ul>
                    <h3>Large Text</h3>
                    <ul>
                        <li>WCAG AA: {this.props.AALarge.charAt(0).toUpperCase() + this.props.AALarge.slice(1)}</li>
                        <li>WCAG AAA: {this.props.AAALarge.charAt(0).toUpperCase() + this.props.AAALarge.slice(1)}</li>
                    </ul>
                </div>
			</div>
		)
	}
}

export default ContrastResults;