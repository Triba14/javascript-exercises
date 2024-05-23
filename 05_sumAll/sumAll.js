const sumAll = function(startNumber, finishNumber) {
    if (startNumber < 0 || finishNumber < 0) return "ERROR";
    if (!Number.isInteger(startNumber) || !Number.isInteger(finishNumber)) return "ERROR";
    if (startNumber > finishNumber) {
        const temp = startNumber;
        startNumber = finishNumber;
        finishNumber = temp;
      }
    
    let sum = 0;
    for (let i = startNumber; i <= finishNumber; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
