window.addEventListener('message', function (event) {
  window.localStorage.parentBody = event.data;
});

document.getElementById('fire-button').addEventListener("click", function (event) {
  console.log(window.localStorage.parentBody);
});
