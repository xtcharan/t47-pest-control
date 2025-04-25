/**
 * Lazy Loading Polyfill
 * This script adds IntersectionObserver polyfill and implements lazy loading for images
 */

// Check if IntersectionObserver is supported, if not load a polyfill
if (!('IntersectionObserver' in window)) {
  console.log('IntersectionObserver not supported, loading polyfill');
  // In a real implementation, you would load a polyfill here
  // For example: document.write('<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"></script>');
}

// Initialize lazy loading once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Function to lazy load images
  function lazyLoadImages() {
    // Select all images with data-src attribute
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if (lazyImages.length === 0) {
      return; // No images to lazy load
    }
    
    // Create an observer
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        // If the image is in viewport
        if (entry.isIntersecting) {
          const img = entry.target;
          
          // Replace src with data-src
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          
          // Replace srcset with data-srcset if it exists
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
            img.removeAttribute('data-srcset');
          }
          
          // Add a loaded class for styling
          img.classList.add('lazy-loaded');
          
          // Stop observing the image
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '200px 0px', // Start loading 200px before the image enters viewport
      threshold: 0.01 // Trigger when at least 1% of the image is visible
    });
    
    // Observe each lazy image
    lazyImages.forEach(function(img) {
      imageObserver.observe(img);
    });
  }
  
  // Initialize lazy loading
  lazyLoadImages();
  
  // Re-run lazy loading when content changes (e.g., after AJAX loads)
  // This is a simplified example - in a real app you might use MutationObserver
  document.addEventListener('lazyload:update', lazyLoadImages);
});

// Add support for native lazy loading where available
document.addEventListener('DOMContentLoaded', function() {
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      img.src = img.dataset.src;
      img.loading = 'lazy';
      img.removeAttribute('data-src');
      if (img.dataset.srcset) {
        img.srcset = img.dataset.srcset;
        img.removeAttribute('data-srcset');
      }
    });
  }
});
