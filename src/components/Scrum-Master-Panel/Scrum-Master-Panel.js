import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getActiveStory, endVote } from '../../store/actions/scrum-poker-actions';
import './Scrum-Master-Panel.css';

class ScrumMasterPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			finalScore: 0
		};
	}

	render() {
		const { sessionData, points, activeStory } = this.props;
		let voterArray = Array(parseInt(sessionData.numberOfVoters)).fill(null).map((val, i) => {
			return {
				voterId: i,
				votedPoint: 0
			};
		});
		return (
			<div className="scrumPanelContainer">
				<div>Scrum Master Panel</div>
				<div style={{ marginTop: '10px', marginBottom: '20px' }}>
					{activeStory.storyName && <span>{activeStory.storyName} is active</span>}
				</div>
				{voterArray.map((item, index) => {
					return (
						<div key={index}>
							Voter {index + 1} : {points[index]}
						</div>
					);
				})}
				<div style={{ marginTop: '80px' }}>
					<div style={{ marginBottom: '10px' }}>Final Score</div>
					<input
						type="text"
						className="inputText"
						onChange={(e) => this.handleFinalScore(e)}
						value={this.state.finalScore}
						style={{ width: '100px' }}
					/>
				</div>
				<button
					onClick={() => {
						this.sendVote();
					}}
					style={{ marginTop: '20px' }}
				>
					End Voting For {activeStory.storyName}
				</button>
			</div>
		);
	}

	handleFinalScore = (e) => {
		this.setState({ finalScore: e.target.value });
	};

	sendVote = () => {
		const { activeStory, endVote, sessionData } = this.props;
		const { finalScore } = this.state;
		let story = {
			sessionName: sessionData.sessionName,
			numberOfVoters: sessionData.numberOfVoters,
			storyList: [
				...sessionData.storyList.filter((item) => item.storyId !== activeStory.storyId),
				{
					storyName: activeStory.storyName,
					storyPoint: finalScore,
					status: true,
					storyId: activeStory.storyId
				}
			]
		};
		endVote(story);
		this.setState({ finalScore: 0 });
	};
}

const mapStateToProps = ({ scrumPokerReducers }) => {
	let { sessionData, points, activeStory } = scrumPokerReducers;
	return { sessionData, points, activeStory };
};
ScrumMasterPanel.propTypes = {
	sessionData: PropTypes.object,
	points: PropTypes.array,
	activeStory: PropTypes.object
};
export default connect(mapStateToProps, { getActiveStory, endVote })(ScrumMasterPanel);
