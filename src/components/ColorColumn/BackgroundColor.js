import React, { Component } from 'react';
import './ColorColumn.css';
import Colors from '../Colors';
import chooseColor from '../Helpers.js';

class BackgroundColor extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.onBgColorChange(event.target.value);
	}

	render() {
		return (
			<div className='color-col'>
				<h4>Background</h4>
				{Object.keys(Colors.allReverse).map((color, i) =>
					<label key={i}>
						<input type="radio" name="bg-color" value={Colors.allReverse[color].hex} onChange={this.handleChange} />
						<div className="color-check" style={{backgroundColor: Colors.allReverse[color].hex}}>
							<p style={{color: chooseColor(Colors.allReverse[color].rgb)}}>{Colors.allReverse[color].hex}</p>
						</div>
					</label>
				)}
			</div>
		)
	}
}

export default BackgroundColor;