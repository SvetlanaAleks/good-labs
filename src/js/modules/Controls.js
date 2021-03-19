const Controls = (function () {
  "use strict";
  const cookieBanner = $(".js-cookie-banner");
  const tabs = $(".js-tab");
  const contentTabs = $(".js-content-tab");
  const btnAccordeon = $(".js-btn-accordeon");
  const contentAccordeon = $(".js-info-accordeon");
  const btnCloseBanner = $(".js-close-banner");
  const privilege = $(".js-privilege");
  const inputForm = $(".js-input");
  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  return {
    scrollToTop: function () {
      $(".js-scroll-top").click(function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "fast");
      });
    },
    closeCookieBanner: function () {
      $(".js-btn-cookie").click(function (e) {
        e.preventDefault();
        cookieBanner.hide();
      });
    },
    labelFormActive: function () {
      inputForm.keyup(function () {
        const _this = $(this);
        if (_this.val()) {
          _this.addClass("active");
        } else {
          _this.removeClass("active");
        }
      });
    },
    showPrivilege: function () {
      privilege.on("click", function (e) {
        e.preventDefault();
        const _this = $(this);
        const parent = _this.parents(".js-accordeon");
        if (!_this.hasClass("active")) {
          parent.find(privilege).removeClass("active");
        }
        _this.toggleClass("active");
      });
    },
    highlightPanelItem: function () {
      var paramdId = getParameterByName("id");
      const target = $(`#${paramdId}`);

      target.addClass("active");
    },
    closeBanner: function () {
      btnCloseBanner.click(function (e) {
        e.preventDefault();
        $(".js-banner").addClass("no-active");
        $(".menu").addClass("menu--banner-closed");
      });
    },
    showInfoTabs: function () {
      tabs.click(function (e) {
        e.preventDefault();
        const _this = $(this);
        tabs.removeClass("active");
        _this.addClass("active");
        const target = $(_this.data("tab"));
        contentTabs.removeClass("active");
        target.addClass("active");
      });
    },
    openFaqContent: function () {
      btnAccordeon.on("click", function (e) {
        e.preventDefault();
        const _this = $(this);

        const parent = _this.parents(".js-accordeon");
        if (!_this.hasClass("active")) {
          parent.find(contentAccordeon).slideUp();
          parent.find(btnAccordeon).removeClass("active");
        }
        _this.toggleClass("active");
        _this.next(contentAccordeon).slideToggle();
      });
    },
    init: function () {
      Controls.scrollToTop();
      Controls.closeCookieBanner();
      Controls.labelFormActive();
      Controls.showPrivilege();
      Controls.highlightPanelItem();
      Controls.closeBanner();
      Controls.showInfoTabs();
      Controls.openFaqContent();
    },
  };
})();

export default Controls;
