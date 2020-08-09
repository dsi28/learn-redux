import React from 'react';
import './App.css';
import {Provider} from 'react-redux';

import Posts from './components/PostsComponent';
import PostForm from './components/PostFormComponent';

import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm/>
        <hr/>
        <Posts/>
      </div>
    </Provider>
  );
}

export default App;
