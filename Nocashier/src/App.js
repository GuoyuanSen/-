import React from 'react';
import './assets/css/App.css';


import Home from './components/Home';
import News from './components/News';
function App() {
  return (
    <div className="App">

        你好 根组件
       <Home></Home>
       <hr/>
       <News></News>
    </div>
  );
}

export default App;
