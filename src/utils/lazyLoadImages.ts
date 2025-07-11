/**
 * Utility to add native lazy loading to regular images
 * This is used for images that are not using Next.js Image component
 */

export function setupLazyLoading() {
  // Only run in browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  // Check if native lazy loading is supported
  const nativeLazyLoadingSupported = 'loading' in HTMLImageElement.prototype;

  // Function to handle intersection observer for browsers without native support
  function setupIntersectionObserver() {
    const lazyImages = document.querySelectorAll('img.lazy-load:not([loading="lazy"])');

    if (lazyImages.length === 0) return;

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;

          // If data-src is set, use it as the source
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }

          // If data-srcset is set, use it as the srcset
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
            img.removeAttribute('data-srcset');
          }

          img.classList.remove('lazy-load');
          img.classList.add('lazy-loaded');
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '200px 0px',
      threshold: 0.01
    });

    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Function to apply native lazy loading
  function applyNativeLazyLoading() {
    const lazyImages = document.querySelectorAll('img.lazy-load');

    lazyImages.forEach((img: Element) => {
      // Set loading="lazy" attribute
      (img as HTMLImageElement).loading = 'lazy';

      // Convert to HTMLImageElement for type safety
      const imgElement = img as HTMLImageElement;

      // If data-src is set, use it as the source
      if (imgElement.dataset.src) {
        imgElement.src = imgElement.dataset.src || '';
        img.removeAttribute('data-src');
      }

      // If data-srcset is set, use it as the srcset
      if (imgElement.dataset.srcset) {
        imgElement.srcset = imgElement.dataset.srcset || '';
        img.removeAttribute('data-srcset');
      }

      img.classList.remove('lazy-load');
      img.classList.add('lazy-loaded');
    });
  }

  // Initialize lazy loading based on browser support
  if (nativeLazyLoadingSupported) {
    applyNativeLazyLoading();
  } else {
    setupIntersectionObserver();
  }

  // Re-run when DOM changes (simplified - in a real app use MutationObserver)
  document.addEventListener('lazyload:update', () => {
    if (nativeLazyLoadingSupported) {
      applyNativeLazyLoading();
    } else {
      setupIntersectionObserver();
    }
  });
}

// Function to manually trigger lazy loading update
export function updateLazyLoading() {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    document.dispatchEvent(new CustomEvent('lazyload:update'));
  }
}
