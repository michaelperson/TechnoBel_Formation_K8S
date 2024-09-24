import {START, SUCCESS, ERROR} from '../actions/actions-QApi'

const initialQueryState = {
    loading: false,
    data: null,
    error: null
  };

  function qApiReducer(state=initialQueryState, action) {
    switch (action.type) {
      case START:
        return {
          ...state,
          error: null,
          loading: true
        };
      case SUCCESS:
        return {
          ...state,
          data: action.data,
          loading: false,
          error: null
        };
      case ERROR:
        return {
          ...state,
          error: action.error,
          loading: false
        }; 
      default:
        return initialQueryState;
    }
  }

  export default qApiReducer;