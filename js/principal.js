$(document).ready(function () {
    $('.dropdown-toggle').dropdown();
    $('li.disabled > a').click(function (event) {
        event.preventDefault();
    });
});
