const isRegistered = confirm("Подтвердите регистрацию");
const rawCartSum = prompt("Введите сумму корзины:"); // Логика / Major: Получаем ввод строкой, дабы проверить на пустоту и null
const totalCartSum = rawCartSum !== null && rawCartSum.trim() !== "" ? Number(rawCartSum) : NaN; // Логика / Major: Переводим в число без превращения пустой строки в 0
let discount = 0; // Код-стайл / Trivial: Название переменной переименовано на английский язык

if (Number.isFinite(totalCartSum) && totalCartSum > 0) { // Логика / Major: Добавлена проверка на корректное положительное число
    if (isRegistered) { // Оптимизация / Minor + Код-стайл / Minor: Убрана проверка на true + оператор if приведен к лучшему виду
        if (totalCartSum >= 5000) { // Логика / Major: Добавлен знак больше или равно
            discount = 15;
        }
        else if (totalCartSum >= 3000) { // Логика / Major + Оптимизация / Minor: Добавлен знак больше или равно + убрана лишняя вложенность else { if }
            discount = 10;
        }
        else {
            discount = 5;
        }
    } // Оптимизация / Minor: Убран оператор else, поскольку discount и так будет 0 если оператор if не отработает

    console.log(`Ваша скидка: ${discount}%`);

    if (totalCartSum % 2 === 0) {
        console.log("Вам начислен четный бонус!"); // Код-стайл / Trivial: Убраны лишние пробелы в скобках и кавычки приведены к одному виду
    }

    // Расчет стоимости доставки
    let deliveryCost = 0; // Оптимизация / Minor: Присвоено значение переменной
    if (totalCartSum >= 1000 && isRegistered) { // Код-стайл / Trivial + Оптимизация / Minor + Логика / Major: Оператор if приведен к лучшему виду + пересобрана логика операторов по закону де Моргана + изменено условие оператора if
        deliveryCost = 0;
    }
    else {
        deliveryCost = 300;
    }

    console.log(`Стоимость доставки: ${deliveryCost} руб.`); // Синтаксис / Blocker + Код-стайл / Minor: Исправлена опечатка console.lo + грамотно стилизовано содержимое функции
}
else {
    console.log("Неверное значение!"); // Логика / Major: Добавлен оператор else дабы ловить неверные значения
}