const initialState = {
  projects: [
    { id: '1', title: 'Peach Missing!', content: 'Help me find Peach !' },
    { id: '2', title: 'Star Hunt', content: 'Collect all the Stars' },
    { id: '3', title: "Yoshi's rage", content: 'Ride at your own peril' },
  ],
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      return {
        ...state,
        projects: state.projects.push(action.payload),
      };

    default:
      break;
  }

  return state;
};

export default projectReducer;
