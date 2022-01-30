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
import { useState, useEffect } from 'react'
import { logOut, verifyUser } from "./services/users";
import { useNavigate } from 'react-router-dom'
import Layout from '../src/components/Layout/Layout'


function App() {


  const [leads, setLeads] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate()


  useEffect(() => {
    const fetchUser = async () => {
      const res = await verifyUser();
      res ? setLoggedIn(true) : setLoggedIn(false);
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await logOut()
    setLoggedIn(false)
    navigate('/')
  }

  return (
    <div className="App">
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budget" element={<All />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login/" element={<SignIn setLoggedIn={setLoggedIn}/>} />
        <Route path="/budget/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
        <Route path="/owned" element={<Owned />} />
        <Route path="/DTI" element={<DTI />} />
        <Route path="/edit/:id" element={<Edit />} />
        </Routes>
        </Layout>
    </div>
  )
}

export default App;
