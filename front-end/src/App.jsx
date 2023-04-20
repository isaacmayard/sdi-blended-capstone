import NavBar from './components/NavBar';
import RouteHandler from './components/RouteHandler';
import { MainContextProvider } from './utilities/MainContextProvider';

// the Home component is using the context provider to render the text

function App() {
  return (
    <MainContextProvider>
      <div className=' tw-flex tw-min-h-[100vh] tw-w-screen tw-bg-gradient-to-r tw-from-sky-500 tw-from-5% tw-via-blue-800  tw-to-sky-500 tw-opacity-95'>
        <NavBar />
        <RouteHandler />
      </div>
    </MainContextProvider>
  );
}

export default App;
