import { useRef, useState } from 'react';
import { IconsNav } from './Icos';
import LogoHome from './LogoHome';
import { NavigationMenuDemo } from './Nav_Content_Center';

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
      className='flex z-50 py-2 items-center justify-between px-10' 
      
    >
      <LogoHome />
      <ul className='flex items-center justify-between p-1 gap-7'>
        <div
        onMouseEnter={handleHoverEnter} 
        onMouseLeave={handleHoverLeave}
        onClick={handleClickLeave}>
        <NavigationMenuDemo/>
        </div>
        <a className="z-50"href="/ec/contact">Contacto</a>
      </ul>
      <IconsNav hover={hover} />
    </nav> 
  );
}

export default NavHome;
