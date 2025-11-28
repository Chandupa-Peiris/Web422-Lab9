// exported helper to evaluate arithmetic expressions for unit testing
export function evaluateExpression(expr) {
  if (typeof expr !== 'string') throw new TypeError('expression must be a string');

  // remove trailing operators to avoid eval errors
  let e = expr.trim();
  while (e.length && '+-*/'.includes(e[e.length - 1])) e = e.slice(0, -1);

  try {
    // eslint-disable-next-line no-eval
    const result = eval(e);
    if (!Number.isFinite(result)) throw new Error('Non-finite result');
    return result;
  } catch {
    throw new Error('Invalid expression');
  }
}
