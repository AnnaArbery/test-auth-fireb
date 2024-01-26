import React from 'react';
import { useLocation, Navigate, Link, useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {setUser} from '../store/userSlice'
import Form from '../components/Form'
import { getDatabase, ref, child, get } from "firebase/database";

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const fromPage = location.state?.from.pathname || '/';
  const handleLogin = (email, password) => {
    const auth = getAuth();
    // const dbRef = ref(getDatabase());
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken
        }))
        // youtu.be/FjXzJ2wVs5g?t=1073
        // get(child(dbRef, `users/${user.uid}`))
        //   .then((result) => {
        //     if (!result.exists()) return console.log('Problem')
        //     console.log(result.val())
        //   })
        navigate(fromPage)
      })
      .catch(() => alert('Не удалось войти'))
  }

  return (
    <div>
      <h2>Вход</h2>
      <Form title='signIn' handleClick={handleLogin} />
      <br/>Или зарегистрируйтесь: <Link to='/register'>Регистрация</Link>
    </div>
  );
};

export default Login;