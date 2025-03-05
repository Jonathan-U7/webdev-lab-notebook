let result = {};

const insertItem = (key, value) => {
  // insertItem the property with key and value into result
  return result[key] = value;
};

const deleteItem = (key) => {
  // remove the property with key from result
  return result[key] = undefined 
};

const lookupItem = (key) => {
  // return the value from result that is associated with key
  return result[key] ? result[key] : 'Item does not exist';

};

const printItems = () => {
  // return a string of the concatenated key in result, separated by commas
  return Object.keys(result).filter(key => result[key] !== undefined).join(', ');
};

insertItem('hello', 'world');
insertItem('lorem', 'ipsum');
insertItem('sit', 'amet');
console.log(printItems());
// expected: 'hello, lorem, sit' (order may be different)
console.log(lookupItem('lorem'));
// expected: 'ipsum'

deleteItem('lorem');
console.log(printItems());
// expected: 'hello, sit' (order may be different)
console.log(lookupItem('lorem'));
// expected: 'Item does not exist'
