export default function Head() {
  return (
    <>
      {/* Only preload critical above-the-fold hero image */}
      <link
        rel="preload"
        href="/pest-control-hero.webp"
        as="image"
        type="image/webp"
        fetchPriority="high"
      />
      <link
        rel="preload"
        href="/pest-control-hero.jpg"
        as="image"
        type="image/jpeg"
        fetchPriority="high"
      />

      {/* Add preconnect for faster resource loading */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Add lazy loading hint */}
      <link rel="preload" as="script" href="/lazy-load-polyfill.js" />
    </>
  );
}
