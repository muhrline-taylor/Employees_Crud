import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateEmployee from './components/CreateEmployee';

function App() {


  return (
    <div className="app">
      <Router>
        
          <Header/>
          <div className="container">
            <Switch>
              <Route path="/" component={ListEmployeeComponent}></Route>
              <Route path="/employees" component={ListEmployeeComponent}></Route>
              <Route path="/add-employee" component={CreateEmployee}></Route>
              
            </Switch>
          </div>
          <Footer/>
        
      </Router>
    </div>
    
  );
}

export default App;
