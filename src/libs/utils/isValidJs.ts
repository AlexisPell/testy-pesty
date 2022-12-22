export const isValidJs = (str: string): boolean => {
  let stack: string[] = [];

  str = str
    .split('')
    .filter(
      (s) =>
        s == '(' || s == ')' || s == '{' || s == '}' || s == '[' || s == ']' || s == '<' || s == '>'
    )
    .join('');

  for (let i = 0; i < str.length; i++) {
    let char = stack[stack.length - 1];

    if (str[i] == '(' || str[i] == '{' || str[i] == '[' || str[i] == '<') {
      stack.push(str[i]);
    } else if (
      (char == '(' && str[i] == ')') ||
      (char == '{' && str[i] == '}') ||
      (char == '[' && str[i] == ']') ||
      (char == '<' && str[i] == '>')
    ) {
      stack.pop();
    } else return false;
  }

  return stack.length ? false : true;
};
