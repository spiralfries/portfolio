import './styles/App.css';
import MainNavigation from './components/MainNavigation/MainNavigation';
import { Route, Switch, Redirect } from 'react-router-dom';
import Portfolio from './pages/Portfolio/Portfolio';
import ProjectSelected from './pages/Portfolio/ProjectSelected/ProjectSelected';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';

function App() {


    const log = console.log;


  const pages = (
      <Switch>
          <Route path="/about/" exact>
              <About/>
          </Route>
          <Route path="/contact/" exact>
              <Contact />
          </Route>
          <Route path="/portfolio/" exact>
              <Portfolio />
          </Route>
          <Route path="/portfolio/:projectId" exact>
              <ProjectSelected/>
          </Route>
          <Route path="/" exact>
              <Redirect to="/portfolio/" />
          </Route>
          <Route path="*">
              <NotFound />
          </Route>
      </Switch>
  )

  return (
    <div className="App">
        <MainNavigation />
        {pages}
    </div>
  );
}

export default App;
