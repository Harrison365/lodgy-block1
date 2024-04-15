function createRangeArr(arrayOfRanges) {
  if (arrayOfRanges.length === 0) {
    return [];
  } else if (arrayOfRanges[0] === arrayOfRanges[1]) {
    return [arrayOfRanges[1]];
  } else if (arrayOfRanges[0] === arrayOfRanges[1] + 1) {
    return arrayOfRanges;
  } else {
    return [
      createRangeArr([arrayOfRanges[0], arrayOfRanges[1] - 1]),
      arrayOfRanges[1],
    ].flat();
  }
}

module.exports = { createRangeArr };
