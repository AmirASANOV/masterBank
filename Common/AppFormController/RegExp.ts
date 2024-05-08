export const DisableSymRegExp = /(<)|(>)|(])|(\[)|({)|(})|(\^)|(§)|(±)|(~)/gi;
export const NameRegularExpression =
  /^[А-ЯЁё'][а-яЁё']*([\s]?[-]?[\s]?[А-ЯЁё'][а-яЁё']*)?$/i;
export const JobTitleRegularExpression = /^([А-Яа-яA-Za-z0-9']*[\s]?[-]?[\s]?){1,10}$/i;
export const MobilePhoneRegularExpression =
  /^\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/i;
export const OnlyIntegerRegularExpression = /^[0-9]{4,}$/;
export const ConfirmCodeRegularExpression = /^[0-9]{4,6}$/i;
export const BornCityRegularExpression =
  /^[а-яА-ЯеЁ.]+(?:[\s-'"][а-яА-ЯеЁ.]+[.]?)*[а-яА-ЯеЁ ]?$/i;
export const SeriesAndNumberPassportRegularExpression = /^[0-9]{4}\s[0-9]{6}$/i;
export const DepartmentCodeRegularExpression = /[0-9]{3}-[0-9]{3}/i;
export const FindUrlRegularExpression =
  /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@\-/]))?/;
export const CreditSumRegularExpression = /^(?!0\d)\d{5,6}$/;
export const incomeSumRegularExpression = /^(1000000|[1-9]\d{4,5})$/;
