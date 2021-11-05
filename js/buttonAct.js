const secondKEY = "AIzaSyAP7sERAjo5k_SlyPs_gIM6UOF40ImgOig";
$(function () {
  var videoIds = [];
  var videoTitles = [];
  var etcUrl = "http://www.youtube.com/watch?v=";
  $("#searchButton").click(function () {
    var serchText = $("#serchBox");
    var qu = serchText.val();
    url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${qu}&key=${secondKEY}`;
    $.ajax({
      url: url,
      dataType: "json",
    })
      .done(function (data) {
        console.log(url);
        for (var i in data.items) {
          var videoId = data.items[i].id.videoId;
          videoIds.push(videoId);
          $(`.card__imgframe${i}`).empty(); //カードimege
          $(`.card__imgframe${i}`).append(
            `<img src="https://i.ytimg.com/vi/${videoId}/sddefault.jpg" alt="">`
          );
          //title
          var videoTitle = data.items[i].snippet.title;
          videoTitles.push(videoTitle);
          $(`.card__titletext${i}`).empty(); //カードタイトル
          $(`.card__titletext${i}`).append(
            `<p>${data.items[i].snippet.title}</p>`
          );
          // videoId:${data.items[i].id.videoId}

          etcUrl += `${data.items[i].id.videoId}`;
          $(`.download-button${i}`).empty();

          $(`.download-button${i}`).append(
            `<a href="http://localhost:3000/download/?url=${etcUrl}&title=${data.items[i].snippet.title}" class="btn-partial-line">DOWNLOAD</a>`
          );
        }
      })
      .fail(function (data) {
        console.log("通信に失敗しました。");
      });
    //$("#aaa").toggle();
    $("#aaa").show();
  });
});
