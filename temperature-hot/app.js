const API_KEY = `fdf9257aafbed128dbd819a44a2f14d9`
const cityTemperture = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperture(data))
}
const setCity= (id,text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperture = (weather) => {
    setCity('city', weather.name);
    setCity('temp', weather.main.temp);
    setCity('clouds', weather.weather[0].main);
    const icon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    const iconImg = document.getElementById('icon');
    iconImg.setAttribute('src', icon);
  }