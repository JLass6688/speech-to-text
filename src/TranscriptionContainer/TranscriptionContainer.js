import React, {Component} from 'react';

class TranscriptionContainer extends Component {
	constructor(props) {
		super(props);

		console.log("Rendered");

		this.state = {
			text: props.transcribedText
		}
	}

	render() {
		return (
			<div className="transcriptionContainer">
				<h3>Transcription</h3>
				<div className="transcriptionTextContainer" />
			</div>
		)
	}
}

export default TranscriptionContainer;