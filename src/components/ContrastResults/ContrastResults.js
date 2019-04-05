import React, { Component } from 'react';
import './ContrastResults.css';

class ContrastResults extends Component {
    resultFormat(result) {
        let finalResult = null;

        if (result === 'pass') {
            finalResult = <span className='bolder dark-green'>{result.charAt(0).toUpperCase() + result.slice(1)}</span>
        } else {
            finalResult = <span>{result.charAt(0).toUpperCase() + result.slice(1)}</span>
        }

        return (finalResult);
    }

    clear() {
        this.props.onResetClick();
    }

	render() {
        const colorsPicked = ((this.props.textColor !== '') && (this.props.bgColor !== ''));

		return (
			<div className='contrast-results'>
                <h4>Results</h4>
                {this.props.ratio >= 4.5 ? (
                    <div className='c-ratio' style={{border: '5px solid #007934'}}>
                        <h2 className='c-ratio__num'><span className='c-ratio__label'>Contrast Ratio:</span> {this.props.ratio}</h2>
                    </div>
                ) : (
                    <div className='c-ratio' style={{border: '5px solid #e0e0e0'}}>
                        <h2 className='c-ratio__num'><span className='c-ratio__label'>Contrast Ratio:</span> {this.props.ratio}</h2>
                    </div>
                )} 
                <div className='c-wcag'>
                    <h3>Normal Text</h3>
                    <ul>
                        <li>WCAG AA: {this.resultFormat(this.props.AA)}</li>
                        <li>WCAG AAA: {this.resultFormat(this.props.AAA)}</li>
                    </ul>
                    {colorsPicked &&
                        <div style={{backgroundColor: this.props.bgColor}} className='c-wcag__sample c-wcag__sample--normal'>
                                <p style={{color: this.props.textColor}}>The quick brown fox jumps over the lazy dog</p>
                        </div>
                    }
                    <h3>Large Text</h3>
                    <ul>
                        <li>WCAG AA: {this.resultFormat(this.props.AALarge)}</li>
                        <li>WCAG AAA: {this.resultFormat(this.props.AAALarge)}</li>
                    </ul>
                    {colorsPicked &&
                        <div style={{backgroundColor: this.props.bgColor}} className='c-wcag__sample c-wcag__sample--large'>
                                <p style={{color: this.props.textColor}}>The quick brown fox jumps over the lazy dog</p>
                        </div>
                    }
                </div>
                {colorsPicked && 
                    <button className='btn btn-secondary' onClick={() => this.clear()}>Clear</button>
                }
			</div>
		)
	}
}

export default ContrastResults;