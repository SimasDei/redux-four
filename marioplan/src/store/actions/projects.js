export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('projects')
      .add({
        ...project,
        authorFistName: 'Dude',
        authorLastName: 'Bro',
        authorId: 'abcd1234',
        createdAt: new Date(),
      })
      .then(res => {
        // Execute async code
        dispatch({ type: 'CREATE_PROJECT', project });
      })
      .catch(error => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', error });
      });
  };
};
