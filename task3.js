function createLiker() {
  let rating = 0;
  const obj = {};
  const like = () => {
    rating++;
    return obj;
  };
  const dislike = () => {
    rating--;
    return obj;
  };
  const val = () => rating;
  Object.entries({ like, dislike, val }).forEach(
    ([key, value]) => (obj[key] = value)
  );
  return obj;
}
