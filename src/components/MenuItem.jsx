import React from 'react';
import './MenuItem.css';

const getOptimizedImageSrc = (src) => {
  const fileName = src.split('/').pop();
  const extensionIndex = fileName.lastIndexOf('.');

  if (extensionIndex === -1) {
    return src;
  }

  const name = fileName.slice(0, extensionIndex);
  const extension = fileName.slice(extensionIndex + 1).toLowerCase();

  return `/images/thumbs/${name}-${extension}.jpg`;
};

const MenuItem = ({ item, loadingPriority = false }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageError, setImageError] = React.useState(!item.image?.trim());
  const [imageSrc, setImageSrc] = React.useState(() =>
    item.image?.trim() ? getOptimizedImageSrc(item.image) : ''
  );

  React.useEffect(() => {
    const hasImage = Boolean(item.image?.trim());
    setImageLoaded(false);
    setImageError(!hasImage);
    setImageSrc(hasImage ? getOptimizedImageSrc(item.image) : '');
  }, [item.image]);

  return (
    <div 
      className={`menu-item-luxury ${isExpanded ? 'expanded' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className={`menu-item-image-container ${imageError ? 'no-image' : ''}`}>
        {!imageError && (
          <>
            {/* Lightweight placeholder - avoids fetching the real image twice */}
            <div 
              className={`image-placeholder ${imageLoaded ? 'loaded' : ''}`}
            />
            
            {/* Actual image */}
            <img 
              src={imageSrc} 
              alt={item.name}
              className={`menu-item-img ${imageLoaded ? 'loaded' : ''}`}
              width="130"
              height="130"
              sizes="(max-width: 480px) 90px, 130px"
              loading={loadingPriority ? 'eager' : 'lazy'}
              fetchpriority={loadingPriority ? 'high' : 'auto'}
              decoding={loadingPriority ? 'sync' : 'async'}
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                if (imageSrc !== item.image) {
                  setImageLoaded(false);
                  setImageSrc(item.image);
                  return;
                }

                setImageError(true);
              }}
            />
          </>
        )}
        <div className="menu-item-overlay"></div>
      </div>
      
      <div className="menu-item-details">
        <div className="menu-item-header">
          <h3 className="menu-item-title">{item.name}</h3>
          <span className="menu-item-price-luxury">{item.price}</span>
        </div>
        
        <p className={`menu-item-desc ${isExpanded ? 'expanded' : ''}`}>
          {item.description}
        </p>
        
        {/* Add button removed as per user request - pricelist only */}
      </div>
    </div>
  );
};

export default MenuItem;
