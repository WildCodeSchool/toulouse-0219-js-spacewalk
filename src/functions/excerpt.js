const excerpt = (string, length) => {
  // eslint-disable-next-line no-plusplus
  for (let i = length; i < string.length; i++) {
    if (string[i] === ' ') {
      return `${string.slice(0, i)}...`;
    }
  }
  return `${string.slice(0, length)}...`;
};

export default excerpt;
