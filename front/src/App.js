import './App.scss'
import MainLayout from './containers/main-layout/MainLayout'
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ErrorBoundary>
          <MainLayout/>
        </ErrorBoundary>
      </div>
    </QueryClientProvider>
  );
}

export default App;
