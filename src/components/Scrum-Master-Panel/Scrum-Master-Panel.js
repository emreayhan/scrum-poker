import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getActiveStory } from '../../store/actions/scrum-poker-actions';

class ScrumMasterPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { sessionData } = this.props;
		console.log(sessionData.numberOfVoters, 'sessionData.numberOfVoters');
		let voterArray = Array(parseInt(sessionData.numberOfVoters)).fill(null).map((val, i) => {
			return {
				voterId: i,
				votedPoint: 0
			};
		});
		return (
			<div style={{border:"1px solid gray",padding:"15px"}}>
				<div>Scrum Master Panel</div>
				<div style={{marginTop:"10px",marginBottom:"20px"}}>{this.props.activeStory.storyName} is active</div>
				{voterArray.map((item, index) => {
					return <div>Voter {index+1} : </div>;
				})}
				<button style={{marginTop:"130px"}}>End Voting For {this.props.activeStory.storyName}</button>
			</div>
		);
	}
}

const mapStateToProps = ({ scrumPokerReducers }) => {
	let { sessionData, activeStory } = scrumPokerReducers;
	return { sessionData, activeStory };
};

ScrumMasterPanel.propTypes = {};

export default connect(mapStateToProps, { getActiveStory })(ScrumMasterPanel);
