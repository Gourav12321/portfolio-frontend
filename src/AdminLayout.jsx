import React from 'react';


const AdminLayout = ({ children }) => {
  return (
    <div className="flex bg-[#191923] overflow-hidden m-0 example2">
    
      
          <div className=" mt-6 w-full example2">
            {children}
          </div>
        </div>
   
  );
};

export default AdminLayout;
