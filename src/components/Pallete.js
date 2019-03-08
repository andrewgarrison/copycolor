import React, { Component } from 'react';
import ColorGrid from './ColorGrid/ColorGrid';
import Colors from './Colors';

class Pallete extends Component {
	render() {
		return (
			<section>
				<div className="pallete">
					<h6 className='c-section-heading'>01. Color Pallete</h6>
					<h3>Green</h3>
					<div className='c-swatches'>
							{Object.keys(Colors.greens).map((color, i) =>
							<ColorGrid hex={Colors.greens[color].hex} rgb={Colors.greens[color].rgb} key={i} />
							)}
					</div>

					<h3>Gray</h3>
					<div className='c-swatches'>
							{Object.keys(Colors.grays).map((color, i) =>
							<ColorGrid hex={Colors.grays[color].hex} rgb={Colors.grays[color].rgb} key={i} />
							)}
					</div>

					<h3>Neutral</h3>
					<div className='c-swatches'>
							{Object.keys(Colors.neutrals).map((color, i) =>
							<ColorGrid hex={Colors.neutrals[color].hex} rgb={Colors.neutrals[color].rgb} key={i} />
							)}
					</div>
					<div className='overlay'>
						<div className='center'>
							<div id='copy-message-text'>Copied!</div>
							<div id='color-picked'></div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Pallete;