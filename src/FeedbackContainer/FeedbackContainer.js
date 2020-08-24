import React, {Component} from 'react';

class FeedbackContainer extends Component {
	constructor(){
		super();
	}

	render() {
		return (
			<div className="feedbackContainer">
				<h3>Feedback</h3>
				<div className="feedbackTextContainer" />
			</div>

		)
	}
}

export default FeedbackContainer;