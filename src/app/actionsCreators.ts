import { ACTIONS } from './actions';

export const nextPage = () => {
	return {
		type: ACTIONS.NEXT_PAGE,
	};
};

export const prevPage = () => {
	return {
		type: ACTIONS.PREV_PAGE,
	};
};
