import './App.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { itemReducer } from './Store/Reducer';
import { Posts } from './Store/Posts';
import { Sample } from './Store/Sample';

const store = configureStore({
  reducer: itemReducer,
  middleware: [thunk],
});

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Posts />
      </Provider>
    </div>
    // <Sample />
  );
}

export default App;
