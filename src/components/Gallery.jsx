import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Image data using local assets
  const imageData = [
    { id: 1, src: '/src/assets/img1.jpg', alt: 'Gallery Image 1' },
    { id: 2, src: '/src/assets/img2.jpg', alt: 'Gallery Image 2' },
    { id: 3, src: '/src/assets/img3.jpg', alt: 'Gallery Image 3' },
    { id: 4, src: '/src/assets/img4.jpg', alt: 'Gallery Image 4' },
    { id: 5, src: '/src/assets/img5.jpg', alt: 'Gallery Image 5' },
    { id: 6, src: '/src/assets/img6.jpg', alt: 'Gallery Image 6' },
    { id: 7, src: '/src/assets/img7.jpg', alt: 'Gallery Image 7' },
    { id: 8, src: '/src/assets/img8.jpg', alt: 'Gallery Image 8' },
    { id: 9, src: '/src/assets/img9.jpg', alt: 'Gallery Image 9' },
    { id: 10, src: '/src/assets/img10.jpg', alt: 'Gallery Image 10' },
    { id: 11, src: '/src/assets/img11.jpg', alt: 'Gallery Image 11' },
    { id: 12, src: '/src/assets/img12.jpg', alt: 'Gallery Image 12' },
    { id: 13, src: '/src/assets/img13.jpg', alt: 'Gallery Image 13' },
    { id: 14, src: '/src/assets/img14.jpg', alt: 'Gallery Image 14' },
    { id: 15, src: '/src/assets/img15.jpg', alt: 'Gallery Image 15' },
    { id: 16, src: '/src/assets/img16.jpg', alt: 'Gallery Image 16' },
  ];

  // Load images with proper aspect ratios and fallbacks
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = await Promise.all(
        imageData.map(async (img, index) => {
          return new Promise((resolve) => {
            const imageElement = new Image();
            imageElement.onload = () => {
              resolve({
                ...img,
                naturalWidth: imageElement.naturalWidth,
                naturalHeight: imageElement.naturalHeight,
                aspectRatio: imageElement.naturalWidth / imageElement.naturalHeight
              });
            };
            imageElement.onerror = () => {
              // Fallback with SVG data URL if local image fails to load
              const svgContent = `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad${index}" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
                  </linearGradient>
                </defs>
                <rect width="400" height="300" fill="url(#grad${index})"/>
                <text x="200" y="150" text-anchor="middle" dominant-baseline="middle" fill="white" font-family="Arial, sans-serif" font-size="16" font-weight="500">${img.alt}</text>
              </svg>`;
              resolve({
                ...img,
                src: `data:image/svg+xml;base64,${btoa(svgContent)}`,
                naturalWidth: 400,
                naturalHeight: 300,
                aspectRatio: 4/3
              });
            };
            imageElement.src = img.src;
          });
        })
      );
      setImages(loadedImages);
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  // Grid layout positions matching the design exactly - using first 14 images
  const gridItems = [
    // Row 1
    { gridArea: "1 / 1 / 3 / 3", index: 0, row: 1, col: 1, rowSpan: 2, colSpan: 2 },
    { gridArea: "1 / 3 / 2 / 4", index: 1, row: 1, col: 3, rowSpan: 1, colSpan: 1 },
    { gridArea: "1 / 4 / 2 / 5", index: 2, row: 1, col: 4, rowSpan: 1, colSpan: 1 },
    { gridArea: "1 / 5 / 2 / 6", index: 3, row: 1, col: 5, rowSpan: 1, colSpan: 1 },
    
    // Row 2
    { gridArea: "2 / 3 / 3 / 4", index: 4, row: 2, col: 3, rowSpan: 1, colSpan: 1 },
    { gridArea: "2 / 4 / 3 / 5", index: 5, row: 2, col: 4, rowSpan: 1, colSpan: 1 },
    { gridArea: "2 / 5 / 3 / 6", index: 6, row: 2, col: 5, rowSpan: 1, colSpan: 1 },
    
    // Row 3
    { gridArea: "3 / 1 / 4 / 2", index: 7, row: 3, col: 1, rowSpan: 1, colSpan: 1 },
    { gridArea: "3 / 2 / 4 / 3", index: 8, row: 3, col: 2, rowSpan: 1, colSpan: 1 },
    { gridArea: "3 / 3 / 5 / 4", index: 9, row: 3, col: 3, rowSpan: 2, colSpan: 1 },
    { gridArea: "3 / 4 / 4 / 5", index: 10, row: 3, col: 4, rowSpan: 1, colSpan: 1 },
    { gridArea: "3 / 5 / 4 / 6", index: 11, row: 3, col: 5, rowSpan: 1, colSpan: 1 },
    
    // Row 4
    { gridArea: "4 / 1 / 5 / 2", index: 12, row: 4, col: 1, rowSpan: 1, colSpan: 1 },
    { gridArea: "4 / 2 / 5 / 3", index: 13, row: 4, col: 2, rowSpan: 1, colSpan: 1 },
  ];

  // Calculate dynamic transform for neighboring images with reduced spacing
  const getNeighborTransform = (currentItem, hoveredItem) => {
    if (!hoveredItem || currentItem.index === hoveredItem.index) {
      return { x: 0, y: 0, scale: 1 };
    }

    const dx = currentItem.col - hoveredItem.col;
    const dy = currentItem.row - hoveredItem.row;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Affect items within a smaller radius
    if (distance > 3) {
      return { x: 0, y: 0, scale: 1 };
    }

    // Calculate push direction and intensity with reduced spacing
    const pushIntensity = Math.max(0, (3 - distance) / 3);
    
    // Reduced push distances for more subtle movement
    const pushX = dx !== 0 ? (dx / Math.abs(dx)) * 30 * pushIntensity : 0;
    const pushY = dy !== 0 ? (dy / Math.abs(dy)) * 20 * pushIntensity : 0;
    
    // Reduced margin multiplier for more subtle spacing
    const marginMultiplier = distance < 1.5 ? 1.2 : 1;
    
    return {
      x: pushX * marginMultiplier,
      y: pushY * marginMultiplier,
      scale: Math.max(0.85, 1 - (pushIntensity * 0.15)) // Less dramatic scale down
    };
  };

  // Show loading state while images are loading
  if (!imagesLoaded) {
    return (
      <div className="min-h-screen bg-blue-600 flex items-center justify-center">
        <div className="text-white text-2xl font-semibold flex items-center space-x-3">
          <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
          <span>Loading Gallery...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-600 p-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-12 text-center opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
          Our Gallery
        </h1>

        {/* Grid Layout with reduced container padding */}
        <div 
          className="grid grid-cols-5 grid-rows-4 gap-4 h-[600px] w-full relative opacity-0 animate-[fadeInScale_0.8s_ease-out_0.2s_forwards]"
          style={{
            // Reduced padding for more subtle scaling accommodation
            padding: hoveredIndex !== null ? '40px' : '20px',
            transition: 'padding 0.4s ease-out'
          }}
        >
          {gridItems.map((item, idx) => {
            const image = images[item.index];
            if (!image) return null;

            const isHovered = hoveredIndex === idx;
            const hoveredItem = hoveredIndex !== null ? gridItems[hoveredIndex] : null;
            const neighborTransform = getNeighborTransform(item, hoveredItem);

            return (
              <div
                key={`${image.id}-${idx}`}
                className="bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer group relative transition-all duration-500 ease-out"
                style={{ 
                  gridArea: item.gridArea,
                  transform: `scale(${isHovered ? 1.6 : neighborTransform.scale}) translateX(${neighborTransform.x}px) translateY(${neighborTransform.y}px)`,
                  zIndex: isHovered ? 100 : hoveredIndex !== null ? 10 : 1,
                  animationDelay: `${idx * 0.05}s`
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-400 ease-out"
                  style={{
                    transform: `scale(${isHovered ? 1.05 : 1})`,
                    filter: `brightness(${isHovered ? 1.15 : 1}) contrast(${isHovered ? 1.1 : 1})`
                  }}
                  loading="lazy"
                />

                {/* Enhanced image overlay for better visibility when scaled */}
                {isHovered && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]" />
                )}
              </div>
            );
          })}
        </div>

        {/* Footer text */}
        <div className="text-center mt-16 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
          <p className="text-white text-lg opacity-90 mb-2">
            Discover our collection of stunning visuals
          </p>
          <p className="text-white/70 text-sm">
            Hover over any image to see it in full detail
          </p>
          <div className="w-24 h-1 bg-white/30 mx-auto mt-6 rounded-full animate-[expandWidth_0.8s_ease-out_1.2s_forwards]" />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 96px;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;