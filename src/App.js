import User from './components/user'
import Login from'./components/login';
import React from 'react'; //for JSX 
import Header from './components/header';
import logo from './logo.svg';
import './App.css';

//create variable for do render.
let fullName = "yunus emre karataş";
const isLogedIn=false;
function App() {

 return (
  <>
  <div className='div1'>
      
      <User name="yunus emre" surname="karataş" age={23}/>
      <User name="ömer tekin" surname="yavuz" age={24}/>
    

  </div>
  </>
  );
}
export default App;
