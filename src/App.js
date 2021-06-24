import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateEmployee from './components/CreateEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import DeleteEmployee from './components/DeleteEmployee';

function App() {


  return (
    <div className="app">
      <Router>
        
          <Header/>
          <div className="container">
            <Switch>
              {/* SWITCH ROUTING IS SIMILAR TO urls.py IN DJANGO */}
              {/* THE 'exact' IN THE NEXT LINE PREVENTS ALL OTHER ROUTES FROM HITTING THE DEFAULT PATH */}
              <Route path="/" exact component={ListEmployeeComponent}></Route>
              <Route path="/employees" component={ListEmployeeComponent}></Route>
              <Route path="/add-employee" component={CreateEmployee}></Route>
              <Route path="/update-employee/:id" component={UpdateEmployee}></Route>
              <Route path="/delete-employee/:id" component={DeleteEmployee}></Route>
            </Switch>
          </div>
          <Footer/>
        
      </Router>
    </div>
    
  );
}

export default App;
