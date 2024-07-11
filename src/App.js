import './App.css';
import EggContainer from './components/EggContainer'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <EggContainer />
      </Provider>
    </div>
  );
}

export default App;
