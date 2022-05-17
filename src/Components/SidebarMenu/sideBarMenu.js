// REACT
import React, {useState} from 'react';

// COMPONENTS
import { sideBarData } from './sideBarData';

// STYLE SHEETS
import './sideBarMenu.css'



const SideBarMenu = () => {

  const [selected, setSelected] = useState(0);

  return(
    <div className="menu-container">
      <span className={`menu-heading`}>Menu</span>
      {sideBarData.map((menuItem, index) => {
        return (
          <div className={selected==index? 'sidebar-items active' : 'sidebar-items'}
               key={index}
               onClick={() => setSelected(index)}
          >
            <div className="sidebar-items-icon">
            <menuItem.icon/>
            </div>
            {menuItem.heading}
          </div>
          )
      })}
    </div>
  )
};

export default SideBarMenu;
