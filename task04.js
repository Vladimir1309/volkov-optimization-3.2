const selectedPlan = prompt("Введите план:");
let price = 0;
// Оптимизация / Minor: Убран флаг-индикатор и первый switch т.к. не используются в коде (и вызывали ошибку перезаписи const)

// Проверка цены
switch (selectedPlan) { // Логика / Major + Оптимизация / Minor: Добавлен оператор break для выхода + расчет цены заменил проверку валидности
    case "Start":
        price = 500;
        break;
    case "Standard":
        price = 1200;
        break;
    case "Business":
        price = 1750;
        break;
    case "Premium": // Логика / Major: Исправлена опечатка "Premiums" на "Premium"
        price = 2500;
        break;
    case "Ultra":
        price = 3500;
        break;
    default: // Логика / Major: Добавлена ветка по умолчанию дабы ловить несуществующие тарифы и отмену ввода
        price = 0;
        break;
}

console.log(`Стоимость тарифа: ${price} руб.`);