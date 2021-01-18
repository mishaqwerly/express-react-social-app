import './App.scss'
import MainPage from './containers/main-page/MainPage'
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <MainPage/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
