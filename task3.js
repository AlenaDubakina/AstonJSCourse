function createLiker() {
  let raiting = 0;
  return {
    like() {
      return ++raiting;
    },
    dislike() {
      return --raiting;
    },
    val() {
      return raiting;
    },
  };
}

// пример
const liker = createLiker();
liker.like();
liker.like();
liker.like();
liker.dislike();
console.log(liker.val());
