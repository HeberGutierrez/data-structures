var Stack = function() {
  var counter = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function() {
    if (counter) {
      counter--;
    }
    return storage[counter];
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
/* var counter = 0;
  var someInstance = {};

  var storage = {};

  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function() {
    if(counter){
      counter--;
    }

    return storage[counter];
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;*/