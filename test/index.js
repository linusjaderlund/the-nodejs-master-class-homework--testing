// deps/tests
const unit = require('./unit');

// tests
const test = {unit};

// test runner
const tester = {};

tester.report = (total, errors) => {
  const lineLength = 40;
  
  console.log('');
  console.log('\x1b[33m%s\x1b[0m', '- REPORT START');
  console.log('-'.repeat(lineLength));
  console.log('Total number of test:', total);
  console.log('Successful tests:', total - errors.length);
  console.log('Failed tests:', errors.length);
  console.log('-'.repeat(lineLength));
  errors.forEach((e) => {
    console.log('\x1b[31m%s\x1b[0m', e.testName);
    console.log(e.error);
    
    console.log('-'.repeat(lineLength));
  });
  console.log('\x1b[33m%s\x1b[0m', 'REPORT END -');
};

tester.count = () => {
  let count = 0;
  
  for (const category of Object.keys(test)) {
    count += Object.keys(test[category]).length;
  }

  return count;
};

tester.run = () => {
  let count = 0;
  const total = tester.count();
  const errors = [];

  for (const category of Object.keys(test)) {
    console.log('\x1b[33m%s\x1b[0m', `- TESTS FOR CATEGORY ${category.toUpperCase()}:`)
    for (const testName of Object.keys(test[category])) {
      (function() {
        try {
          test[category][testName](() => {
            console.log('\x1b[32m%s\x1b[0m', `-- ${testName}`);
            
            if (++count === total) {
              tester.report(total, errors);
            }
          });
        } catch (error) {
          console.log('\x1b[31m%s\x1b[0m', `-- ${testName}`);
          errors.push({testName, error});
          
          if (++count === total) {
            tester.report(total, errors);
          }
        }
      }());
    }
  }
};

// run tests
tester.run();