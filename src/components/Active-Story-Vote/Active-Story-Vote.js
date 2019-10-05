import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Active-Story-Vote.css'
import { setPoints } from '../../store/actions/scrum-poker-actions';

class ActiveStoryVote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pointArray: [ 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 134, '?' ],
			votedPoints:[]
		};
	}

	render() {
		const { pointArray } = this.state;
		return (
			<div style={{border:"1px solid gray", minHeight: "340px",minWidth:"120px"}}>
                <span style={{marginLeft:"10px",marginTop:"-12px"}}>{this.props.activeStory.storyName}</span>
				<div className="votes">
					{pointArray.map((value,index) => {
                        return <div className="points" 
                        key={index}
						onClick={() => this.setVotesForStory(value) }
						>{value}</div>;
					})}
				</div>
			</div>
		);
	}

	setVotesForStory= (value) => {
		this.state.votedPoints.push(value)
	}
}

const mapStateToProps = ({ scrumPokerReducers }) => {
	let { activeStory,points } = scrumPokerReducers;
	return { activeStory,points };
};

ActiveStoryVote.propTypes = {};
export default connect(mapStateToProps, {setPoints})(ActiveStoryVote);
