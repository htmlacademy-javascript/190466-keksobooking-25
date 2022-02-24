function generateNumber(min, max) {
  // случайное число от min до max+1
  if (min < 0) {
    min = 0;
  }

  if (max < 0) {
    max = 0;
  }

  if (min >= max) {
    let temp = min;
    min = max;
    max = temp;

    console.log(min);
    console.log(max);
    console.log(`***`);
  }

  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

generateNumber(5, -5);

/***** */
function generateNumberFloatPoint(min, max, decimalPlaces) {
  // случайное число от min до max

  if (min < 0) {
    min = 0;
  }

  if (max < 0) {
    max = 0;
  }

  if (min >= max) {
    let temp = min;
    min = max;
    max = temp;
  }

  if (decimalPlaces < 0) {
    decimalPlaces = 0;
  }

  let random = Math.random() * (max - min) + min;
  random = random.toFixed(decimalPlaces);
  return random;
}

generateNumberFloatPoint(2, 5, 3);
