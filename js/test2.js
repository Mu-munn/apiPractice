$(`.mikan`).click(function () {
  /*
  $("#popup-bg-cover").show();
  window.location.href = `http://localhost:3000/download/?url=https://youtu.be/Odv-zbpy-Y8&title=a`;
  */
  // コールバック関数を実行する関数
  function execCallback(callback) {
    $("#popup-bg-cover").show();
    callback();
  }

  // execCallback()に渡されるコールバック関数
  function myCallback(aiu) {
    window.location.href = `http://localhost:3000/download/?url=https://youtu.be/Odv-zbpy-Y8&title=a`;
    aiu();
  }

  var mittumenovar = function () {
    $("#popup-bg-cover").hide();
  };

  // execCallback()にコールバック関数を渡して実行する
  execCallback(myCallback(mittumenovar)); // => 'I call callback'
  //    'This is my callback'
});
