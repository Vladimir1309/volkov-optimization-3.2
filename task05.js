const rawActive = prompt("Активных подключений:"); // Логика / Major + Код-стайл / Trivial: Исправлена опечатка "Активых" + сохраняем строку для проверки ввода
const rawMax = prompt("Максимальный лимит подключений:"); // Логика / Major: Сохраняем строку для проверки на пустоту и null

const activeConnections = rawActive !== null && rawActive.trim() !== "" ? Number(rawActive) : NaN; // Логика / Major: Безопасное преобразование в число
const maxConnections = rawMax !== null && rawMax.trim() !== "" ? Number(rawMax) : NaN; // Логика / Major: Безопасное преобразование в число

if (!Number.isFinite(activeConnections) || !Number.isFinite(maxConnections) || activeConnections < 0 || maxConnections <= 0) { // Логика / Major: Добавлена проверка на корректные числа, отрицательные значения и защиту от деления на ноль
    console.log("Ошибка: некорректные данные или лимит подключений равен нулю!");
}
else {
    const loadPercentage = (activeConnections / maxConnections) * 100; // Оптимизация / Minor: Убраны дублирующиеся вычисления в отдельную переменную

    if (loadPercentage > 80) { // Оптимизация / Minor + Код-стайл / Trivial: Убрана проверка на активные подключения за ненадобностью + оператор if приведен к лучшему виду
        console.log("Внимание: Нагрузка на сервер превысила 80%!");
    }
    else if (loadPercentage > 50) {
        console.log("Предупреждение: Сервер загружен более чем наполовину.");
    }
    else if (loadPercentage > 20) {
        console.log("Сервер работает в штатном режиме.");
    }
    else {
        console.log("Сервер простаивает.");
    }
    // Оптимизация / Minor: Убран дублирующий вывод статуса через громоздкий тернарный оператор
}