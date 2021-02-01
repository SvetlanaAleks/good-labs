import "select2/dist/js/select2.full";
import layout from "./global/layout";
import objectFitImages from "object-fit-images";
import Datee from "./modules/Datee";
import Menu from "./modules/Menu";
import Typed from "./modules/Typed";
import Controls from "./modules/Controls";
import Sliders from "./modules/Sliders";
import Popup from "./modules/Popup";

$(function () {
  Datee;
  objectFitImages();
  Controls.init();
  Menu.init();
  Sliders.init();
  Popup.init();
  Typed;

  layout.layoutHandler({
    afterResize: (layout) => {
      $(".js-select--product").select2({
        minimumResultsForSearch: Infinity,
        placeholder: "Product",
      });
      $(".js-select--type").select2({
        minimumResultsForSearch: Infinity,
        placeholder: "Your question",
      });
    },
  });
  $(".js-select").select2({
    minimumResultsForSearch: Infinity,
  });
  $(".js-select--product").select2({
    minimumResultsForSearch: Infinity,
    placeholder: "Product",
  });
  $(".js-select--type").select2({
    minimumResultsForSearch: Infinity,
    placeholder: "Your question",
  });
});
