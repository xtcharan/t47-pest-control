export default function Head() {
  return (
    <>
      {/* Preload critical hero images */}
      <link
        rel="preload"
        href="/images/hero/optimized/pest-control-hero.webp"
        as="image"
        type="image/webp"
      />
      <link
        rel="preload"
        href="/images/hero/optimized/pest-control-hero.jpg"
        as="image"
        type="image/jpeg"
      />

      {/* Preload technology section images */}
      <link
        rel="preload"
        href="/images/technology/optimized/safe-home-business.webp"
        as="image"
        type="image/webp"
      />
      <link
        rel="preload"
        href="/images/technology/optimized/latest-technology.webp"
        as="image"
        type="image/webp"
      />
      <link
        rel="preload"
        href="/images/technology/optimized/find-us.webp"
        as="image"
        type="image/webp"
      />
    </>
  );
}
