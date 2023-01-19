const tCelsius = +prompt("Введите температуру в Цельсиях");
let tFahrenheit = 1.8 * tCelsius + 32;
tFahrenheit = tFahrenheit.toFixed(1);
alert(`Цельсий: ${tCelsius}, Фаренгейт: ${tFahrenheit}`);