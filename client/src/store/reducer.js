export const initialState = {
  playingNow: null,
  name: '',
  singer: '',
  image: { url: 'https://melodyyaksh.s3.amazonaws.com/Rectangle+17.png' },
};

function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case 'SET_PLAYING':
      return {
        playingNow: action.playingNow,
        name: action.name,
        singer: action.singer,
        image: action.image,
      };

    default:
      return state;
  }
}
export default reducer;
