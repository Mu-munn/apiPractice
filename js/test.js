//リクエストパラメーターのセット
const KEY = "AIzaSyBJPuJuWHR2c4Gn0Fme_reRPLwUvJRucjA"; // APIKEY
const secondKEY = "AIzaSyAP7sERAjo5k_SlyPs_gIM6UOF40ImgOig";
const ID = "Odv-zbpy-Y8&ab"; // 動画ID
let url = "https://www.googleapis.com/youtube/v3/videos"; // APIURL
url += "?id=" + ID;
url += "&key=" + KEY;
url += "&part=snippet,statistics,status";
var qu = "hikakin";
url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${qu}&key=${secondKEY}`;

// テキストボックスへ値を設定します
$(function () {
  $.ajax({
    url: url,
    dataType: "json",
  })
    .done(function (data) {
      console.log(url);
      // URL
      for (var i in data.items) {
        $(`.card__titletext${i}`).append(
          `<p>title:${data.items[i].snippet.title} \n videoId:${data.items[i].id.videoId}</p>`
        );
      }
    })
    .fail(function (data) {
      console.log("通信に失敗しました。");
    });
});

//Ajax通信をする
