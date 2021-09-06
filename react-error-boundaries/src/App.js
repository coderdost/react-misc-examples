import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Alert message=""></Alert>
    </ErrorBoundary>
  );
}

function Alert({ message }) {
  if (typeof message !== 'string' || !message) {
    throw new Error('Message must be string');
  }
  return <h1>{message}</h1>;
}

export default App;
