
import './App.css';
import Nav from './Nav'
import {Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Game from "./Pages/Game"
import Web from "./Pages/Web"
import Team from "./Pages/Team"
import Signin from "./Pages/Signin"
import User from "./Pages/User"
function App() {
  return (
    <div className="App">
<Nav/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/game" element={<Game/>}/>
  <Route path="/web" element={<Web/>}/>
  <Route path="/team" element={<Team/>}/>
  <Route path="/team/:id" element={<User/>}/>
  <Route path="/signin" element={<Signin/>}/>
</Routes>



    </div>
  );
}

export default App;
