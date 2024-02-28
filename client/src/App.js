import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import useRoutes from './routes/routes';
import useAuth from './hooks/auth.hook';
import AuthContext from './context/AuthContext';
import Loader from './components/Loader';
import "bootstrap";

function App() {
  const { login, logout, token, id, username, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  if (!ready) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{ login, logout, token, id, username, isAuthenticated }}>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          {routes}
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
