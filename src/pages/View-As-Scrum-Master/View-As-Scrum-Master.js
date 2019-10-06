import React, { Component } from 'react';
import StoryListTable from '../../components/Story-List-Table/Story-List-Table';
import ActiveStoryVote from '../../components/Active-Story-Vote/Active-Story-Vote';
import ScrumMasterPanel from '../../components/Scrum-Master-Panel/Scrum-Master-Panel';
import Header from '../../components/Header/Header';

class ViewAsScrumMaster extends Component {
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
					<ScrumMasterPanel />
				</div>
			</div>
		);
	}
}

ViewAsScrumMaster.propTypes = {};
export default ViewAsScrumMaster;
