import React, { useState } from 'react';
import MenuItem from './MenuItem';
import './MenuSection.css';

const MenuSection = ({ title, items, itemCount }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="menu-section fade-in">
      <div 
        className="menu-section-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="menu-section-title">
          {title} <span className="item-count">({itemCount})</span>
        </h2>
        <svg 
          className={`expand-icon ${isExpanded ? 'expanded' : ''}`}
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      
      <div className={`menu-section-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <div className="menu-grid">
          {items.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
