function rndInt(min, max) {
  // случайное число от min до max+1
  if (min < 0) {
    min = 0;
  };

  if (min >= max) {
    return null;
  };

  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// for (let i = 0; i < 10; i++) {
//   console.log(rndInt(2, 5));
// }

/***** */
function rndFloatPoint(min, max, n) {
  // случайное число от min до max

  if (min < 0) {
    min = 0;
  };

  if (min >= max) {
    return null;
  };

  if (n < 0) {
    n = 0;
  };

  let rand = Math.random() * (max - min) + min;
  rand = rand.toFixed(n);
  return rand;
}

// for (let i = 0; i < 10; i++) {
//   console.log(rndFloatPoint(1.1, 5.5, 2));
// }
