import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Image data that will be loaded dynamically
  const imageData = [
    { id: 1, src: 'https://picsum.photos/400/600?random=1', alt: 'Gallery Image 1' },
    { id: 2, src: 'https://picsum.photos/300/200?random=2', alt: 'Gallery Image 2' },
    { id: 3, src: 'https://picsum.photos/300/200?random=3', alt: 'Gallery Image 3' },
    { id: 4, src: 'https://picsum.photos/300/200?random=4', alt: 'Gallery Image 4' },
    { id: 5, src: 'https://picsum.photos/300/200?random=5', alt: 'Gallery Image 5' },
    { id: 6, src: 'https://picsum.photos/200/300?random=6', alt: 'Gallery Image 6' },
    { id: 7, src: 'https://picsum.photos/300/200?random=7', alt: 'Gallery Image 7' },
    { id: 8, src: 'https://picsum.photos/300/200?random=8', alt: 'Gallery Image 8' },
    { id: 9, src: 'https://picsum.photos/300/200?random=9', alt: 'Gallery Image 9' },
    { id: 10, src: 'https://picsum.photos/200/150?random=10', alt: 'Gallery Image 10' },
    { id: 11, src: 'https://picsum.photos/200/150?random=11', alt: 'Gallery Image 11' },
    { id: 12, src: 'https://picsum.photos/200/300?random=12', alt: 'Gallery Image 12' },
    { id: 13, src: 'https://picsum.photos/300/200?random=13', alt: 'Gallery Image 13' },
    { id: 14, src: 'https://picsum.photos/300/200?random=14', alt: 'Gallery Image 14' },
  ];

  // Load images and get their natural dimensions
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = await Promise.all(
        imageData.map(async (img) => {
          return new Promise((resolve) => {
            const image = new Image();
            image.onload = () => {
              resolve({
                ...img,
                naturalWidth: image.naturalWidth,
                naturalHeight: image.naturalHeight,
                aspectRatio: image.naturalWidth / image.naturalHeight
              });
            };
            image.onerror = () => {
              resolve({
                ...img,
                naturalWidth: 400,
                naturalHeight: 300,
                aspectRatio: 4/3
              });
            };
            image.src = img.src;
          });
        })
      );
      setImages(loadedImages);
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  // Grid layout positions matching the design exactly
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

  // Calculate dynamic transform for neighboring images
  const getNeighborTransform = (currentItem, hoveredItem) => {
    if (!hoveredItem || currentItem.index === hoveredItem.index) {
      return { x: 0, y: 0, scale: 1 };
    }

    const dx = currentItem.col - hoveredItem.col;
    const dy = currentItem.row - hoveredItem.row;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Only affect nearby items (within 2 grid units)
    if (distance > 2.5) {
      return { x: 0, y: 0, scale: 1 };
    }

    // Calculate push direction and intensity
    const pushIntensity = Math.max(0, (2.5 - distance) / 2.5);
    const pushX = dx !== 0 ? (dx / Math.abs(dx)) * 25 * pushIntensity : 0;
    const pushY = dy !== 0 ? (dy / Math.abs(dy)) * 15 * pushIntensity : 0;
    
    return {
      x: pushX,
      y: pushY,
      scale: 1 - (pushIntensity * 0.05) // Slight scale down for pushed items
    };
  };

  return (
    <div className="min-h-screen bg-blue-600 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold text-white mb-12"
        >
          Our Gallery
        </motion.h1>

        {/* Grid Layout matching the design */}
        <motion.div 
          className="grid grid-cols-5 grid-rows-4 gap-4 h-[600px] w-full relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnimatePresence>
            {gridItems.map((item, idx) => {
              const image = images[item.index];
              if (!image) return null;

              const isHovered = hoveredIndex === idx;
              const hoveredItem = hoveredIndex !== null ? gridItems[hoveredIndex] : null;
              const neighborTransform = getNeighborTransform(item, hoveredItem);

              return (
                <motion.div
                  key={`${image.id}-${idx}`}
                  className="bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer group relative"
                  style={{ gridArea: item.gridArea }}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.8,
                    rotateY: -45
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: isHovered ? 1.15 : neighborTransform.scale,
                    rotateY: 0,
                    x: neighborTransform.x,
                    y: neighborTransform.y,
                    zIndex: isHovered ? 50 : hoveredIndex !== null ? 10 : 1
                  }}
                  transition={{ 
                    duration: isHovered ? 0.4 : 0.6, 
                    delay: isHovered ? 0 : idx * 0.1,
                    ease: "easeOut",
                    scale: { type: "spring", stiffness: 300, damping: 25 },
                    x: { type: "spring", stiffness: 400, damping: 30 },
                    y: { type: "spring", stiffness: 400, damping: 30 }
                  }}
                  onHoverStart={() => setHoveredIndex(idx)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileTap={{ scale: isHovered ? 1.08 : 0.95 }}
                >
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    animate={{
                      scale: isHovered ? 1.1 : 1,
                      brightness: isHovered ? 1.1 : 1
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  
                  {/* Enhanced Hover Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0, scale: 0.8 }}
                      animate={{ 
                        y: isHovered ? 0 : 20, 
                        opacity: isHovered ? 1 : 0,
                        scale: isHovered ? 1 : 0.8
                      }}
                      transition={{ 
                        delay: isHovered ? 0.15 : 0, 
                        duration: 0.3,
                        type: "spring",
                        stiffness: 400,
                        damping: 25
                      }}
                      className="text-white text-center"
                    >
                      <div className="bg-white/25 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                        <span className="text-sm font-semibold">View Image</span>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Enhanced Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{
                      x: isHovered ? '200%' : '-100%',
                      opacity: isHovered ? 1 : 0
                    }}
                    transition={{ 
                      duration: 0.8, 
                      ease: "easeInOut",
                      delay: isHovered ? 0.2 : 0
                    }}
                  />

                  {/* Dynamic corner accent */}
                  <motion.div 
                    className="absolute top-0 right-0 border-l-transparent"
                    style={{
                      width: 0,
                      height: 0,
                      borderLeftWidth: '20px',
                      borderBottomWidth: '20px',
                      borderBottomColor: isHovered ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.2)'
                    }}
                    animate={{
                      borderLeftWidth: isHovered ? '30px' : '20px',
                      borderBottomWidth: isHovered ? '30px' : '20px'
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Pulsing border effect when hovered */}
                  {isHovered && (
                    <motion.div
                      className="absolute inset-0 rounded-lg border-2 border-white/50"
                      initial={{ opacity: 0, scale: 1 }}
                      animate={{ 
                        opacity: [0, 1, 0],
                        scale: [1, 1.02, 1]
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Footer text */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-white text-lg opacity-90">
            Discover our collection of stunning visuals
          </p>
          <motion.div 
            className="w-24 h-1 bg-white/30 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;