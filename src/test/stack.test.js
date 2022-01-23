const st = require('../stack');

describe('Stack', () => {
  let stack = null;

  beforeEach(() => {
    stack = new st();
  });

  it('will be empty without pushed item', () => {
    const size = stack.getSize();
    const isEmpty = stack.isEmpty();

    expect(size).toBe(0);
    expect(isEmpty).toBeTruthy();
  });
  it('will throw error when pop without item', () => {
    expect(() => stack.pop()).toThrowError('Stack is empty');
  });
  it('will return size as much as item is stacked', () => {
    stack.push('1');
    stack.push('2');
    stack.pop();
    stack.push('3');

    const size = stack.getSize();

    expect(size).toBe(2);
  });
  describe('getTop', () => {
    it('will return top with item', () => {
      stack.push('item');

      const top = stack.getTop();

      expect(top).toEqual({ head: undefined, value: 'item' });
    });
    it('will return undeifined without item', () => {
      stack.push('item');
      stack.pop();

      const top = stack.getTop();

      expect(top).toBeUndefined();
    });
  });
});
