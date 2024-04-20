
const check = require('../utils/check');
const fs = require('fs');


// Test for the check function
var file1 = fs.readFileSync('unitTests/testSamples/rolePolicyTest1.json', 'utf8');
var data1 = JSON.parse(file1);
test('Resource with a string value (not only one asterisk) results in true', () => {
    expect(check(data1)).toBe(true);
  });
  
// Test for the check function
var file2 = fs.readFileSync('unitTests/testSamples/rolePolicyTest2.json', 'utf8');
var data2 = JSON.parse(file2);
test('Resource with single asterisk results in false', () => {
    expect(check(data2)).toBe(false);
  });

// Test for the check function
var file3 = fs.readFileSync('unitTests/testSamples/rolePolicyTest3.json', 'utf8');
var data3 = JSON.parse(file3);
test('Resource with multiple asterisks results in true', () => {
    expect(check(data3)).toBe(true);
  });

// Test for the check function
var file4 = fs.readFileSync('unitTests/testSamples/rolePolicyTest4.json', 'utf8');
var data4 = JSON.parse(file4);
test('Resource without any content results in true', () => {
    expect(check(data4)).toBe(true);
  });


// Test for the check function
var file5 = fs.readFileSync('unitTests/testSamples/rolePolicyTest5.json', 'utf8');
var data5 = JSON.parse(file5);
test('Resource being a list, where none of its elements is a single asterisk, results in true', () => {
    expect(check(data5)).toBe(true);
  });


// Test for the check function
var file6 = fs.readFileSync('unitTests/testSamples/rolePolicyTest6.json', 'utf8');
var data6 = JSON.parse(file6);
test('Resource being a list, where one of its elements is a single asterisk, results in false', () => {
    expect(check(data6)).toBe(false);
  });


// Test for the check function
var file7 = fs.readFileSync('unitTests/testSamples/rolePolicyTest7.json', 'utf8');
var data7 = JSON.parse(file7);
test('Multiple statements, where all of them has a resource without a single asterisk, results in true', () => {
    expect(check(data7)).toBe(true);
  });


// Test for the check function
var file8 = fs.readFileSync('unitTests/testSamples/rolePolicyTest8.json', 'utf8');
var data8 = JSON.parse(file8);
test('Multiple statements, where one of them has a resource with a single asterisk, results in false', () => {
    expect(check(data8)).toBe(false);
  });


// Test for the check function
var file9 = fs.readFileSync('unitTests/testSamples/rolePolicyTest9.json', 'utf8');
var data9 = JSON.parse(file9);
test('Multiple statements, where one of them has a resource being an array and one of its elements has a single asterisk, results in false', () => {
    expect(check(data9)).toBe(false);
  });


// Test for the check function
var file10 = fs.readFileSync('unitTests/testSamples/rolePolicyTest10.json', 'utf8');
var data10 = JSON.parse(file10);
test('Resource which value is a huge string of asterisks results in true', () => {
    expect(check(data10)).toBe(true);
  });


