import React from 'react';
import Navbar from './component/Navbar';
import Profile from './component/Profile';

const MainLayout = ({ children }) => {
  return (
    <div className="flex bg-[#191923] overflow-hidden m-0 example2">
      <div>
        <Navbar />
        <Profile />
      </div>
      <div className="h-[100vh] w-[62rem] overflow-auto scroll-smooth example2">
        <div className="flex bg-[#191923] overflow-hidden">
          <div className="h-[93.5vh] mt-6 w-[62rem] example2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
