import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import useRoutes from './routes/routes';

function App() {
  const routes = useRoutes();

  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        {routes}
      </div>
    </BrowserRouter>
  );
}

export default App;
