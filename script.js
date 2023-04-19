const fetchAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((res) => {
      document.getElementById("advice-id").innerHTML = "ADVICE #" + res.slip.id;
      document.getElementById("advice-text").innerHTML = res.slip.advice;
    })
}

fetchAdvice();