import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const routing = (
  <Router>
    <Navbar />

    <Switch>
      <Route exact path="/"> <News key="general" country="in" category="general" /> </Route>
      <Route exact path="/Business"> <News key="business" country="in" category="business" /></Route>
      <Route exact path="/Sports" ><News key="sports" country="in" category="sports" /></Route>
      <Route exact path="/health" ><News key="health" country="in" category="health" /> </Route>
      <Route exact path="/entertainment"> <News key="entertainment" country="in" category="entertainment" /> </Route>
      <Route exact path="/science" ><News key="science" country="in" category="science" /> </Route>
      <Route exact path="/technology"> <News key="technology" country="in" category="technology" /> </Route>
    </Switch>
  </Router>
)

function App() {
  return (
    <div className="App" >
      {routing}
    </div>
  );
}

export default App;
