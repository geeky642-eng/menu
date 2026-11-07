import { useState, useMemo, useEffect } from 'react';
import Hero from './components/Hero';
import MenuScans from './components/MenuScans';
import CategoryTabs from './components/CategoryTabs';
import SubcategorySection from './components/SubcategorySection';
import MenuItem from './components/MenuItem'; // Added import for MenuItem
import { menuData, getCategoryData, searchItems } from './data/menuData';
import './App.css';

const PRIORITY_MENU_IMAGE_COUNT = 6;

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  // Set to true to bring the #scans page back live. When false,
  // visits to #scans / ?view=scans fall through to the main menu.
  const ENABLE_SCANS = false;
  const isScansHash = () => {
    if (!ENABLE_SCANS) return false;
    return (
      typeof window !== 'undefined' &&
      (window.location.hash === '#scans' ||
        window.location.hash === '#/scans' ||
        new URLSearchParams(window.location.search).get('view') === 'scans')
    );
  };
  const [isScansView, setIsScansView] = useState(isScansHash);

  useEffect(() => {
    document.getElementById('boot-splash')?.remove();
    const onHashChange = () => setIsScansView(isScansHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Get filtered data based on active category and search
  const displayData = useMemo(() => {
    // If searching, show search results
    if (searchQuery.trim()) {
      return searchItems(searchQuery);
    }
    
    // If "All" is selected, show all categories
    if (!activeCategory || activeCategory === 'all') {
      return menuData.categories;
    }
    
    // Show specific category
    const categoryData = getCategoryData(activeCategory);
    return categoryData ? [categoryData] : [];
  }, [searchQuery, activeCategory]);

  const isSearching = searchQuery.trim().length > 0;
  let renderedMenuItemIndex = 0;

  if (isScansView) {
    return (
      <div className="app">
        <MenuScans />
      </div>
    );
  }

  const shouldPrioritizeMenuImage = () => renderedMenuItemIndex++ < PRIORITY_MENU_IMAGE_COUNT;

  const getSubcategoryPriorityStartIndex = (subcategory) => {
    const startIndex = renderedMenuItemIndex;
    renderedMenuItemIndex += subcategory.items.length;
    return startIndex;
  };

  return (
    <div className="app">
      <Hero searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <CategoryTabs 
        categories={menuData.categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <main className="main-content" id="menu-content">
        <div className="container">
          {isSearching ? (
            // Search results view
            displayData.length > 0 ? (
              <div className="search-results">
                <div className="search-results-header">
                  <span>🔍</span>
                  Found {displayData.reduce((acc, cat) => acc + cat.items.length, 0)} results for "{searchQuery}"
                </div>
                
                {displayData.map((result, idx) => (
                  <div key={idx} className="search-result-category">
                    <h2 className="category-name-luxury">
                      {result.category} <span style={{ opacity: 0.5, fontSize: '0.6em', marginLeft: '10px' }}>/ {result.subcategory}</span>
                    </h2>
                    <div className="grid-inner">
                      {result.items.map((item) => (
                        <MenuItem
                          key={item.id}
                          item={item}
                          loadingPriority={shouldPrioritizeMenuImage()}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state-luxury">
                <div className="empty-icon">🍽️</div>
                <h3 className="empty-text">No culinary delights found</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>
                  Try searching for something else on our exquisite menu.
                </p>
              </div>
            )
          ) : (
            // Category view
            displayData.length > 0 ? (
              displayData.map((category) => (
                <div key={category.id} className="category-section">
                  {(activeCategory === 'all') && (
                    <h2 className="category-name-luxury">{category.name}</h2>
                  )}
                  {category.subcategories.map((subcategory) => (
                    <SubcategorySection
                      key={subcategory.id}
                      subcategory={subcategory}
                      categoryName={category.name}
                      priorityStartIndex={getSubcategoryPriorityStartIndex(subcategory)}
                      priorityImageCount={PRIORITY_MENU_IMAGE_COUNT}
                    />
                  ))}
                </div>
              ))
            ) : (
              <div className="empty-state-luxury">
                <div className="empty-icon">📋</div>
                <h3 className="empty-text">Menu Section Empty</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>
                  We are currently updating this section of our menu.
                </p>
              </div>
            )
          )}
        </div>
      </main>
      
      <footer className="footer-luxury">
        <div className="footer-main">
          <div className="container">
            <div className="footer-grid">
              {/* Logo and Address Section */}
              <div className="footer-section footer-brand-section">
                <div className="footer-logo">
                  <img 
                    src="/images/logo1.png" 
                    alt="Presken Hotels & Resorts" 
                    className="footer-logo-img"
                    width="2334"
                    height="868"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="footer-address">
                  <h4>OUR HEAD OFFICE ADDRESS</h4>
                  <p>8 Foluso Alade Street, Lagos, Nigeria</p>
                </div>
                <div className="footer-contact">
                  <h4>OUR CUSTOMER CARE LINE</h4>
                  <a href="tel:+2348085482332" className="phone-link">+234 808 5482 332</a>
                  <a href="tel:+2348035685980" className="phone-link">+234 803 5685 980</a>
                  <a 
                    href="https://maps.app.goo.gl/NWr8bAMigTVZZNgE8" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="view-map-link"
                  >
                    View Map →
                  </a>
                </div>
              </div>

              {/* WhatsApp Contact Section */}
              <div className="footer-section footer-whatsapp">
                <h3 className="footer-heading">Get in Touch</h3>
                <p className="whatsapp-description">Have questions about our menu or food? Chat with our F&B Executive Director on WhatsApp</p>
                <a 
                  href="https://wa.me/2347057955077?text=Hello, I have an inquiry about the menu/food at Presken Hotels" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="whatsapp-button"
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="whatsapp-icon">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
                <div className="footer-social">
                  <a href="https://www.instagram.com/preskenhospitality" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                  </a>
                  <a href="https://www.tiktok.com/@preskenhotels_resorts" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                  <a href="https://x.com/presken_hotels" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/preskenhospitality2018/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-content">
              <p>Copyright © 2026 <span className="footer-brand-name">Presken Hotels & Resorts Limited</span>. All Rights Reserved.</p>
              <p className="developer-credit">
                Developed by{' '}
                <a 
                  href="https://olamiposi-portfolio.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="developer-link"
                >
                  Olamiposi
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

