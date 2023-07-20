 /**
  * @Time 90 ms
  * @Memory 45.16 MB
  */
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const len = s.length;
  let isNumbering = true;
  let final = "";
  let isNeg = false;
  let isFloat = false;
  let isChecked = false;
  let found = false;

  for (let i = 0; i < len && isNumbering; i++) {
    const f = s[i];
    let asc = f.charCodeAt(0);
    switch (true) {
      case f === " " || f === "+": {
        if ((isChecked || found) && f === " ") {
          isNumbering = false;
        }
        if (f === "+") {
          if (isChecked || found) {
            isNumbering = false;
          }
          isChecked = true;
        }
        break;
      }
      case (asc >= 48 && asc <= 57) || f === ".": {
        if (f === ".") {
          isFloat = true;
        }
        final = final + f;
        found = true;
        break;
      }
      case f === "-": {
        if (isChecked || found) {
          isNumbering = false;
        } else {
          isChecked = true;
          isNeg = true;
        }
        break;
      }
      default: {
        isNumbering = false;
        break;
      }
    }
  }
  if (final === "") {
    return 0;
  }
  final = isNeg ? "-" + final : final;
  let finalNumb = isFloat ? parseFloat(final) : parseInt(final);
  finalNumb = finalNumb > Math.pow(2, 31) - 1 ? Math.pow(2, 31) - 1 : finalNumb;
  finalNumb = finalNumb < -Math.pow(2, 31) + 1 ? -Math.pow(2, 31) : finalNumb;
  return finalNumb;
};
