const ERROR_TEXT = {
  LIMIT_SMS: 'Вы исчерпали лимит смс в сутки, пожалуйста, попробуйте завтра',
  SERVER_ERROR: 'Сервис временно недоступен',
  NO_CORRECT_PHONE: 'Вы ввели неверный номер',
  SMILES: '🐶🐱🐹🐭🐰🙈🦆🦀',
  PHONE_BAN:
    'Ваш номер телефона временно заблокирован для авторизации на сервисе, пожалуйста, попробуйте авторизоваться позже!',
  WAITING_SMS:
    'На ваш номер уже отправлено смс, дождитесь его получения или повторите попытку через 1 минуту',
  TOKEN_EXPIRED:
    'Срок действия персональной ссылки истёк. Введите номер телефона и получите новый код для входа.',
  SESSION_CREATE_ERROR: `При создании пользовательской сессии произошла ошибка, пожалуйста попробуйте еще раз позже.`,
};

export default ERROR_TEXT;
