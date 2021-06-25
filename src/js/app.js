export default function sortObj(obj, rules) {
  const outputArr = [];
  const sortedKeys = Object.keys(obj).sort();

  if (!rules) {
    for (const key of sortedKeys) {
      outputArr.push({ key, value: obj[key] });
    }
    return outputArr;
  }
  // eslint-disable-next-line no-prototype-builtins
  if (rules.some((e) => !obj.hasOwnProperty(e))) {
    throw new Error('Введены не правильные параметры');
  }

  for (const key in obj) {
    if (rules && rules.includes(key)) {
      outputArr[rules.indexOf(key)] = { key, value: obj[key] };
      sortedKeys.splice(sortedKeys.indexOf(key), 1);
    }
  }
  for (const key of sortedKeys) {
    outputArr.push({ key, value: obj[key] });
  }
  return outputArr;
}
