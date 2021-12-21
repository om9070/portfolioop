import About from './About';
import Aboutr from './Aboutr';
import './App.css';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Project from './Project';
import Server from './Service';
import { Route, Switch } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={About} />

        <Route exact path="/service" component={Server} />
        <Route exact path="/about" component={Aboutr} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
