import { evaluateExpression } from '../utils/evaluate.js';

test('evaluateExpression adds correctly', () => {
  expect(evaluateExpression('1+2+3')).toBe(6);
});

test('evaluateExpression handles trailing operator by trimming', () => {
  expect(evaluateExpression('5+2+')).toBe(7);
});

test('evaluateExpression supports scientific notation', () => {
  expect(evaluateExpression('5E3')).toBe(5000);
});
