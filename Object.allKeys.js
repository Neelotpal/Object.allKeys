

Array.prototype.removeRepeated = function() {
    var uniK = [];
    this.forEach(function(key) {
        if (!uniK.includes(key)) {
            uniK.push(key);
        }
    });
    return uniK;
}

Object.prototype.allKeys = function(object, removeRepeated) {
    var allKeys = [],
        getKeys = function(obj) {
            if (obj && typeof obj === 'object') {
                allKeys = allKeys.concat(Object.getOwnPropertyNames(obj)).concat(Object.getOwnPropertySymbols(obj));
                getKeys(Object.getPrototypeOf(obj));
            }
        };
        
    getKeys(object);
    console[console.warn ? 'warn' : 'log']("Extra property 'allKeys' for objects and 'removeRepeated' in case of Arrays.")
    return removeRepeated ? allKeys.removeRepeated() : allKeys;
}