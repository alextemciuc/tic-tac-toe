import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import useRoutes from './routes/routes';
import useAuth from './hooks/auth.hook';
import AuthContext from './context/AuthContext';

function App() {
  const { login, logout, token, id, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  if (!ready) {
    return (
      <div></div>
    );
  }

  return (
    <AuthContext.Provider value={{ login, logout, token, id, isAuthenticated }}>
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
