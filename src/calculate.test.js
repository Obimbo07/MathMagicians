import calculate from './calculate';

describe('calculate function', () => {
    it('should clear the calculator when buttonName is "AC"', () => {
      const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
      expect(result).toEqual({ total: null, next: null, operation: null });
    });
  
  });
  

