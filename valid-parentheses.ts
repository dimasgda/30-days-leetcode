function isValid(s: string): boolean {
  const stack: string[] = [];
  const pairs = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let bracket of s) {
    if (bracket in pairs) {
      stack.push(bracket);
    } else if (stack.length == 0 || bracket != pairs[stack.pop() as string]) {
      return false;
    }
  }
  return stack.length === 0;
}
