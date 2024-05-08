import React from 'react';

export const highlightAddrMatch = (
  value: string,
  ref: React.RefObject<HTMLDivElement>,
  text: string,
) => {
  const children = ref.current;
  const values = value.split(/[\s,.]/gi).filter(i => !!i);

  if (children) {
    const str = text
      .split(' ')
      .map(i => {
        let result = i;
        values.forEach(v => {
          if (!!v && !!result && result.toLowerCase().includes(v.toLowerCase())) {
            const separatorsInResult = /[\s/-_<>]/.test(result);
            if (separatorsInResult) {
              result = `<span style="font-weight: 900">${result}</span>`;
            } else {
              const regExp = new RegExp(v, 'gi');
              result = i.replace(
                regExp,
                match => `<span style="font-weight: 900">${match}</span>`,
              );
            }
          }
        });
        return result;
      })
      .join(' ');
    children.innerHTML = `<span>${str}</span>`;
  }
};
