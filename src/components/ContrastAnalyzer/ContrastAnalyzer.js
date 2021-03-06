import React, { Component } from 'react';
import './ContrastAnalyzer.css';
import TextColor from '../ColorColumn/TextColor';
import BackgroundColor from '../ColorColumn/BackgroundColor';
import ContrastResults from '../ContrastResults/ContrastResults';

class ContrastAnalyzer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			textColor: '',
			bgColor: '',
			ratio: 0,
			AA: '',
			AAA: '',
			AALarge: '',
			AAALarge: ''
		}

		this.handleTextColorChange = this.handleTextColorChange.bind(this);
		this.handleBgColorChange = this.handleBgColorChange.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	handleTextColorChange(color) {
		this.setState({textColor: color});
	}

	handleBgColorChange(color) {
		this.setState({bgColor: color});
	}

	handleReset() {
		this.setState({
			textColor: '',
			bgColor: '',
			ratio: 0,
			AA: '',
			AAA: '',
			AALarge: '',
			AAALarge: ''
		});

		let textColors = document.getElementsByName("text-color");

   		for (let i = 0; i < textColors.length; i++) {
			textColors[i].checked = false;
		}

		let bgColors = document.getElementsByName("bg-color");
		
		for (let i = 0; i < bgColors.length; i++) {
		 bgColors[i].checked = false;
	 }
	}

	trim(hex) {
		return hex.substring(1, 7);
    }

    fetchContrastRatio() {
		if (this.state.textColor !== '' && this.state.bgColor !== '') {
			fetch(`https://webaim.org/resources/contrastchecker/?fcolor=${this.trim(this.state.textColor)}&bcolor=${this.trim(this.state.bgColor)}&api`)
			.then(response => {
				return response.json();
			}).then(result => {
				this.setState({
					ratio: result.ratio,
					AA: result.AA,
					AAA: result.AAA,
					AALarge: result.AALarge,
					AAALarge: result.AAALarge
				})
			});
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.textColor !== this.state.textColor || prevState.bgColor !== this.state.bgColor) {
			this.fetchContrastRatio();
		}
	}

	render() {
		return (
			<section>
				<div className="c-analyze">
					<h6 className='c-section-heading'>02. Color Contrast Analyzer</h6>
					<div className='grid'>
						<div className='span-col-1'>
							<TextColor onTextColorChange={this.handleTextColorChange}/>
						</div>
						<div className='span-col-1'>
							<BackgroundColor onBgColorChange={this.handleBgColorChange}/>
						</div>
						<div className='span-col-2'>
							<ContrastResults 
								textColor={this.state.textColor} 
								bgColor={this.state.bgColor} 
								ratio={this.state.ratio}
								AA={this.state.AA}
								AAA={this.state.AAA}
								AALarge={this.state.AALarge}
								AAALarge={this.state.AAALarge}
								onResetClick={this.handleReset}
							/>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default ContrastAnalyzer;