const input = document.getElementById("input");
const button = document.querySelector(".btn").addEventListener("click", search);
const body = document.querySelector("body");
const container = document.querySelector(".Container");
let box = document.createElement("div");

function search(city) {
  city = input.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=15e4575a531b83f22aed212f1882dfa8`
  )
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      function createCard() {
        if (input.value != "" && data.cod != 404) {
          let box = document.createElement("div");
          box.classList.add("weather");
          container.appendChild(box);
          box.innerHTML = data.name;
          let temp = document.createElement("div");
          temp.classList.add("temp");
          box.appendChild(temp);
          temp.innerHTML =
            (data.main.temp - 273.15).toFixed(2) +
            "°C" +
            "<br>" +
            data.sys.country;
        }
        console.log(data.cod);
        setTimeout(() => {
          input.value = "";
        }, 0);
      }
      createCard();
    });
}
