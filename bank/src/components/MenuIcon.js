import React from 'react';

function MenuIcon({ onClick }) {
  return (
    <div className="menu-icon" onClick={onClick}>
      &#9660; {/* Unicode for a downward-pointing triangle */}
    </div>
  );
}

export default MenuIcon;