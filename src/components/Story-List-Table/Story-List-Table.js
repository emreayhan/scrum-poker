import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Story-List-Table.css';
import { getActiveStory } from '../../store/actions/scrum-poker-actions';

class StoryListTable extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<table>
				<thead>
					<tr>
						<td>Story</td>
						<td>Story Point</td>
						<td>Status</td>
					</tr>
				</thead>
				<tbody>
					{this.props.sessionData.storyList.map((item, index) => {
						return (
							<tr key={index}>
								<td onClick={() => {
									console.log(item)
									this.props.getActiveStory(item)}
									}>{item.storyName}</td>
								<td>{item.storyPoint === 0 ? '' : item.storyPoint}</td>
								<td>{item.status === false ? 'Not Voted' : 'Voted'}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}

const mapStateToProps = ({ scrumPokerReducers }) => {
	let { sessionData, activeStory } = scrumPokerReducers;
	return { sessionData, activeStory };
};

StoryListTable.propTypes = {};

export default connect(mapStateToProps, { getActiveStory })(StoryListTable);
