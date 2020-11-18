import './App.css';
import Company from './Company'
import Footer from './Footer'
import LoginCard from './LoginCard'

function App() {
  return (
    <div className="app">
      <main className="full-h">
      <div className="interface__container container d-flex align-items-center full-h">
        <div className="row">
        <div className="interface__intro col-7">
          <Company/>
        </div>
        <div className="interface__logincard col">
          <LoginCard/>
        </div>
        </div>
        
      </div>
      <div className="footer__container">

        <Footer/>
      </div>
      </main>
    </div>
  );
}

export default App;
