const removeFromArray = function(array, ...elementToRemove) {
    return array.filter(item => !elementToRemove.includes(item));
}

// Do not edit below this line
module.exports = removeFromArray;
