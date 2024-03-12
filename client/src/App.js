import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
// import { Auth } from './pages/Auth';
import Home from './pages/Home';
import PrivateRoute from './PrivateRoute';
import socketIO from 'socket.io-client';

const socket = socketIO.connect('http://localhost:5000');

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<PrivateRoute/>} >
        {/* <Route path='/' element={<Auth/>} /> */}
          <Route path='/chat' element={<Home socket={socket} />} />
        </Route>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </Router>    
    </>    
  );
}

export default App;
