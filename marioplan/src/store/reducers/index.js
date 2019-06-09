import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import auth from './auth';
import project from './project';

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  auth,
  project,
});

export default rootReducer;
