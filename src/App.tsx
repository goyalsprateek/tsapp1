import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Employee from './components/Employee';
import EmpList from './components/EmpList';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Function1 from './components/Function1';
import Hook1 from './components/Hook1';
import Reducer1 from './components/Reducer1';

function App() {
  const myEmp = {
    name:'OK',
    dept:'IT',
    age:35
  }

  const myList2 = [
    {name:'HR'}
  ]

  const myHandler = (event:React.MouseEvent<HTMLButtonElement>) =>{
    console.log('Button Clicked')
    console.log(event)
  }

  return (
    <div className="App">
     <Reducer1 />
    </div>
  );
}

export default App;
