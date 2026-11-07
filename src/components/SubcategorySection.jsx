import React, { useState } from 'react';
import MenuItem from './MenuItem';
import './SubcategorySection.css';

const SubcategorySection = ({
  subcategory,
  categoryName,
  priorityStartIndex = Number.MAX_SAFE_INTEGER,
  priorityImageCount = 0,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="subcategory-section-luxury">
      <div 
        className={`subcategory-header-luxury ${isExpanded ? 'active' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="header-content">
          <h3 className="subcategory-title-luxury">
            {subcategory.name}
          </h3>
          <span className="item-count-badge">
            {subcategory.items.length} {subcategory.items.length === 1 ? 'item' : 'items'}
          </span>
        </div>
        
        <div className={`icon-wrapper ${isExpanded ? 'expanded' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
      </div>
      
      <div className={`subcategory-items-grid ${isExpanded ? 'expanded' : ''}`}>
        <div className="grid-inner">
          {subcategory.items.map((item, itemIndex) => (
            <MenuItem
              key={item.id}
              item={item}
              loadingPriority={priorityStartIndex + itemIndex < priorityImageCount}
            />
          ))}
        </div>
        
        {subcategory.notice && (
          <div className="subcategory-notice-wrapper">
            <div className="subcategory-notice-luxury">
              <div className="notice-icon-animate">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
                </svg>
              </div>
              <span className="notice-text">{subcategory.notice}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubcategorySection;
