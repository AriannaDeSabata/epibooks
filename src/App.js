import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import AllTheBooks from './components/AllTheBooks';
import WelcomeComponent from './components/WelcomeComponent';
import { useState } from 'react';
import { ThemeContext } from './components/modules/context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundComponent from './components/NotFoundComponent';
import BookDetails from './components/BookDetails';


function App() {
  const [theme, setTheme] =useState("light")
  const [search, setSearch] = useState("")

  if(theme === "dark"){
    document.body.className = "darkMode"
  }else{
        document.body.className = " "
  }

  return (

    <BrowserRouter>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <MyNav setSearch={setSearch}/>
        <div className='pageContainer'>
          <WelcomeComponent/>
          <Routes>
            <Route path='/' element={<AllTheBooks searchValue={search}/>}/>
            <Route path='*' element={<NotFoundComponent/>}/>
            <Route path='/details/:asin' element={<BookDetails/>}/>
          </Routes>
          <MyFooter/>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
