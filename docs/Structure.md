# Структура приложения 

---
*Каждая страница в роутере помещается в Layout-обёртку, в зависимости от приватности страницы, Layout могут быть разными*

## [Роутер](../src/Router/Router.tsx)

*Главные страницы обёрнуты в шаблон с [Шапкой](../src/Components/Header/Header.tsx) и [Подвалом](../src/Components/Footers/NewSobankFooter.tsx)*

Список главным страниц с открытыми настройками приватности:
* [HomePage](../src/Pages/HomePage/HomePage.tsx)
* [CreditCardPage](../src/Pages/CreditCardPage/CreditCardPage.tsx)
* [CreditCashPage](../src/Pages/CreditCashPage/CreditCashPage.tsx)
* [HypothecPage](../src/Pages/HypothecPage/HypothecPage.tsx)
* [MfoPage](../src/Pages/MFOPage/MFOPage.tsx)

Такие страницы наполнены контентом типа "Блок с картинкой -> Блок с кнопкой авторизации"

---

## Авторизация 

*Авторизация представляет собой 2 вида модальных окон, они открываются в зависимости от способа, которым пользователь попал на страницу*

### Обычная авторизация

Компонент [AuthWindow](../src/Components/Modals/AuthWindow.tsx), в него пользователь попадёт: 
* при входе на страницу без utm метки **?token=**  
* при сценарии, когда токен в такой ссылке устарел

Компонент представляет собой окно с 2 полями для ввода "Номер телефона" и "Смс код". Второе будет скрыто до момента ввода пользователем номера

Тип авторизации **(BASIC_SMS) или (MTS_ID)** будет определён с помощью нашего api и отправлен ответом на запрос **api/auth/universal_sign_in**

### Авторизация с предзаполненными полями

Компонент [AutoAuthWindow](../src/Components/Modals/AutoAuthWindow/AutoAuthWindow.tsx), в него пользователь попадёт после успешного ответа на запрос **api/auth/get_autologin_data**, телом в котором является токен из utm метки **?token=**

Компонент представляет собой 2 вида предзаполненных полей: 
* **(BASIC_SMS)** Номер телефона и код. В этом случае появляется кнопка "Далее", при нажатии пользователь будет авторизован без дальнейшего взаимодействия с полями
* **(MTS_ID)** Только номер телефона. В этом случае код будет отправлен пользователю автоматически, а в окне появится поле для его ввода. После ввода кода пользователь будет авторизован 

---

## Анкета

Компонент [ApplicationForm](../src/Pages/ApplicationForm/ApplicationForm.tsx)

Анкета представляет собой основной функционал приложения. <br/> 
Доступ в анкету предоставляется только авторизованным пользователям. <br/>
В [Роутере](../src/Router/Router.tsx) анкета обёрнута в **[UserLayout](../src/Layouts/UserLayout.tsx)** для настроек приватности и в **[FormLayout](../src/Layouts/FormLayout.tsx)** для взаимодействия с **Redux** <br/>

Анкета содержит в себе 4 дочерних пути: 
* [CreditParameters](../src/Pages/ApplicationForm/FormStages/CreditParameters.tsx)
* [WorkInfo](../src/Pages/ApplicationForm/FormStages/WorkInfo.tsx)
* [AdditionalInfo](../src/Pages/ApplicationForm/FormStages/AdditionalInfo.tsx)
* [PassportInfo](../src/Pages/ApplicationForm/FormStages/PassportInfo.tsx)

---

## Решения

Компонент [Decisions](../src/Pages/ApplicationForm/Decisions/Decisions.tsx)

Решения - заключительный этап анкеты, на котором пользователь может увидеть ответы наших партнёров по его заявке. <br/>
Страница решений так же обёрнута в **[UserLayout](../src/Layouts/UserLayout.tsx)** для настроек приватности и в **[FormLayout](../src/Layouts/FormLayout.tsx)** для взаимодействия с **Redux** <br/>
В api/form решения являются последним (5) шагом анкеты. <br/> 
При ответе на запрос **api/form/current_test** 
```ts
step: 5
```
Пользователь будет перенаправлен на страницу [Decisions](../src/Pages/ApplicationForm/Decisions/Decisions.tsx)