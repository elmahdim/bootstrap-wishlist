/* 
 * Written for: Bootstrap Wishlist v0.1.1
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

!function(e){e.fn.previewImg=function(n){var i={image:null},n=e.extend({},i,n);return this.each(function(){function i(i){if(i.files&&i.files[0]){var t=new FileReader;t.onload=function(i){e("[data-preview='"+n.image+"']").attr("src",i.target.result)},t.readAsDataURL(i.files[0]),e(".upload-btn").hide()}}var t=e(this);t.on("change",function(){i(this)})})}}(jQuery,window,document);
