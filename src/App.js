import './static/css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import ViewEmployee from './components/ViewEmployee';
import EditEmployee from './components/EditEmployee';

function App() {
  
  return (
    <Router>
      <div className="app">
        <div className="app__header">
          <Header />
        </div>
        

        <div className="app__body">
          <Switch>
            <Route exact path="/employees" component={EmployeeList}></Route>
            <Route exact path="/employees/new" component={AddEmployee}></Route>
            <Route exact path="/employees/:id" component={ViewEmployee}></Route>
            <Route path="/employees/:id/edit" component={EditEmployee}></Route>
            
            
          </Switch>
        </div>

        <div className="app__footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
