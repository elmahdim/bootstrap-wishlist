/* 
 * Written for: Bootstrap Wishlist v0.1.2
 * Author: Mahmoud Elmhadi
 * Author Url: elmahdim.com
 * Twitter   : @ElmahdiMahmoud
 * Licensed under http://opensource.org/licenses/MIT
 */
(function($) {
var dropdownVal = function ($el, $holder, _txt) {
    $el.closest($holder)
        .removeClass('.open')
        .find('.dropdown-toggle')
        .contents().get(0).nodeValue = _txt;
    if ($('.selected-val').get(0)) {
        $el.closest($holder).find('.selected-val').val($el.attr('data-value'));
    }
};

$('.dropdown-val a').each(function(){
    $(this).on('click', function (e) {
        e.preventDefault();
        dropdownVal($(this), $('.dropdown-wl'), $(this).text());
    }); 
});
})(jQuery); 