const Reviews = (function () {
  "use strict";
  const likeItem = $(".js-like");
  const starRating = $(".js-star");
  const finishStarRating = $(".js-finish-star");
  return {
    submitForm: function () {
      $(".feedback-form").submit(function (e) {
        e.preventDefault();
        $("#feedback-form").hide();
        $("#success-block").show();
      });
    },
    changeInpuFile: function () {
      $("#file-1").change(function (e) {
        console.log("changeInpuFile");
        $(".js-label-add-file").text("Фото загружено");
      });
    },
    hoverStarRating: function () {
      starRating
        .mouseover(function () {
          const _this = $(this);
          const countStar = _this.data("value");
          let removed = starRating.slice(0, +countStar);
          starRating.removeClass("hover");
          removed.addClass("hover");
        })
        .mouseout(function () {
          starRating.removeClass("hover");
        });
    },
    addRating: function () {
      starRating.click(function (e) {
        e.preventDefault();
        const _this = $(this);
        const countStar = _this.data("value");
        $(".js-feedback-count").text(countStar);
        let removed = starRating.slice(0, +countStar);
        starRating.removeClass("selected");
        removed.addClass("selected");
        let removedFinish = finishStarRating.slice(0, +countStar);
        removedFinish.addClass("selected");
      });
    },
    addLike: function () {
      likeItem.click(function (e) {
        e.preventDefault();
        const _this = $(this);
        const voteContainer = _this.parents(".review__likes");
        const likeNum = _this.find(".review__count");
        if (_this.hasClass("active")) {
          _this.removeClass("active");
          const newNum = +likeNum.text() - 1;
          likeNum.text(newNum);
        } else {
          Reviews.unsetLike(voteContainer);
          likeItem.removeClass("active");
          _this.addClass("active");
          const newNum = +likeNum.text() + 1;
          likeNum.text(newNum);
        }
      });
    },
    unsetLike: function (voteContainer) {
      if (!voteContainer) return;
      const votedNode = voteContainer.find(".js-like.active");
      if (votedNode.length) {
        votedNode.removeClass("active");
        const likeNum = votedNode.find(".review__count");
        const newNum = +likeNum.text() - 1;
        likeNum.text(newNum);
      }
    },
    init: function () {
      Reviews.changeInpuFile();
      Reviews.submitForm();
      Reviews.hoverStarRating();
      Reviews.addRating();
      Reviews.addLike();
    },
  };
})();

export default Reviews;
