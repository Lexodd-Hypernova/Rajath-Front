import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Routing from "./Routing";
// import Surveyor from './components/surveyor/Surveyor';
import Admin from './components/admin/admin';
import { MobHeaderProvider } from './context/MobHeader';
import Approvals from './components/admin/Approvals';
function App() {

  return (
    <>
      <MobHeaderProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Routing />} />
            <Route index element={<Admin />} />
            <Route path="approvals" element={<Approvals />} />
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
