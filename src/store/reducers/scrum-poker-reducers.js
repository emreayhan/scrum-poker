import { START_SESSION, GET_ACTIVE_STORY, SET_STORY_POINT, END_VOTE } from '../actions/types';

const INITIAL_STATE = {
	sessionData: {
		sessionName: 'Sprint Planning 1',
		numberOfVoters: 1,
		storyList: [
			{
				storyName: '',
				storyPoint: 0,
				status: false,
				storyId: '',
				votes: []
			}
		]
	},
	activeStory: {
		storyName: '',
		storyPoint: 0,
		status: false,
		storyId: '',
	},
	points: []
	// points: {
	// 	storyId: '',
	// 	values: []
	// }
};

// sessionData is the data that we create on the first page.
// which has the session name, number of voters and the story list.
const scrumPokerReducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case START_SESSION:
			return { ...state, sessionData: action.payload };
		case GET_ACTIVE_STORY:
			return { ...state, activeStory: action.payload };
		case SET_STORY_POINT:
			return { ...state, points: action.payload };
		case END_VOTE:
			return { ...state, sessionData: action.payload, points: [] };
		default:
			return state;
	}
};

export default scrumPokerReducers;
