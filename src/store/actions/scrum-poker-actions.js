import { START_SESSION, GET_ACTIVE_STORY, SET_STORY_POINT, END_VOTE } from './types';

export const startSessionAction = (payload) => (dispatch) => {
	dispatch({
		type: START_SESSION,
		payload
	});
};

export const getActiveStory = (payload) => (dispatch) => {
	dispatch({
		type: GET_ACTIVE_STORY,
		payload
	});
};

export const setPoints = (payload) => (dispatch) => {
	dispatch({
		type: SET_STORY_POINT,
		payload
	});
};

export const endVote = (payload) => (dispatch) => {
	dispatch({
		type: END_VOTE,
		payload
	});
};
