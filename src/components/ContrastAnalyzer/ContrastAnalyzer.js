import React, { Component } from 'react';
import ColorColumn from '../ColorColumn/ColorColumn';
import ColorColumnReverse from '../ColorColumn/ColorColumn--reverse';

class ContrastAnalyzer extends Component {
	render() {
		return (
			<section>
				<div className="contrast">
					<h6 className='c-section-heading'>02. Color Contrast Analyzer</h6>
					<div className='flex-container'>
						<ColorColumn prompt="Text Color"/>
						<ColorColumnReverse prompt="Background Color"/>
					</div>
				</div>
			</section>
		)
	}
}

export default ContrastAnalyzer;