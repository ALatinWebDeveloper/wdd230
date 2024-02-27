let windChill = document.querySelector("#windChill");

let speed = 15;
let temperature = 20;
let resultado = 35.74 + 0.6215 * temperature - 35.75 * (speed ** 0.16) + 0.4275 * temperature * (speed ** 0.16);
resultado = resultado.toFixed(2);

if (speed >= 3.0 && temperature <= 50) {
    windChill.innerHTML = `${resultado} 🌬️❄️`;
} else {
    windChill.innerHTML = "N/A 🌬️❄️";
}
