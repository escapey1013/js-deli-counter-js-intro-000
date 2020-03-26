function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(array) {
  if (array.length > 0) {
    var firstInLine = array.slice(0,1);
    array.unshift();
    return firstInLine;
  } else {
    return "There is nobody waiting to be served!";
  }
}
