/* 
 * Written for: Bootstrap Wishlist v0.1.0
 * Author: Mahmoud Elmhadi
 * Author Url: elmahdim.com
 * Twitter   : @ElmahdiMahmoud
 * Licensed under http://opensource.org/licenses/MIT
 */
(function($) {
    $(document).ready(function() {

        $('.dropdown-val a').each(function() {
            var $this = $(this),
                _text = $this.text();
            $this.on('click', function(e) {
                e.preventDefault();
                $this
                    .closest('.btn-group')
                    .removeClass('.open')
                    .find('.dropdown-toggle')
                    .contents().get(0).nodeValue = _text;
                if ($('.selected-val').get(0)) {
                    $this.closest('.btn-group').find('.selected-val').val($this.attr('data-value'));
                }
            });
        });

    });
})(jQuery);