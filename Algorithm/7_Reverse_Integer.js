/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
  let flag = false;
  if (x < 0) {
    flag = true;
    x = x * -1;
  }
  newX = parseInt(
    String(x)
      .split("")
      .reverse()
      .join("")
  );

  if (newX > 0x7fffffff) {
    return 0;
  }

  if (flag) {
    return newX * -1;
  } else {
    return newX;
  }
};
