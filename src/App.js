import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Layouts/Header';
import Footer from './Component/Layouts/Footer';
import Home from './Component/Pages/Home';


function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
