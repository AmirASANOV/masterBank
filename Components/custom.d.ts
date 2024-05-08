/* eslint-disable */

declare module '*.png' {
  const content: any;
  export default content;
}
declare module '*.jpg' {
  const content: any;
  export default content;
}
declare module '*.svg' {
  const content: any;
  export default content;
}
declare module '*.pdf' {
  const content: any;
  export default content;
}
declare module '*.webp' {
  const content: any;
  export default content;
}
declare module '*.ico' {
  const content: any;
  export default content;
}
declare module '*.sass' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
//
// let finished = false
// const arrayCities: Array<string> = [
//   'АБАКАН',
//   'АЛЬМЕТЬЕВСК',
//   'АНГАРСК',
//   'АРХАНГЕЛЬСК',
//   'АЧИНСК',
//   'БАЛАШИХА',
//   'БАРНАУЛ',
//   'БЕЛГОРОД',
//   'БЕРДСК',
//   'БИЙСК',
//   'БУЗУЛУК',
//   'ВЛАДИВОСТОК',
//   'ВЛАДИМИР',
//   'ВОЛГОГРАД',
//   'ВОЛЖСКИЙ',
//   'ВОРОНЕЖ',
//   'ГЛАЗОВ',
//   'ДЗЕРЖИНСК',
//   'ЕКАТЕРИНБУРГ',
//   'ЖЕЛЕЗНОГОРСК',
//   'ЗЛАТОУСТ',
//   'ИЖЕВСК',
//   'ИРКУТСК',
//   'ЙОШКАР-ОЛА',
//   'КАЗАНЬ',
//   'КАЛИНИНГРАД',
//   'КАЛУГА',
//   'КАМЕНСК-УРАЛЬСКИЙ',
//   'КЕМЕРОВО',
//   'КИРОВ',
//   'КОРОЛЕВ',
//   'КРАСНОГОРСК',
//   'КРАСНОДАР',
//   'КРАСНОЯРСК',
//   'КУРГАН',
//   'КУРСК',
//   'ЛИНЕВО',
//   'ЛИПЕЦК',
//   'ЛЮБЕРЦЫ',
//   'МАГНИТОГОРСК',
//   'МИАСС',
//   'МОСКВА',
//   'МУРМАНСК',
//   'МЫТИЩИ',
//   'НАБЕРЕЖНЫЕ ЧЕЛНЫ',
//   'НАХОДКА',
//   'НИЖНЕВАРТОВСК',
//   'НИЖНИЙ НОВГОРОД',
//   'НИЖНИЙ ТАГИЛ',
//   'НОВОКУЗНЕЦК',
//   'НОВОРОССИЙСК',
//   'НОВОСИБИРСК',
//   'НОВОТРОИЦК',
//   'НОВОЧЕРКАССК',
//   'ОДИНЦОВО',
//   'ОМСК',
//   'ОРЕНБУРГ',
//   'ОРСК',
//   'ПЕНЗА',
//   'ПЕРВОУРАЛЬСК',
//   'ПЕРМЬ',
//   'ПЕТРОЗАВОДСК',
//   'ПОДОЛЬСК',
//   'ПРОКОПЬЕВСК',
//   'ПСКОВ',
//   'РАДУЖНЫЙ',
//   'РОСТОВ-НА-ДОНУ',
//   'РЯЗАНЬ',
//   'САМАРА',
//   'САНКТ-ПЕТЕРБУРГ',
//   'САРАНСК',
//   'САРАТОВ',
//   'СЕВЕРОДВИНСК',
//   'СОСНОВЫЙ БОР',
//   'СОЧИ',
//   'СТАВРОПОЛЬ',
//   'СТЕРЛИТАМАК',
//   'СУРГУТ',
//   'СЫЗРАНЬ',
//   'ТАГАНРОГ',
//   'ТВЕРЬ',
//   'ТОЛЬЯТТИ',
//   'ТОМСК',
//   'ТУАПСЕ',
//   'ТУЛА',
//   'ТЮМЕНЬ',
//   'УЛЬЯНОВСК',
//   'УСОЛЬЕ-СИБИРСКОЕ',
//   'УССУРИЙСК',
//   'УФА',
//   'ХАБАРОВСК',
//   'ХИМКИ',
//   'ЧЕБОКСАРЫ',
//   'ЧЕЛЯБИНСК',
//   'ЭНГЕЛЬС',
//   'ЮЖНО-САХАЛИНСК',
//   'ЮРГА',
//   'ЯКУТСК',
//   'ЯРОСЛАВЛЬ',
//   'ЯСНЫЙ'
// ];
// const resultCities: Array<{city: string, kladr_id: string}> = [];
// const getKladr = (city: string, index: number) => {
//   getAddressSuggestions({
//     query: city,
//     from_bound: {value: 'city'},
//     to_bound: {value: 'settlement'},
//   }).then(response => {
//     resultCities.push({
//       city,
//       kladr_id: response ? response[0].data.kladr_id || 'Не найдено' : 'Не найдено',
//     })
//     if(index === arrayCities.length - 1){
//     }
//   })
// }
//
//
// arrayCities.forEach((city: string, index) => {
//   setTimeout(() => {
//     getKladr(city, index)
//   }, 1000 + index*100)
// })
