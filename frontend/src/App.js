import "./App.css";
import { Routes, Route } from 'react-router-dom'
import All from '../src/screens/All/All'
import Home from '../src/screens/Home/Home'
import SignOut from './screens/SignOut/SignOut'
import SignIn from '../src/screens/SignIn/SignIn'
import Detail from '../src/screens/Detail/Detail'
import Create from '../src/screens/Create/Create'
import DTI from '../src/screens/DTI/DTI'
import Edit from '../src/screens/Edit/Edit'
import { useState, useEffect } from 'react'
import { verifyUser } from "./services/users";
import Layout from '../src/components/Layout/Layout'
import EditExp from '../src/screens/Edit/EditExp'


function App() {


  const [user, setUser] = useState(null);


  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);


  return (
    <div className="App">
      <Layout user={user} setUser={setUser}>
      <Routes>
        <Route path="/" element={<Home user={user}/>} />
        <Route path="/budget" element={<All />} />
        <Route path="/sign-out" element={<SignOut setUser={setUser}/>} />
        <Route path="/login/" element={<SignIn setUser={setUser}/>} />
        <Route path="/budget/:id" element={<Detail user={user}/>} />
        <Route path="/create" element={<Create user={user}/>} />
        <Route path="/DTI" element={<DTI />} />
          <Route path="/edit/:id" element={<Edit user={user} />} />
          <Route path="/expense/edit/:id" element={<EditExp user={user}/>} />
        </Routes>
        </Layout>
    </div>
  )
}

export default App;
