const Datee = (function () {
    let yearSelector = $('.year'), 
        date = new Date(),
        year = date.getFullYear();
    yearSelector.html(year);
})();
export default Datee;