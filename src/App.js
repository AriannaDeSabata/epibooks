import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import AllTheBooks from './components/AllTheBooks';
import WelcomeComponent from './components/WelcomeComponent';


function App() {
  return (
    <>
      <MyNav/>
      <WelcomeComponent/>
      <AllTheBooks/>
      <MyFooter/>
    </>
  );
}

export default App;
