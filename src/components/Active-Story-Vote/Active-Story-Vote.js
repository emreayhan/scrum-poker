import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Active-Story-Vote.css';
import { setPoints } from '../../store/actions/scrum-poker-actions';

class ActiveStoryVote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pointArray: [ 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 134, '?' ],
			votedPoints: [],
			numberOfRemainingChoice: 0
		};
	}

	componentDidMount() {
		const { sessionData } = this.props;
		this.setState({ numberOfRemainingChoice: sessionData.numberOfVoters });
	}

	render() {
		const { pointArray, numberOfRemainingChoice } = this.state;
		const { activeStory } = this.props;
		return (
			<div className="activeStoryContainer">
				<div style={{ marginTop: '15px' }}>
					<span style={{ marginLeft: '10px' }}>{activeStory.storyName}</span>
					<span style={{ float: 'right', marginRight: '32px' }}>
						Remaining Choice {numberOfRemainingChoice}
					</span>
				</div>

				<div className="votes">
					{pointArray.map((value, index) => {
						return (
							<div
								className="points"
								key={index}
								onClick={async () => {
									this.setVotesForStory(value);
									this.setState({
										numberOfRemainingChoice:
											this.state.numberOfRemainingChoice !== 0
												? this.state.numberOfRemainingChoice - 1
												: this.state.numberOfRemainingChoice
									});
								}}
							>
								{value}
							</div>
						);
					})}
				</div>
				<button style={{ marginRight: '32px' }} onClick={() => this.sendVotes()}>
					send votes
				</button>
			</div>
		);
	}

	setVotesForStory = (value) => {
		const { sessionData } = this.props;
		const { votedPoints } = this.state;
		if (parseInt(sessionData.numberOfVoters) == votedPoints.length) {
			alert('No choice left!');
		} else {
			votedPoints.push(value);
		}
	};

	sendVotes = () => {
		const { setPoints, sessionData } = this.props;
		const { votedPoints } = this.state;
		setPoints(votedPoints);
		this.setState({ votedPoints: [], numberOfRemainingChoice: sessionData.numberOfVoters });
	};
}

const mapStateToProps = ({ scrumPokerReducers }) => {
	let { activeStory, sessionData } = scrumPokerReducers;
	return { activeStory, sessionData };
};

ActiveStoryVote.propTypes = {
	sessionData: PropTypes.object,
	activeStory: PropTypes.object
};

export default connect(mapStateToProps, { setPoints })(ActiveStoryVote);
