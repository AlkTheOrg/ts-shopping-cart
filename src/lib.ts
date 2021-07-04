// I used the knutfh shuffle algo here
export const shuffleArray = (arr: any[]) => {
  let curIndex = arr.length;
  let randIndex;

  while (0 !== curIndex) {
    randIndex = Math.floor(Math.random() * curIndex);
    curIndex--;

    // swap
    [arr[curIndex], arr[randIndex]] = [arr[randIndex], arr[curIndex]];
  }

  return arr;
};
