import { ACTIONS, IAction } from './actions';

const initialState = {
	page: 0,
};

const reducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case ACTIONS.NEXT_PAGE: {
			return state.page === 2
				? { ...state, page: 0 }
				: { ...state, page: state.page + 1 };
		}
		case ACTIONS.PREV_PAGE: {
			return state.page === 0
				? { ...state, page: 2 }
				: { ...state, page: state.page - 1 };
		}
		default:
			return state;
	}
};

export default reducer;
