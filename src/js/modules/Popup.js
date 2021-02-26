import noScroll from "../global/noScroll";
const Popup = (function () {
  "use strict";
  const popUpBlock = $(".js-popup");
  const linkShowPopUp = $(".js-show-popup");
  const overlay = $(".js-overlay");
  const contactsForm = $("#js-contacts-form");
  const popupSuccess = $("#popup-success");
  const priceLabel = $(".js-price-label");
  const orderPopup = $("#order-popup");

  return {
    initPopupSuccess: function () {
      contactsForm.submit(function (e) {
        e.preventDefault();
        popupSuccess.addClass("active");
        overlay.addClass("active");
        noScroll.on();
      });
    },
    initPopup: function () {
      linkShowPopUp.click(function (e) {
        e.preventDefault();
        const _this = $(this);
        const target = $(_this.data("target"));
        target.toggleClass("active");
        overlay.addClass("active");
        noScroll.on();
      });
    },
    priceLabels: function () {
      priceLabel.click(function (e) {
        const _this = $(this);
        priceLabel.removeClass("price-active");
        _this.addClass("price-active");
        orderPopup.removeClass("order-pack-bundle0");
        orderPopup.removeClass("order-pack-bundle1");
        orderPopup.removeClass("order-pack-bundle2");
        orderPopup.addClass("order-pack-" + _this.attr("for"));
      });
    },
    closePopup: function () {
      $(".js-close, .js-btn-popup-success").click(function (e) {
        e.preventDefault();
        popUpBlock.removeClass("active");
        overlay.removeClass("active");
        noScroll.off();
      });
    },
    init: function () {
      Popup.initPopup();
      // Popup.initPopupSuccess();
      Popup.priceLabels();
      Popup.closePopup();
    },
  };
})();

export default Popup;
