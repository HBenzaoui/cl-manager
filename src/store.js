import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

//Reducers
import notifyReducer from './reducers/notifyReducer';
import settingReducer from './reducers/settingReducer';

const firebaseConfig = {
  apiKey: 'AIzaSyDaQQaHwdwl4gcfBUbuzNo8Ewi5yqdL_QY',
  authDomain: 'cl-manager.firebaseapp.com',
  databaseURL: 'https://cl-manager.firebaseio.com',
  projectId: 'cl-manager',
  storageBucket: 'cl-manager.appspot.com',
  messagingSenderId: '7914462504'
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize firestore
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer,
  settings: settingReducer
});

// check for4 setting in local storage

if (localStorage.getItem('settings') == null) {
  //default setting
  const defaultSetting = {
    disableBalanceAdd: true,
    disableBalanceEdit: false,
    allowRegister: false
  };

  //set to localStorage
  localStorage.setItem('settings', JSON.stringify(defaultSetting));
}

//Create initial State
const initialState = { settings: JSON.parse(localStorage.getItem('settings')) };

// create the store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
