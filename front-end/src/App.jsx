import RouteHandler from './components/RouteHandler';
import { MainContextProvider } from './utilities/MainContextProvider';

// the Home component is using the context provider to render the text

function App() {
  return (
    <MainContextProvider>
      <RouteHandler />
    </MainContextProvider>
  );
}

export default App;
