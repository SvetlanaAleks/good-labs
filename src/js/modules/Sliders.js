import "slick-carousel";
const Sliders = (function () {
  "use strict";
  const sliderAbout = $(".js-about-slider");
  const sliderAbout2 = $(".js-about-slider2");
  const sliderReviews = $(".js-reviews-slider");
  const sliderKnowledge = $(".js-knowledge-slider");

  return {
    initIndexProsuctsSlider: function () {
      $(".slider-products").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
        dotsClass: "slick-dots slick-dots--dark",
        responsive: [
          {
            breakpoint: 891,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 641,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              variableWidth: true,
            },
          },
        ],
      });
    },
    initProsuctsSlider: function () {
      $(".slider-prod__for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow:
          '<button class="prev"><svg width="18" height="34" viewBox="0 0 18 34" fill="none" opacity="0.1" xmlns="http://www.w3.org/2000/svg"><path  fill-rule="evenodd" clip-rule="evenodd" d="M1.70707 17L17.3535 1.35359L16.6464 0.646484L0.292854 17L16.6464 33.3536L17.3535 32.6465L1.70707 17Z" fill="black"/></svg></button>',
        nextArrow:
          '<button class="next"><svg width="18" height="34" viewBox="0 0 18 34" fill="none" opacity="0.1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.2929 17L0.646484 1.35359L1.35359 0.646484L17.7071 17L1.35359 33.3536L0.646484 32.6465L16.2929 17Z" fill="black"/></svg></button>',
        asNavFor: ".slider-prod__nav",
        responsive: [
          {
            breakpoint: 769,
            settings: {
              adaptiveHeight: true,
            },
          },
        ],
      });
      $(".slider-prod__nav").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 1,
        swipeToSlide: true,
        asNavFor: ".slider-prod__for",
        dots: false,
        arrows: false,
        draggable: false,
        focusOnSelect: true,
      });
    },
    initAboutSlider: function () {
      sliderAbout.slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true,
        dotsClass: "slick-dots slick-dots--dark",
        responsive: [
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 481,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              variableWidth: true,
            },
          },
        ],
      });
    },
    initAboutSlider2: function () {
      sliderAbout2.slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: "slick-dots slick-dots--dark",
        variableWidth: true,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 481,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              variableWidth: true,
            },
          },
        ],
      });
    },
    initReviewsSlider: function () {
      sliderReviews.slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow:
          '<button class="prev"><svg width="42" height="36" opacity="0.1" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.262 0.293457L0.587044 17.9999L18.262 35.7064L19.6774 34.2935L4.41117 18.9999H42V16.9999H4.41117L19.6774 1.70641L18.262 0.293457Z" fill="#202124"/></svg></button>',
        nextArrow:
          '<button class="next"><svg width="42" height="36" opacity="0.1"  viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.738 0.293457L41.413 17.9999L23.738 35.7064L22.3226 34.2935L37.5888 18.9999H0V16.9999H37.5888L22.3226 1.70641L23.738 0.293457Z" fill="#202124"/></svg></button>',
        dots: true,
        dotsClass: "slick-dots slick-dots--dark",
        responsive: [
          {
            breakpoint: 891,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 641,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              variableWidth: true,
            },
          },
        ],
      });
    },
    initKnowledgeSlider: function () {
      sliderKnowledge.slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow:
          '<button class="prev"><svg width="42" height="36" opacity="0.1" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.262 0.293457L0.587044 17.9999L18.262 35.7064L19.6774 34.2935L4.41117 18.9999H42V16.9999H4.41117L19.6774 1.70641L18.262 0.293457Z" fill="#202124"/></svg></button>',
        nextArrow:
          '<button class="next"><svg width="42" height="36" opacity="0.1"  viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.738 0.293457L41.413 17.9999L23.738 35.7064L22.3226 34.2935L37.5888 18.9999H0V16.9999H37.5888L22.3226 1.70641L23.738 0.293457Z" fill="#202124"/></svg></button>',
        dots: true,
        dotsClass: "slick-dots slick-dots--dark",
        responsive: [
          {
            breakpoint: 891,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 641,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              variableWidth: true,
            },
          },
        ],
      });
    },
    init: function () {
      Sliders.initIndexProsuctsSlider();
      Sliders.initProsuctsSlider();
      Sliders.initAboutSlider();
      Sliders.initAboutSlider2();
      Sliders.initReviewsSlider();
      Sliders.initKnowledgeSlider();
    },
  };
})();

export default Sliders;
