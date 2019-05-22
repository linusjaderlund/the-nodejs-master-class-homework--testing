const lib = {};

// global
const deepObject = {
  test: 'test',
  '_0': [1, 2, 3, 4, '5', { falsy: true }],
  deep: {
    _test: 'hello',
    process: process.toString(),
    deeper: {
      arr: ['qwerty', 1, typeof [], 'test again'],
      int: 3254,
      str: 'end'
    }
  }
};

lib.randomString = (length) => {
  if (typeof length === 'undefined') {
    throw new Error('Length must be specified');
  }
  
  const chars = ['q', 'w', 'e', 'r', 't', 'y'];
  let str = '';

  for (let i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }

  return str;
};

lib.batman = () => Array(16).join('hero' - 1) + " Batman";

lib.getDeepObject = () => deepObject;

lib.getDeepJSONObject = () => JSON.stringify(deepObject);

module.exports = lib;