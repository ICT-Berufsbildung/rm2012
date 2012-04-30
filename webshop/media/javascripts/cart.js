$(function () {

    $('.form-cart .remove').click(function () {

        // get url from link
        var url = $(this).attr('href');

        // remove product and reload cart view
        $('.form-cart').load(url + ' .form-cart');

        // prevent default
        return false;
    });
});
