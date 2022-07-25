import { PERSONAL, PROFESSIONAL } from '../actions/action';

const INITIAL_STATE = {
  personal: '',
  professional: '',
};

function personalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case PERSONAL:
    return { ...state, personal: action.state };
  case PROFESSIONAL:
    return { ...state, professional: action.state };
  default: return state;
  }
}

export default personalReducer;
