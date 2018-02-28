module.exports = function check(str, bracketsConfig) {
  const brackets = bracketsConfig
    .map(brackets => `${brackets[0]}${brackets[1]}`);
  while (str.length != 0) {
    const lengthBefore = str.length;
    brackets.forEach(brackets => str = str.replace(brackets, ""));
    if (lengthBefore === str.length) {
      break;
    }
  };
  return !str.length;
};