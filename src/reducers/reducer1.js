const initialState = {
    score: 0,
    currentQuestion: 0,
    duration: 30,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT_SCORE':
        return { ...state, score: state.score + 20 };
      case 'NEXT_QUESTION':
        return { ...state, currentQuestion: state.currentQuestion + 1 };
      case 'SET_DURATION':
        return { ...state, duration: 30 };
      case 'DECREMENT_DURATION':
        return { ...state, duration: state.duration - 1 };

      case 'RESET_QUESTION':
        return {
        duration: 30,
        score: 0,
        currentQuestion: 0         
      };
      default:
        return state;
    }
  };




export default reducer