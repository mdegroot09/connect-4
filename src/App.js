import './App.css';
import {Provider} from 'react-redux'
import store from '../src/redux/store'
import {BrowserRouter} from 'react-router-dom';
import router from './router';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename='/'>
        <div className="App">
          {router}
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
