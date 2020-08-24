import React, {Component} from 'react';
import TranscriptionContainer from '../TranscriptionContainer/TranscriptionContainer';
import FeedbackContainer from '../FeedbackContainer/FeedbackContainer';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import Authenticator from '../Authenticator/Authenticator.js';

import recognizeMicrophone from 'watson-speech/speech-to-text/recognize-microphone';

class ContentContainer extends Component {
	constructor() {
		super();

		this.state = {
			model: 'en-US_BroadbandModel',
			text: []
		}

		this.getRecognizeOptions = this.getRecognizeOptions.bind(this);
		this.startRecording = this.startRecording.bind(this);
		this.manageStream = this.manageStream.bind(this);
	}

	startRecording() {
		const auth = new Authenticator(process.env.REACT_APP_API_KEY);
		auth.getToken().then(data => {
			const token = data.access_token;
			let rm = recognizeMicrophone(this.getRecognizeOptions(token));
			this.manageStream(rm);
		})
		
	}

	getRecognizeOptions(token) {
		return {
			accessToken: token,
			model: this.state.model,
			format: true,
			smart_formatting: true,
			url: this.getUrl(),
			interim_results: true,
			outputElement: '.transcriptionTextContainer'
		}
	}

	manageStream(stream) {
		const td = new TextDecoder();

		stream
			.on('data', msg => {
				const {text} = this.state;
				console.log(msg);

				this.setState({
					text: text.concat(msg)
				})
			})
			.on('end', msg => console.log(msg))
			.on('error', err => console.log(err));
	}

	getUrl() {
		let location = process.env.REACT_APP_SERVER_LOCATION;
		let instance_id = process.env.REACT_APP_SERVER_INST;

		return `wss://api.${location}.speech-to-text.watson.cloud.ibm.com/instances/${instance_id}/v1/recognize`;
	}

	render() {
		return (
			<div className="contentContainer">
				<ButtonContainer startClick={this.startRecording}/>
        		<FeedbackContainer/>
        		<TranscriptionContainer transcribedText={this.state.text} />
			</div>
		)
	}
}

export default ContentContainer;