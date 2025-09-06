import './App.css';
import { Provider } from 'react-redux';
import { Board } from './components/Board';
import { setupStore } from './store';
// import { ResetButton } from './components/ResetButton'; в чем тут ошибка???

function App() {
  return (
    <Provider store={setupStore()}>
      <div className="app">
        <Board />
        {/* <ResetButton /> */}
      </div>
    </Provider>
  );
}

export default App;