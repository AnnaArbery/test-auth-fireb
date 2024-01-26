import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {getAuth, createUserWithEmailAndPassword, signInAnonymously, onAuthStateChanged} from 'firebase/auth'
import {getDatabase, set, ref} from 'firebase/database';

import {setUser} from '../store/userSlice';
import Form from '../components/Form'

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const fromPage = location.state?.from.pathname || '/';



  const handleRegister = (email, password) => {
    const auth = getAuth();
    const db = getDatabase();

    // signInAnonymously(auth)
    //   .then(() => {
    //     console.log('Logged in as Anonymous!')
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage)
    //   });

    // onAuthStateChanged(auth, (user) => {
    //   console.log(user)
    //   if (user && user.uid) {
    //     set(ref(db, 'users/' + user.uid), {
    //       firstname: 'Ivanov2',
    //       lastname: 'Ivanovich2'
    //     });
    //     console.log('Добавлено')
    //   }
    // });

    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        // youtu.be/FjXzJ2wVs5g?t=925
        // set(ref(db, 'users/' + user.uid), {
        //   firstname: 'Ivanov',
        //   lastname: 'Ivanovich'
        // })

        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken
        }))
        navigate(fromPage)
      })
      .catch(() => alert('Не удалось войти'))
  }

  return (
    <div>
      <h2>Регистрация</h2>
      <Form title='register' handleClick={handleRegister} />
      <br/>Или войдите: <Link to='/login'>Вход</Link>
    </div>
  );
};

export default Register;