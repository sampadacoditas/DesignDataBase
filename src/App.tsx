import React, { useEffect, useState } from 'react';
import { Login } from './Pages/Login/Login';
import { MainRouters } from './MainRouters/MainRouters';
import { RoutesData } from './Routes/Routes';
import "./App.css";
import Switch from '@mui/material/Switch/Switch';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme:any=()=>{
    if(theme==="light")
    {
      setTheme("dark")
    }
    else{
      setTheme("light")
    }
  }
  
  useEffect(()=>{
    document.body.className=theme;
  },[theme])
  return (
    <div className={`App ${theme}`}>
    {/* <Login/> */}
    {/* <Switch
            // checked={loading}
            onClick={toggleTheme}
            name="loading"
            color="primary"
          /> */}
          {/* <label htmlFor="">Toggle Button</label> */}
    {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
    <MainRouters array={RoutesData}/>
    </div>
  );
}

export default App;
