const excerpt = (string) => {
  for (let i = 100; i < string.length; i++) {
    if (string[i] === ' ') {
      return `${string.slice(0, i)}...`;
    }
  }
};


console.log(excerpt('What\'s that unusual spot on the Moon? It\'s the International Space Station. Using precise timing, the Earth-orbiting space platform was photographed in front of a partially lit gibbous Moon last month. The featured image was taken from Palo Alto, California, USA with an exposure time of only 1/667 of a second. In contrast, the duration of the transit of the ISS across the entire Moon was about half a second.  A close inspection of this unusually crisp ISS silhouette will reveal the outlines of numerous solar panels and trusses.  The bright crater Tycho is visible on the lower left, as well as comparatively rough, light colored terrain known as highlands, and relatively smooth, dark colored areas known as maria.  On-line tools can tell you when the International Space Station will be visible from your area.   Newly Added Venue:  APOD now available on Instagram in Persian'));
