const excerpt = (string) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 100; i < string.length; i++) {
    if (string[i] === ' ') {
      return `${string.slice(0, i)}...`;
    }
  }
  return `${string.slice(0, 100)}...`;
};


console.log(excerpt('What\'s that unusual spot on the Moon? It\'s the International Space Station. Using precise timing, the that unusual spot on the Moon? It\'s the international Space Station.'));
