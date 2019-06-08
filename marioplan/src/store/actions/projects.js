export const createProject = project => dispatch => {
  // Execute async code
  dispatch({ type: 'CREATE_PROJECT', project });
};
