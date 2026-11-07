import React, { useRef, useEffect, useState } from 'react';
import './CategoryTabs.css';

const CategoryTabs = ({ categories, activeCategory, onCategoryChange }) => {
  const tabsRef = useRef(null);
  const wrapperRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Auto-scroll to active tab
  useEffect(() => {
    if (tabsRef.current) {
      const activeTab = tabsRef.current.querySelector('.category-tab-luxury.active');
      if (activeTab) {
        activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeCategory]);

  // Trigger animation when tabs become visible/sticky
  useEffect(() => {
    const handleScroll = () => {
      if (wrapperRef.current && !shouldAnimate) {
        const rect = wrapperRef.current.getBoundingClientRect();
        // Trigger animation when tabs reach the top (become sticky)
        if (rect.top <= 0) {
          setShouldAnimate(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldAnimate]);

  const handleCategoryClick = (categoryId) => {
    onCategoryChange(categoryId);
    // Scroll to menu content
    const menuContent = document.getElementById('menu-content');
    if (menuContent) {
      menuContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="category-tabs-wrapper-luxury" ref={wrapperRef}>
      <div className="category-tabs-container">
        <div className={`category-tabs-luxury ${shouldAnimate ? 'animate-hint' : ''}`} ref={tabsRef}>
          <button
            className={`category-tab-luxury ${!activeCategory || activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('all')}
          >
            <span className="tab-text">All Menu</span>
            {(!activeCategory || activeCategory === 'all') && <div className="tab-glow" />}
          </button>
          
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-tab-luxury ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <span className="tab-text">{category.name}</span>
              {activeCategory === category.id && <div className="tab-glow" />}
            </button>
          ))}
        </div>
      </div>
      <div className="tabs-fade-right">
        <div className="scroll-indicator-chevron">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
