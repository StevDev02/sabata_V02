import { useRef, useState } from 'react';
import LogoHome from './LogoHome';
import { NavigationMenuDemo } from './Nav_Content_Center';
import './nav.css'
import { CartAndUser } from './Icons';

function NavHome() {
  const [hover, setHover] = useState(false);
  const timeoutRef = useRef(null);

  const handleHoverEnter = () => {
    clearTimeout(timeoutRef.current); 
    timeoutRef.current = setTimeout(() => {
      setHover(true);
    }, 210);
  };

  const handleHoverLeave = () => {
    clearTimeout(timeoutRef.current); 
    setTimeout(() => setHover(false), 150);
  };

  const handleClickLeave = () => {
    clearTimeout(timeoutRef.current); 
    setHover(!hover)
  };

  return ( 
    <nav 
      style={{ 
        backgroundColor: hover ? "#fff" : "transparent", 
        color: hover ? "#000" : "#fff" 
      }} 
      className='z-50 flex items-center justify-between px-10 py-2' 
      
    >
      <LogoHome />
      <ul className='flex items-center justify-between gap-10 p-1'>
        <div
        onMouseEnter={handleHoverEnter} 
        onMouseLeave={handleHoverLeave}
        onClick={handleClickLeave}>
        <NavigationMenuDemo/>
        </div>
        <a className="z-50 text-font_Poppins text-sm"href="https://www.framer.com/2023">CONTACTO</a>
      </ul>
      <CartAndUser hover={hover} />
    </nav> 
  );
}

export default NavHome;
