import React, { Component } from 'react';
import './ColorColumn.css';
import Colors from '../Colors';
import chooseColor from '../Helpers.js';

class ColorColumn extends Component {
	render() {

		return (
			<div className='color-col'>
				<h4>{this.props.prompt}</h4>
				{Object.keys(Colors.all).map((color, i) =>
					<label key={i}>
						<input type="radio" name="text-color" value={Colors.all[color].hex} checked="checked"/>
						<div className="color-check" style={{backgroundColor: Colors.all[color].hex}}>
							<p style={{color: chooseColor(Colors.all[color].rgb)}}>{Colors.all[color].hex}</p>
						</div>
					</label>
				)}
			</div>
		)
	}
}

export default ColorColumn;