import "./App.css";
import { Routes, Route } from 'react-router-dom'
import All from '../src/screens/All/All'
import Home from '../src/screens/Home/Home'
import SignUp from '../src/screens/SignUp/SignUp'
import SignIn from '../src/screens/SignIn/SignIn'
import Detail from '../src/screens/Detail/Detail'
import Create from '../src/screens/Create/Create'
import Owned from '../src/screens/Owned/Owned'
import DTI from '../src/screens/DTI/DTI'
import Edit from '../src/screens/Edit/Edit'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/budget/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
        <Route path="/owned" element={<Owned />} />
        <Route path="/DTI" element={<DTI />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App;
