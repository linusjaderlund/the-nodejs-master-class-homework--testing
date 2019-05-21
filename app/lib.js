const lib = {};

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

module.exports = lib;