import React, { useEffect, useState } from 'react';
import './MenuScans.css';

const SCAN_PAGES = Array.from({ length: 8 }, (_, i) => `/images/menu-scans/page-${i + 1}.jpg`);
const LOADER_TIMEOUT_MS = 10000;

const MenuScans = () => {
  const [firstLoaded, setFirstLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setFirstLoaded(true), LOADER_TIMEOUT_MS);
    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = (index) => {
    setLoadedCount((prev) => prev + 1);
    if (index === 0) setFirstLoaded(true);
  };

  return (
    <div className="scans-page">
      {!firstLoaded && (
        <div className="scans-loader" role="status" aria-label="Loading menu photos">
          <img
            src="/images/logo1.png"
            alt="Presken Hotels & Resorts"
            className="scans-loader-logo"
            width="280"
            height="104"
          />
          <div className="scans-ring" aria-hidden="true" />
          <p className="scans-loader-text">Preparing our menu…</p>
          <p className="scans-loader-count">{Math.min(loadedCount, SCAN_PAGES.length)} / {SCAN_PAGES.length}</p>
        </div>
      )}

      <div className={`scans-list ${firstLoaded ? 'ready' : ''}`}>
        {SCAN_PAGES.map((src, index) => (
          <figure className="scan-card" key={src}>
            <img
              src={src}
              alt={`Printed menu page ${index + 1}`}
              className="scan-img"
              width="1080"
              height="1440"
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              decoding={index === 0 ? 'sync' : 'async'}
              onLoad={() => handleImageLoad(index)}
              onError={() => handleImageLoad(index)}
            />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default MenuScans;
