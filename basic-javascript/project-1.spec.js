const helpers = require('./project-1');

describe('multiplyByTen', () => {
  test('Correct multiplication', () => {
    const actual = helpers.multiplyByTen(2);
    expect(actual).toEqual(20);
  });
  test('By NaN', () => {
    const actual = helpers.multiplyByTen(NaN);
    expect(actual).toEqual(NaN);
  });
  test('By a number in String format', () => {
    const actual = helpers.multiplyByTen('2');
    expect(actual).toEqual(20);
  });
  test('By a String other than a digit', () => {
    const actual = helpers.multiplyByTen('hola');
    expect(actual).toEqual(NaN);
  });
});
describe('subtractFive', () => {
  test('worng substraction', () => {
    const actual = helpers.subtractFive(5);
    expect(actual).not.toEqual(1);
  });
  test('Correct substraction', () => {
    const actual = helpers.subtractFive(5);
    expect(actual).toEqual(0);
  });
  test('param is NaN', () => {
    const actual = helpers.subtractFive(NaN);
    expect(actual).toBe(NaN);
  });
  test('param is String', () => {
    const actual = helpers.subtractFive(5);
    expect(actual).toEqual(0);
  });
  test('result must be less than passed param', () => {
    const actual = helpers.subtractFive(-10);
    expect(actual).toBeLessThan(-10);
  });
});
describe('areSameLength', () => {
  test('same Strings must have the same length', () => {
    const actual = helpers.areSameLength('Hola', 'Hola');
    expect(actual).toEqual(true);
  });
  test('Capitalization do not affect the result', () => {
    const actual = helpers.areSameLength('hola', 'HOLA');
    expect(actual).toBe(true);
  });
  test('Different strigns with different length must return false', () => {
    const actual = helpers.areSameLength('Hola', 'Caracola');
    expect(actual).toBe(false);
  });
  test('compare a String with an Array', () => {
    const actual = helpers.areSameLength(['h', 'o', 'l', 'a'], 'hola');
    expect(actual).toBe(true);
  });
  test('compare with a Number', () => {
    const actual = helpers.areSameLength(1234, 'hola');
    expect(actual).toBe(false);
  });
});
describe('areEqual', () => {
  test('Type coercion returns false', () => {
    const actual = helpers.areEqual(1, '1');
    expect(actual).toBe(false);
  });
  test('params of same type...', () => {
    const actual = helpers.areEqual(1, 1);
    expect(actual).toBe(true);
    expect(helpers.areEqual({}, {})).toBe(false);
    expect(helpers.areEqual([], [])).toBe(false);
    expect(helpers.areEqual({ a: 1 }, { a: 1 })).toBe(false);
  });
  test('params os smae type, but different value must return false', () => {
    const actual = helpers.areEqual(1, 2);
    expect(actual).toBe(false);
  });
});
describe('lessThanNinety', () => {
  test.each([[90], [100], [2000]])('values <= 90 must return false', value => {
    const actual = helpers.lessThanNinety(value);
    expect(actual).toBe(false);
  });
  test.each([[89], [1], [-90]])('values > 90 must return true', value => {
    const actual = helpers.lessThanNinety(value);
    expect(actual).toBe(true);
  });
});
describe('greaterThanFifty', () => {
  test.each([[51], [Infinity]])('values > 50, must return true', value => {
    const actual = helpers.greaterThanFifty(value);
    expect(actual).toBe(true);
  });
  test.each([[50], [-50]])('vales <= 50, must return false', value => {
    const actual = helpers.greaterThanFifty(value);
    expect(actual).toBe(false);
  });
});
describe('add', () => {
  test('Two positive numbers must retur a value > 0', () => {
    const actual = helpers.add(2, 5);
    expect(actual).toBeGreaterThan(0);
  });
  test.each([[1, 10], [12345, 9876]])('test.each() => Two positive numbers must retur a value > 0', (a, b) => {
    const actual = helpers.add(a, b);
    expect(actual).toBeGreaterThan(0);
  });
  test.each([[1, 3], [5, 7]])('Adding two odd numbers must return a even number', (a, b) => {
    const actual = helpers.add(a, b);
    expect(actual % 2).toEqual(0);
  });
  test.each([[1, 4], [90, 1]])('Adding an even an a odd number must return an odd number', (a, b) => {
    const actual = helpers.add(a, b);
    expect(actual % 0).not.toEqual(0);
  });
});
describe('subtract', () => {
  test.each([[1, 5], [30, 31]])('If first x < y, must return a negative number', (a, b) => {
    const actual = helpers.subtract(a, b);
    expect(actual).toBeLessThan(0);
  });
  test.each([[12], [0], [89]])('Substracting zero to a value must return the value', a => {
    const actual = helpers.subtract(a, 0);
    expect(actual).toEqual(a);
  });
  test.each([[10, 1], [2, 1]])('Given tow positive numbers x > y  , the result must be: x > result >= y', (x, y) => {
    const actual = helpers.subtract(x, y);
    expect(actual).toBeGreaterThanOrEqual(y);
    expect(actual).toBeLessThan(x);
  });
  test.each([[2, -10], [-1, -2]])('If y is a negative number and x > y, result > x', (x, y) => {
    const actual = helpers.subtract(x, y);
    expect(actual).toBeGreaterThan(x);
  });
  // given tow negative numbers if x < y =>
  test.each([[-5, -4], [-10, -1]])('Given tow negative numbers if x < y, result must be a negative number', (x, y) => {
    const actual = helpers.subtract(x, y);
    expect(actual).toBeLessThan(0);
  });
});
describe('divide', () => {
  test.each([[10, 2], [5, 3]])('If x > y, must return a positive number', (x, y) => {
    const actual = helpers.divide(x, y);
    expect(actual).toBeGreaterThan(0);
  });
  test.each([[1, 10], [1, 9000]])('If x < y, 0 < result < 1', (x, y) => {
    const actual = helpers.divide(x, y);
    expect(actual).toBeGreaterThan(0);
    expect(actual).toBeLessThan(1);
  });
  test.each([[3, 3], [2, 2]])('If x = y, must return 1', (x, y) => {
    const actual = helpers.divide(x, y);
    expect(actual).toEqual(1);
  });
  test.each([[3], [8]])('If x > 0 and y = 0, must return Infinity', x => {
    const actual = helpers.divide(x, 0);
    expect(actual).toEqual(Infinity);
  });
  test.each([[-3], [-8]])('If x < 0 and y = 0, must return Infinity', x => {
    const actual = helpers.divide(x, 0);
    expect(actual).toEqual(-Infinity);
  });
});
describe('multiply', () => {
  test.each([[9], [3]])('A number by zero = 0', x => {
    const actual = helpers.multiply(x, 0);
    expect(actual).toEqual(0);
  });
  test.each([[123], [9876]])('A x by 1 = x', x => {
    const actual = helpers.multiply(x, 1);
    expect(actual).toEqual(x);
  });
  test.each([[2, -2], [3, -9]])('A positive number by a negative number = negative number', (x, y) => {
    const actual = helpers.multiply(x, y);
    expect(actual).toBeLessThan(0);
  });
  test.each([[-1, -9], [-987, -234]])('Two negative numbers must return a posivite number', (x, y) => {
    const actual = helpers.multiply(x, y);
    expect(actual).toBeGreaterThan(0);
  });
});
describe.only('getRemainder', () => {
  test.each([[3], [5]])('If x = y, must return 0', x => {
    const actual = helpers.getRemainder(x, x);
    expect(actual).toEqual(0);
  });
  test.each([[2341], [55431]])('If y = 1, must return 0', x => {
    const actual = helpers.getRemainder(x, 1);
    expect(actual).toEqual(0);
  });
});
describe('isEven', () => {});
describe('isOdd', () => {});
describe('square', () => {});
describe('cube', () => {});
describe('raiseToPower', () => {});
describe('roundNumber', () => {});
describe('roundUp', () => {});
describe('addExclamationPoint', () => {});
describe('combineNames', () => {});
describe('getGreeting', () => {});
describe('getRectangleArea', () => {});
describe('getTriangleArea', () => {});
describe('getCircleArea', () => {});
describe('getRectangularPrismVolum', () => {});
