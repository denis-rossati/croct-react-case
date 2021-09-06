// The API send some key object empty, this function will remove it.

const formatObject = (obj) => Object.keys(obj).reduce((acc, el) => {
  if (obj[el] !== '' || !!(obj[el]) !== false) {
    acc[el] = obj[el];
    return acc;
  }
  return acc;
}, {});

export default formatObject;
