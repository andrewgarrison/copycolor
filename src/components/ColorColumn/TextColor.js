import React, { Component } from 'react';
import './ColorColumn.css';
import Colors from '../Colors';
import chooseColor from '../Helpers.js';

class TextColor extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.onTextColorChange(event.target.value);
	}

	render() {
		return (
			<div className='color-col'>
				<h4>Text</h4>
				{Object.keys(Colors.all).map((color, i) =>
					<label key={i}>
						<input type="radio" name="text-color" value={Colors.all[color].hex} onChange={this.handleChange}/>
						<div className="color-check" style={{backgroundColor: Colors.all[color].hex}}>
							<p style={{color: chooseColor(Colors.all[color].rgb)}}>{Colors.all[color].hex}</p>
						</div>
					</label>
				)}
			</div>
		)
	}
}

export default TextColor;