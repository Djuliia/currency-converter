## Currency Exchange SPA

Цей проєкт є односторінковим додатком (SPA), який створено для зручного
керування курсами валют користувачами.

---

## Опис завдання

У додатку передбачено дві основні сторінки:

### Конвертер валют

Дозволяє користувачам перетворювати одну валюту в іншу. Включає текстове поле,
куди користувач може ввести суму у відповідній валюті, і отримати результат
переведення.

### Актуальні курси валют

Надає користувачам "свіжі" курси обміну відносно базової валюти. Це дозволяє
користувачам легко переглядати курси обміну між різними валютами.

---

## Функціональні вимоги

1. **Панель навігації**: Додана панель навігації для зручного перемикання між
   сторінками конвертера та актуальних курсів.

2. **Визначення поточного курсу**: При першому відкритті програми користувачеві
   пропонується вибрати курс обміну або автоматично визначити його за поточним
   місцем розташування користувача.

3. **Зміна поточного обмінного курсу**: Користувач може змінити свій поточний
   обмінний курс за необхідності.

---

## Використані технології та інструменти

1. **React**: Використовується для створення користувацького інтерфейсу.
2. **Redux**: Для керування станом додатку.
3. **Webpack**: Для компіляції модулів та використання розділення коду для
   оптимізації завантаження.
4. **API для курсів обміну**: Використано OpenCageData для визначення поточного
   розташування користувача та apilayer для отримання актуальних курсів валют.

---

## Інші засоби, що використовувалися

1. **OpenCageData**: Для визначення поточного розташування користувача та його
   валюти.
2. **apilayer**: Для конвертації валют та отримання актуальних курсів.

---

## Інструкція з встановлення та запуску

1. Клонуйте репозиторій на свій локальний комп'ютер.
2. Встановіть залежності, використовуючи `npm install`.
3. Запустіть додаток за допомогою `npm start`.
