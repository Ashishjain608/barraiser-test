import React, { useEffect, useState } from "react";
import { getNavItems } from "../../api/CommonApi";
import "./Navbar.css";

const Navbar = () => {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    getNavItems().then((res) => {
      setNavItems(res);
    });
  }, []);

  return (
    <div className="nav-bar">
      {navItems.map((itm) => (
        <div className="nav-item">
          <span>{itm.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
