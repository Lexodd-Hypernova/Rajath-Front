import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Routing from "./Routing";
// import Surveyor from './components/surveyor/Surveyor';
import Admin from './components/admin/admin';
import { MobHeaderProvider } from './context/MobHeader';
import Approvals from './components/admin/Approvals';
import History from './components/admin/History';
import Surveyor from './components/surveyor/Surveyor';
import Login from './components/login/Login';
import Signup from './components/login/Signup';
function App() {

  return (
    <>
      <MobHeaderProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Routing />} />
            <Route index element={<Admin />} />
            <Route path="approvals" element={<Approvals />} />
            <Route path="history" element={<History />} />
            <Route path="surveyor" element={<Surveyor />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            {/* <Route path="post" element={<Post />} />
          <Route path="post/:topic" element={<PostDetails />} />
          <Route path="profile" element={<Profile />} /> */}
            <Route />
          </Routes>
        </BrowserRouter>
      </MobHeaderProvider>
    </>
  )
}

export default App
