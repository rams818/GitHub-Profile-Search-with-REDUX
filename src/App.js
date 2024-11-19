import { Provider } from 'react-redux';
import './App.css';
import GithubProfileSearch from './components/GithubProfileSearch';
import { store } from './redux/store';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-info bg-danger text-white">
        <div className="container-fluid justify-content-center">
          <span className="navbar-brand mb-0 h1 font-bold">React Github Profile search with REDUX</span>
        </div>
      </nav>

      <Provider store={store}>
        <GithubProfileSearch />
      </Provider>
    </div>
  );
}

export default App;
