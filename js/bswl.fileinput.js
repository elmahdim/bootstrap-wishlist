/* 
 * Written for: Bootstrap Wishlist v0.1.2
 * Author: Mahmoud Elmhadi
 * Author Url: elmahdim.com
 * Twitter   : @ElmahdiMahmoud
 * Licensed under http://opensource.org/licenses/MIT
 */
(function($) {
	function getFile(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function (e) {
				$('#avatar').attr('src', e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
			$('.upload-btn').hide();
		}
	}
})(jQuery); 