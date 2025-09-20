import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavbar() {
  return (
    <div className='text-white absolute w-full text-2xl top-0 z-20'>
      <nav className='flex justify-evenly items-center pb-10 pt-7 bg-slate-900'>
        <Link to='/admin-home'>Home</Link>
        <Link to='/admin-education'>Education</Link>
        <Link to='/admin-project'>Project</Link>
        <Link to='/admin-contact'>Contact</Link>
        <Link to='/admin-upload'>Upload</Link>
      </nav>
    </div>
  )
}

export default AdminNavbar