// Action Creator - function returning an object
const setSortBy = (name) => ({
  type: 'SET_SORT_BY',
  payload: name,
});

// Action 
// const setSortBy = ({
//   type: 'SET_SORT_BY',
//   payload: name,
// });

const setCategory = (catIndex) => ({
  type: 'SET_CATEGORY',
  payload: catIndex,
});
