$(function () {

    $('.form-cart .remove').live('click', function () {

        // get url from link
        var url = $(this).attr('href');

        // remove product and reload whole page
        $('body').load(url + ' > div');

        // prevent default
        return false;
    });
});
