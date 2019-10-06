import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Active-Story-Vote.css';
import { setPoint } from '../../store/actions/scrum-poker-actions';

class ActiveStoryVote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pointArray: [ 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 134, '?' ]
			// votedPoints:[]
		};
	}

	render() {
		const { pointArray } = this.state;
		const { activeStory, setPoint } = this.props;
		return (
			<div style={{ border: '1px solid gray', minHeight: '340px', minWidth: '120px' }}>
				<span style={{ marginLeft: '10px', marginTop: '-12px' }}>{activeStory.storyName}</span>
				<div className="votes">
					{pointArray.map((value, index) => {
						return (
							<div
								className="points"
								key={index}
								onClick={() => {
									
									setPoint(value)
									console.log("in active store")}
								// this.setVotesForStory(value)
								}
							>
								{value}
							</div>
						);
					})}
				</div>
			</div>
		);
	}

	// setVotesForStory= (value) => {
	// 	const {sessionData} = this.props;
	// 	const {votedPoints} = this.state;
	// 	if(parseInt(sessionData.numberOfVoters) == votedPoints.length){
	// 		console.log("finish")
	// 	}else {
	// 		votedPoints.push(value)
	// 	}

	// }

	// sendVotes = (value) => {
	// 	const {activeStory,setPoints} = this.props;
	// 	let points = {
	// 		storyId:activeStory.storyId,
	// 		values:value
	// 	}
	// 	setPoint(points)
	// }
}

const mapStateToProps = ({ scrumPokerReducers }) => {
	let { activeStory, sessionData } = scrumPokerReducers;
	return { activeStory, sessionData };
};

ActiveStoryVote.propTypes = {};
export default connect(mapStateToProps, { setPoint })(ActiveStoryVote);
