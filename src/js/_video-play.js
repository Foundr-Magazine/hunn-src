import $ from "jquery";

$(function ($) {
  // Vimeo control
  function vimeoControl(videoWrapper) {
    var playButton = videoWrapper.querySelector(".play-btn");
    var iframe = videoWrapper.querySelector("iframe");
    var thumb = $(videoWrapper).find(".video-thumb");

    var videoTitle = "";
    var player = new Vimeo.Player(iframe);

    const playVideo = () => {
      $(playButton).hide();
      thumb.hide();
      $(videoWrapper).find(".video-iframe-tag").show();
    };

    player.getVideoTitle().then(function (title) {
      videoTitle = title.replaceAll(" ", "-");
    });

    $(videoWrapper).on("click", ".play-btn, .video-thumb", function () {
      player.play();
      playVideo();
    });

//     playButton.addEventListener("click", function () {});

    player.on("play", () => {
        playVideo();
      // ga video play tracking
      const dataLayerVideoPlay = window.createDataLayerObject(
        "GTMevent",
        window.getEventCategory(window.scrollPercentRounded),
        "video-played",
        videoTitle
      );
      window.dataLayer.push(dataLayerVideoPlay);
    });

    player.on("pause", () => {
      // playButton.style.display = "block";

      // ga video paused tracking
      const dataLayerVideoPaused = window.createDataLayerObject(
        "GTMevent",
        window.getEventCategory(window.scrollPercentRounded),
        "video-paused",
        videoTitle
      );
      window.dataLayer.push(dataLayerVideoPaused);
    });

    player.on("timeupdate", function (data) {
      // ga video watch percentage tracking
      let watchedPercentage = data.percent * 100;
      let videoPercentageEvent = "video-viewed 0%";
      let dataLayerVideoPlayPercentage = {};

      switch (watchedPercentage) {
        case 10:
          videoPercentageEvent = "video-viewed 10%";
          dataLayerVideoPlayPercentage = window.createDataLayerObject(
            "GTMevent",
            window.getEventCategory(window.scrollPercentRounded),
            videoPercentageEvent,
            videoTitle
          );
          window.dataLayer.push(dataLayerVideoPlayPercentage);

          break;
        case 25:
          videoPercentageEvent = "video-viewed 25%";
          dataLayerVideoPlayPercentage = window.createDataLayerObject(
            "GTMevent",
            window.getEventCategory(window.scrollPercentRounded),
            videoPercentageEvent,
            videoTitle
          );
          window.dataLayer.push(dataLayerVideoPlayPercentage);

          break;
        case 50:
          videoPercentageEvent = "video-viewed 50%";
          dataLayerVideoPlayPercentage = window.createDataLayerObject(
            "GTMevent",
            window.getEventCategory(window.scrollPercentRounded),
            videoPercentageEvent,
            videoTitle
          );
          window.dataLayer.push(dataLayerVideoPlayPercentage);

          break;
        case 75:
          videoPercentageEvent = "video-viewed 75%";
          dataLayerVideoPlayPercentage = window.createDataLayerObject(
            "GTMevent",
            window.getEventCategory(window.scrollPercentRounded),
            videoPercentageEvent,
            videoTitle
          );
          window.dataLayer.push(dataLayerVideoPlayPercentage);

          break;
        case 100:
          videoPercentageEvent = "video-viewed 100%";
          dataLayerVideoPlayPercentage = window.createDataLayerObject(
            "GTMevent",
            window.getEventCategory(window.scrollPercentRounded),
            videoPercentageEvent,
            videoTitle
          );
          window.dataLayer.push(dataLayerVideoPlayPercentage);

          break;
      }
    });
  }
  var allVideo = document.querySelectorAll(".video-content");
  for (var i = 0; i < allVideo.length; i++) {
    // var playBtn = allVideo[i].querySelector('.play-btn');
    // var vIframe = allVideo[i].querySelector('iframe');
    vimeoControl(allVideo[i]);
  }
  // $(document).on('click', '.play-btn, .video-thumb', function(){
  //         var parent = $(this).parent('.video-content');
  //         var src = parent.find('.video-iframe-tag').find('iframe').attr('data-src')
  //         parent.find('.video-thumb').hide()
  //         parent.find('.video-iframe-tag').find('iframe').attr('src', src)
  //         parent.find('.video-iframe-tag').show()
  //         $(this).hide();
  //         parent.find('.play-btn').hide();
  // })
});
