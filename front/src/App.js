import './App.scss'
import MainLayout from './containers/main-layout/MainLayout'
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <MainLayout/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
