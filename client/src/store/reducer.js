export const initialState = {
  playingNow: '',
};

function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case 'SET_PLAYING':
      return {
        playingNow: action.playingNow,
      };

    default:
      return state;
  }
}
export default reducer;
