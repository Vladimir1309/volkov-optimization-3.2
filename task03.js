// Запрашиваем имя пользователя
const userName = prompt("Введите ваше имя:"); // Логика / Major: Убрано преобразование в число
const email = prompt("Введите электронную почту:");

// Функция имитирует тяжелые вычисления нейросетью на сервере
function isHeavySpamCheck() {
    return false;
}

// Проверка валидности формы перед отправкой
const isNameValid = userName !== null && userName.trim() !== ""; // Логика / Major: Добавлена проверка имени на null и пустую строку с пробелами
const isEmailValid = email !== null && email.length > 3 && email.includes("@"); // Логика / Major + Синтаксис / Blocker: Защита от падения при null, замена || на && и перенос проверки длины вперед

if (!isNameValid || !isEmailValid || isHeavySpamCheck()) { // Код-стайл / Trivial + Логика / Major + Оптимизация / Minor: Оператор if приведен к лучшему виду + исправлена инверсия проверки почты и спама + тяжелая функция теперь стоит последней в проверке
    console.log("Ошибка: форма заполнена некорректно или содержит спам!");
}
else {
    console.log("Успешно! Данные отправлены.");
}