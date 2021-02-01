import layout from "./global/layout";
import objectFitImages from "object-fit-images";
import Datee from "./modules/Datee";
import Menu from "./modules/Menu";
import Typed from "./modules/Typed";
import Controls from "./modules/Controls";
import Sliders from "./modules/Sliders";

$(function () {
  Datee;
  objectFitImages();
  Controls.init();
  Menu.init();
  Sliders.init();
  Typed;
});
