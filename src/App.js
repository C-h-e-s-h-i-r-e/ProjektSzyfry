import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Caesar from './component/caesar/caesar_cipher';
import MorseCode from './component/morse/morse_code';
import Vugenere from './component/vigenère/vugenere';

function App() {
  return (
    <div className="App">

      <Router>
        <div>

              <Caesar />


              <MorseCode />


              <Vugenere />

          <Switch>
            <Route path='/caesar' component={() => {
              window.location.href = 'https://en.wikipedia.org/wiki/Affine_cipher';
              return null;
            }} />

            <Route path='/morse' component={() => {
              window.location.href = 'https://en.wikipedia.org/wiki/Morse_code';
              return null;
            }} />

            <Route path='/vugenere' component={() => {
              window.location.href = 'https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher';
              return null;
            }} />
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
