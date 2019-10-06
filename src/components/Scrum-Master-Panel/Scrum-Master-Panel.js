import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getActiveStory, endVote } from '../../store/actions/scrum-poker-actions';

class ScrumMasterPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { sessionData, point, activeStory } = this.props;
		let voterArray = Array(parseInt(sessionData.numberOfVoters)).fill(null).map((val, i) => {
			return {
				voterId: i,
				votedPoint: 0
			};
		});
		console.log(point, 'points');
		return (
			<div style={{ border: '1px solid gray', padding: '15px' }}>
				<div>Scrum Master Panel</div>
				<div style={{ marginTop: '10px', marginBottom: '20px' }}>{activeStory.storyName} is active</div>
				{voterArray.map((item, index) => {
					return (
						<div>
							Voter {index + 1} : {point}
						</div>
					);
				})}
				<button onClick={() => {
					// console.log(activeStory,"asdasd")
					this.sendVote()
				}} style={{ marginTop: '130px' }}>
					End Voting For {activeStory.storyName}
				</button>
			</div>
		);
	}

	sendVote = () => {
		const { point, activeStory, endVote, sessionData } = this.props;
		console.log(sessionData.storyList.filter(item => item.storyId !== activeStory.storyId),"filter")
			let story = {
				sessionName: sessionData.sessionName,
				numberOfVoters: sessionData.numberOfVoters,
				storyList: [...sessionData.storyList.filter(item => item.storyId !== activeStory.storyId),
					{
						storyName: activeStory.storyName,
						storyPoint: point,
						status: true,
						storyId: activeStory.storyId
					}
				]
			};
			endVote(story);
	};
}

const mapStateToProps = ({ scrumPokerReducers }) => {
	let { sessionData, point, activeStory } = scrumPokerReducers;
	return { sessionData, point, activeStory };
};

ScrumMasterPanel.propTypes = {};

export default connect(mapStateToProps, { getActiveStory, endVote })(ScrumMasterPanel);
