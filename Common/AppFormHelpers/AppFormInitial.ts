/* eslint-disable */
export const getValueFromAddr = (addr: { [n: string]: any }, disable?: Array<string>) => {
  const array: Array<string> = [];
  for (const key in addr) {
    if (addr[key]?.value && !disable?.includes(key)) {
      if (!array.includes(addr[key]?.value)) {
        array.push(addr[key]?.value);
      }
    }
  }

  return array.length > 0 ? array.join(', ') : array[0];
};
