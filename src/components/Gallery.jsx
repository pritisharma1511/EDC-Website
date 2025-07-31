import React from 'react';

const Gallery = () => {
  // Images with varied dimensions to match the layout
  const images = [
    { id: 1, src: 'https://picsum.photos/400/600?random=1', alt: 'Gallery Image 1' },
    { id: 2, src: 'https://picsum.photos/400/300?random=2', alt: 'Gallery Image 2' },
    { id: 3, src: 'https://picsum.photos/400/300?random=3', alt: 'Gallery Image 3' },
    { id: 4, src: 'https://picsum.photos/400/300?random=4', alt: 'Gallery Image 4' },
    { id: 5, src: 'https://picsum.photos/400/400?random=5', alt: 'Gallery Image 5' },
    { id: 6, src: 'https://picsum.photos/400/300?random=6', alt: 'Gallery Image 6' },
    { id: 7, src: 'https://picsum.photos/400/300?random=7', alt: 'Gallery Image 7' },
    { id: 8, src: 'https://picsum.photos/400/300?random=8', alt: 'Gallery Image 8' },
    { id: 9, src: 'https://picsum.photos/400/400?random=9', alt: 'Gallery Image 9' },
    { id: 10, src: 'https://picsum.photos/400/500?random=10', alt: 'Gallery Image 10' },
    { id: 11, src: 'https://picsum.photos/400/300?random=11', alt: 'Gallery Image 11' },
    { id: 12, src: 'https://picsum.photos/400/300?random=12', alt: 'Gallery Image 12' }
  ];

  return (
    <div className="min-h-screen bg-blue-600 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Our Gallery
        </h1>

        {/* Custom Grid Layout matching the screenshot */}
        <div className="grid grid-cols-12 gap-4 h-[600px]">
          {/* Left large vertical rectangle */}
          <div className="col-span-3 row-span-2 bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer group relative">
            <img
              src={images[0]?.src}
              alt={images[0]?.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Image
              </span>
            </div>
          </div>

          {/* Top row - 3 rectangles */}
          <div className="col-span-3 bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer group relative">
            <img
              src={images[1]?.src}
              alt={images[1]?.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Image
              </span>
            </div>
          </div>

          <div className="col-span-3 bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer group relative">
            <img
              src={images[2]?.src}
              alt={images[2]?.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Image
              </span>
            </div>
          </div>

          <div className="col-span-3 bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer group relative">
            <img
              src={images[3]?.src}
              alt={images[3]?.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Image
              </span>
            </div>
          </div>

          {/* Second row - left side squares */}
          <div className="col-span-2 bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer group relative">
            <img
              src={images[4]?.src}
              alt={images[4]?.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Image
              </span>
            </div>
          </div>

          <div className="col-span-2 bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer group relative">
            <img
              src={images[5]?.src}
              alt={images[5]?.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Image
              </span>
            </div>
          </div>

          {/* Second row - right side rectangles */}
          <div className="col-span-3 bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer group relative">
            <img
              src={images[6]?.src}
              alt={images[6]?.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Image
              </span>
            </div>
          </div>

          <div className="col-span-3 bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer group relative">
            <img
              src={images[7]?.src}
              alt={images[7]?.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Image
              </span>
            </div>
          </div>

          {/* Third row - left side squares */}
          <div className="col-span-2 bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer group relative">
            <img
              src={images[8]?.src}
              alt={images[8]?.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Image
              </span>
            </div>
          </div>

          <div className="col-span-2 bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer group relative">
            <img
              src={images[9]?.src}
              alt={images[9]?.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Image
              </span>
            </div>
          </div>

          {/* Middle tall rectangle */}
          <div className="col-span-2 row-span-2 bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer group relative">
            <img
              src={images[10]?.src}
              alt={images[10]?.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Image
              </span>
            </div>
          </div>

          {/* Bottom right rectangles */}
          <div className="col-span-3 bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer group relative">
            <img
              src={images[11]?.src}
              alt={images[11]?.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-semibeld opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Image
              </span>
            </div>
          </div>

          <div className="col-span-3 bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer group relative">
            <img
              src={images[0]?.src}
              alt="Gallery Image 13"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Image
              </span>
            </div>
          </div>

          {/* Fourth row bottom squares */}
          <div className="col-span-2 bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer group relative">
            <img
              src={images[1]?.src}
              alt="Gallery Image 14"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Image
              </span>
            </div>
          </div>

          <div className="col-span-2 bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer group relative">
            <img
              src={images[2]?.src}
              alt="Gallery Image 15"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Image
              </span>
            </div>
          </div>
        </div>

        {/* Footer text */}
        <div className="text-center mt-8">
          <p className="text-white text-lg opacity-80">
            Discover our collection of stunning visuals
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;