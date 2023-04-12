import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import { MainContextProvider } from './utilities/MainContextProvider';

// the Home component is using the context provider to render the text

function App() {
  return (
    <MainContextProvider>
      <Container fluid className="p-0 vh-100">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/troops' element={<Home />} />
          <Route path='/calendar' element={<Home />} />
          <Route path='/tasks' element={<Home />} />
          <Route path='/msl' element={<Home />} />
          <Route path='/unit' element={<Home />} />
        </Routes>
      </Container>
    </MainContextProvider>
  );
}

export default App;
