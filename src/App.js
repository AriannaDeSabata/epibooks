import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import AllTheBooks from './components/AllTheBooks';
import WelcomeComponent from './components/WelcomeComponent';
import { useState } from 'react';
import { ThemeContext } from './components/modules/context';


function App() {
  const [theme, setTheme] =useState("light")
  const [search, setSearch] = useState("")

  if(theme === "dark"){
    document.body.className = "darkMode"
  }else{
        document.body.className = " "
  }

  return (

      <ThemeContext.Provider value={[theme, setTheme]}>
        <MyNav setSearch={setSearch}/>
        <WelcomeComponent/>
        <AllTheBooks searchValue={search}/>
        <MyFooter/>
      </ThemeContext.Provider>

  );
}

export default App;
