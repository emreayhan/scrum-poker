import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import { NavLink } from 'react-router-dom';
import './Add-Story-List.css';
import { startSessionAction } from '../../store/actions/scrum-poker-actions';

class AddStoryList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sessionName: 'sprint planning 1',
			numberOfVoters: 1,
			storyList: [
				{
					storyName: '',
					storyPoint: 1,
					status: false
				}
			]
		};
	}

	render() {
		const { sessionName, numberOfVoters, storyList } = this.state;
		let sessionData = {
			sessionName,
			numberOfVoters,
			storyList
		};
		return (
			<div>
				<Header />
				<div>
					<div className="rowForNameAndVote">
						<div>
							<span>Session Name</span>
							<input
								type="text"
								className="inputText"
								maxLength="200"
								value={sessionName}
								onChange={(e) => this.handleChangeSessionName(e)}
							/>
						</div>
						<div>
							<span>Number Of Voters</span>
							<input
								type="text"
								className="inputText"
								onChange={(e) => this.handleChangeNumberOfVoters(e)}
								value={numberOfVoters}
							/>
						</div>
					</div>
					<div className="textAreaLabel">Paste your story list (Each line will be converted as a story)</div>
					<div>
						<textarea
							id="textarea"
							className="textarea"
							rows="15"
							cols="40"
							onBlur={() => this.getStoryListAsArray()}
						/>
					</div>
					<NavLink to="/poker-planning-view-as-scrum-master">
						<button onClick={() => this.props.startSessionAction(sessionData)}>Start Session</button>
					</NavLink>
				</div>
			</div>
		);
	}

	handleChangeSessionName = (e) => {
		this.setState({ sessionName: e.target.value });
	};

	handleChangeNumberOfVoters = (e) => {
		this.setState({ numberOfVoters: e.target.value.replace(/[^1-9]/, '') });
	};

	getStoryListAsArray = () => {
		let myStoryList = document.getElementById('textarea').value;
		let arrayOfStoryList = myStoryList.split(/\n/);
		let list = arrayOfStoryList.map((item, index) => {
			return {
				storyName: item,
				storyPoint: 0,
				status: false,
				storyId: Math.random()
			};
		});
		this.setState({
			storyList: list
		});
	};
}

const mapStateToProps = ({ scrumPokerReducers }) => {
	let { sessionData } = scrumPokerReducers;
	return { sessionData };
};

AddStoryList.propTypes = {
	sessionData: PropTypes.object
};

export default connect(mapStateToProps, { startSessionAction })(AddStoryList);
