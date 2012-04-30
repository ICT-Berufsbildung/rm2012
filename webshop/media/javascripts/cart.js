$(function () {

    $('.form-cart .remove').live('click', function () {

        // get url from link
        var url = $(this).attr('href');

        // remove product and reload cart view
        $('.container').load(url + ' .container > *');

        // prevent default
        return false;
    });
});
