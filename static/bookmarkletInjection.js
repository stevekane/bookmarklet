(function () {

  var iframe = document.getElementById('bookmarkletframe')
    , innerHTML = document.body.innerHTML;

  var updateHTML = function () {
    iframe.contentWindow.postMessage(innerHTML, window.location);
  };

  window.setInterval(updateHTML, 500);
})();
