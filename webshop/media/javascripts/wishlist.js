$(function () {

    $('.form-basket .wishlist').click(function () {

        // get url from link
        var url = $(this).attr('href');

        // add product to wish list and update persistent wish list
        $('.header .wishlist').load(url + ' .header .wishlist a');

        $(this).text('Added to wish list').attr('disabled', 'disabled');

        // prevent default
        return false;
    });

    $('.table-wishlist .remove').live('click', function () {

        // get url from link
        var url = $(this).attr('href');

        // remove product and reload whole page
        $('body').load(url + ' > div');

        // prevent default
        return false;
    });
});
