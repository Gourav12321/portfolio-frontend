import React, { useState, useRef, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';

function Navbar() {
  const [hamburger, setHamburger] = useState(false);
  const [animation, setAnimation] = useState(false); // State to manage animation
  const cssRef = useRef(null);

  useEffect(() => {
    if (cssRef.current) {
      if (hamburger) {
        cssRef.current.classList.add('navbar-expanded');
        cssRef.current.classList.remove('navbar-collapsed');
        setAnimation(true); // Trigger animation
      } else {
        cssRef.current.classList.add('navbar-collapsed');
        cssRef.current.classList.remove('navbar-expanded');
        setAnimation(false); // Reverse animation
      }
    }
  }, [hamburger]);

  const handleClick = () => {
    setHamburger(prev => !prev);
  };

  return (
    <div className='absolute flex flex-col right-0 top-0 mt-4 lg:mr-6 ml-2 w-[60px] md:h-[95vh] lg:h-[95vh] bg-[#20202A] z-30'>
      <div className='bg-[#252531] w-full h-[4rem] flex justify-center items-center'>
        <button onClick={handleClick} className='p-5'>
          <GiHamburgerMenu className='text-[#717175] text-xl' />
        </button>
      </div>
      <div>
        {hamburger && (
          <div className={`bg-[#20202A] text-white w-[200px] absolute right-0 top-0 h-[95vh] ${hamburger? 'nav-links' : 'nav-links fade-out'}`}>
            <div className='w-full h-[4rem] bg-[#252531] text-[#717175] flex items-center pl-5'>
              <button onClick={handleClick} className='w-10 h-10 flex justify-center items-center'>
                <ImCross />
              </button>
            </div>
            <div className='flex flex-col items-center justify-center md:h-[63vh] h-[100vh] gap-4 bg-[#20202A] text-white pb-[18rem] md:pb-0'>
              <Link to='/'>Home</Link>
              <Link to='/education'>Education</Link>
              <Link to='/project'>Project</Link>
              <Link to='/contact'>Contact</Link>
            </div>
          </div>
        )}
      </div>
      <div className='hidden md:flex absolute bottom-0 h-[7rem] bg-[#252531] justify-center items-center navbar-container navbar-collapsed' ref={cssRef}>
        <p className='bg-[#FFC107] md:w-10 w-6 flex justify-center items-center md:h-10 h-6 rounded-full'>EN</p>
      </div>
    </div>
  );
}

export default Navbar;
