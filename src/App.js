import { BrowserRouter as Router, Switch,  Route} from 'react-router-dom';
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import AddBooks from './Containers/AddBooks'
import SearchBooks from './Containers/SearchBooks'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
          <Switch>
              <Route exact path="/" component={ AddBooks } />
              <Route path="/search" component={ SearchBooks } />     
          </Switch>
        <Footer /> 
      </Router>
    </div>
  );
}

export default App;
