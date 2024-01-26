import React from 'react';
import './styles/App.scss'
import {NavLink, Route, Routes, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import RequireAuth from './hoc/RequireAuth';

const linksRoutes = [
  {path: '/login', component: Login, exact: false},
  {path: '/register', component: Register, exact: true},
]
const setActive = ({isActive}) => isActive?'nav-active':'';

function App() {
  return (
    <div className='App'>
      <nav>
        <NavLink to='/' className={setActive}>Home</NavLink>
        <NavLink to='/register' className={setActive}>Регистрация</NavLink>
        <NavLink to='/login' className={setActive}>Вход</NavLink>
      </nav><br/><br/>

      <Routes>
        {linksRoutes.map((route, idx) =>
          <Route
            path={route.path}
            element={<route.component/>}
            exact={route.exact}
            key={idx}
          />
        )}
        <Route path='/' element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }/>
        <Route path='*' element={ <Navigate to={Login} /> } />
      </Routes>
    </div>
  );
}

export default App;
