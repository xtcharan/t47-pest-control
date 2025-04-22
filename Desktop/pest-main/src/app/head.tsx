export default function Head() {
  return (
    <>
      {/* Preload critical hero images */}
      <link
        rel="preload"
        href="/pest-control-hero.webp"
        as="image"
        type="image/webp"
      />
      <link
        rel="preload"
        href="/pest-control-hero.jpg"
        as="image"
        type="image/jpeg"
      />

      {/* Preload technology section images */}
      <link
        rel="preload"
        href="/safe-home-business.webp"
        as="image"
        type="image/webp"
      />
      <link
        rel="preload"
        href="/latest-technology.webp"
        as="image"
        type="image/webp"
      />
      <link
        rel="preload"
        href="/find-us.webp"
        as="image"
        type="image/webp"
      />
    </>
  );
}
