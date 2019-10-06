import React, { Component } from 'react';
import StoryListTable from '../../components/Story-List-Table/Story-List-Table';
import ActiveStoryVote from '../../components/Active-Story-Vote/Active-Story-Vote';
import Header from '../../components/Header/Header';

class ViewAsDeveloper extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Header />
				<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
					<StoryListTable />
					<ActiveStoryVote />
				</div>
			</div>
		);
	}
}

ViewAsDeveloper.propTypes = {};
export default ViewAsDeveloper;
