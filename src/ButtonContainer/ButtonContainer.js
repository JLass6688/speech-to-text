import React, {Component} from 'react';

class ButtonContainer extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className="buttonContainer">
				<button 
					className="buttonControl startButton"
					onClick={this.props.startClick}>Start</button>
				<button className="buttonControl stopButton">Stop</button>
			</div>

		);
	}
}

export default ButtonContainer;