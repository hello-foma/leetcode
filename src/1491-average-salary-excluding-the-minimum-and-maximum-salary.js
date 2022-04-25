/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  let min = 0;
  let max = 0;
  let sum = 0;

  for(let i = 0; i < salary.length; i++) {
    const current = salary[i];
    sum += current;

    if (min === 0 || current < min) {
      min = current;
    }

    if (max === 0 || current > max) {
      max = current;
    }
  }

  return ((sum - min - max) / (salary.length - 2));

};
