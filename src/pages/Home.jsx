import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {removeUser} from '../store/userSlice';
// import useAuth from '../hooks/useAuth'

const Home = () => {
  // const [auth, setAuth] = useState(false);
  const {email, token, id} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleRemove = () => {
    dispatch(removeUser())
    navigate('/login')
  }

  return (
    <div>
      <h2>Главная</h2>
      На главную удалось зайти {email}
      <button onClick={handleRemove}>Выйти</button>
    </div>
  );
};

export default Home;

// useNavigate
// let navigate = useNavigate();
// useEffect(() => {
//   if (!auth) {
//     return navigate('login');
//   }
// }, [auth]);