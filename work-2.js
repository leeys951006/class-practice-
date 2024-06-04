function workThree(index, name) {
  let local = {
    number: index + 1,
    name: name,
  };
  return local;
}

let test = workThree(0, '이연승');
console.log(test);
