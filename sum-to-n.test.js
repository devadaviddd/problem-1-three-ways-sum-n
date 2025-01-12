const { sumToNWay1, sumToNWay2, sumToWay3 } = require('./sum-to-n');

describe('sumToNWay1', () => {
  test('sums the numbers from 1 to n', () => {
    expect(sumToNWay1(1)).toBe(1);
    expect(sumToNWay1(2)).toBe(3);
    expect(sumToNWay1(3)).toBe(6);
    expect(sumToNWay1(4)).toBe(10);
    expect(sumToNWay1(5)).toBe(15);
  });
});

describe('sumToNWay2', () => {
  test('sums the numbers from 1 to n', () => {
    expect(sumToNWay2(1)).toBe(1);
    expect(sumToNWay2(2)).toBe(3);
    expect(sumToNWay2(3)).toBe(6);
    expect(sumToNWay2(4)).toBe(10);
    expect(sumToNWay2(5)).toBe(15);
  });
});

describe('sumToWay3', () => {
  test('sums the numbers from 1 to n', () => {
    expect(sumToWay3(1)).toBe(1);
    expect(sumToWay3(2)).toBe(3);
    expect(sumToWay3(3)).toBe(6);
    expect(sumToWay3(4)).toBe(10);
    expect(sumToWay3(5)).toBe(15);
  });
});