"use strict";
const btn = document.querySelector(".btn");
const adviceId = document.querySelector(".advice-id");
const adviceContent = document.querySelector(".advice-text");
const container = document.querySelector(".container");

const renderAdvice = function (id, data) {
  adviceId.innerHTML = `Advice #${id}`;
  adviceContent.innerHTML = `"${data}"`;
};

const getAdvice = function () {
  axios
    .get(`https://api.adviceslip.com/advice`)
    .then((response) => {
      console.log(response.data.slip);
      const { id, advice } = response.data.slip;

      // console.log(id, advice);

      renderAdvice(id, advice);
    })
    .catch((err) => {
      adviceId.innerHTML = `${err} Advice #404`;
      adviceContent.innerHTML = `"Check your internet connection"`;
    });
};

btn.addEventListener("click", function () {
  getAdvice();
});
getAdvice();
