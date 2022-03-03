const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected= 1_000_000;
    actual = sum (500_000, 500_000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -5;
    actual = sum(-2, -3);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 5;
    actual = sum(5, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = 5;
    actual = subtract(8,3);
    expect (actual).toBe(expected);
  })

  test('can subtract two large positive numbers', () => {
    expected = 500_000;
    actual = subtract(1_000_000, 500_000);
    expect (actual).toBe(expected);
  })

  test('can subtract two negative numbers', () => {
    expected = -5;
    actual = subtract(-8,-3);
    expect (actual).toBe(expected);
  })

  test('can subtract zero', () => {
    expected = 5;
    actual = subtract(5, 0);
    expect (actual).toBe(expected);
  })


});

describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expected = 10;
    actual = multiply(2,5);
    expect (actual).toBe(expected);
  })

  test('can multiply two large positive numbers', () => {
    expected = 1_000_000_000;
    actual = multiply(20_000,50_000);
    expect (actual).toBe(expected);
  })

  test('can multiply two negative numbers', () => {
    expected = 10;
    actual = multiply(-2,-5);
    expect (actual).toBe(expected);
  })

  test('can multiply by zero', () => {
    expected = 0;
    actual = multiply(5, 0);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {

    test('can divide two small positive numbers', () => {
      actual = 2;
      expected = divide(10, 5);
      expect(actual).toBe(expected);
    })

    test('can divide two large positive numbers', () => {
      actual = 20_000;
      expected = divide(1_000_000_000, 50_000);
      expect(actual).toBe(expected);
    })

    test('can divide two small negative numbers', () => {
      actual = 2;
      expected = divide(-10, -5);
      expect(actual).toBe(expected);
    })

    // test('can divide by 0', () => {
    //   actual = Infinity;
    //   expected = divide(10, 0);
    //   expect(actual).toBe(expected);
    // })

});

describe('modulus', () => {
 
  test('can get remainder of two small positive numbers', () =>{
    actual = 1;
    expected = modulus(10, 3);
    expect(actual).toBe(expected);
  })

  test('can get remainder of two large positive numbers', () =>{
    actual = 1_000_000;
    expected = modulus(10_000_000, 3000_000);
    expect(actual).toBe(expected);
  })

  test('can get remainder of two negative numbers', () =>{
    actual = -1;
    expected = modulus(-10, -3);
    expect(actual).toBe(expected);
  })


});

describe('even', () => {

  test('can return true for small positive even numbers', () => {
    actual = true;
    expected = even(6);
    expect (actual).toBe (expected);
  })

  test('can return true for large positive numbers', () => {
    actual = true;
    expected = even(1_000_000_000);
    expect (actual).toBe (expected);
  })

  test('can return true for negative numbers',() => {
    actual=true;
    expected = even (-6);
    expect (actual).toBe(expected);
  })
  
});

describe('odd', () => {

  test('can return true for small positive numbers', () => {
    actual=true;
    expected = odd (7);
    expect (actual).toBe (expected);
  })

  test('can return true for large positive numbers', () => {
    actual=true;
    expected = odd (1_000_000_001);
    expect (actual).toBe (expected);
  })

  test('can return true for negative numbers', () => {
    actual=true;
    expected = odd (-7);
    expect (actual).toBe (expected);
  })

});
