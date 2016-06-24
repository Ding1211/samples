// ;(function($){
// 	$.fn.extend({
// 		lightbox: function(){
// 			this.on('click', function(){
// 			$overlay = $('<div class="lightbox-overlay"></div>')
// 			$wrap = $('<div class="linghtbox-wrap"></div>')
// 			var oImg = new Image();
// 			oImg.onload = function(){
// 				$wrap.css({
// 					marginLeft: -this.width/2,
// 					marginTop: -this.height/2,

// 				});
// 				$(this).appendTo($wrap);
// 			}
// 			oImg.src = this.data('src');
// 			$overlay.appendTo(document.body);
// 			$wrap.appendTo(document.body);
			
// 		}
// 	});
// })(jQuery);

;(function($){
	$.fn.extend({
		lightbox: function(){
			this.on('click', function(){
				var iWidth = this.getAttribute('data-width')>=331?331:this.getAttribute('data-width');
				var iHeight = this.getAttribute('data-height')>=208?208:this.getAttribute('data-height');
				$div = $('<div class="lightbox-img"><div class="loading">loading</div><div class="lightbox-close"></div></div>');
				$overlay = $('<div class="lightbox-overlay"></div>');
				$overlay.appendTo(document.body).animate({
					opacity: 0.80
				}, function(){
				$div.css({
						width: iWidth,
						height: iHeight,
						left: ($(window).width() - iWidth) / 2,
						top: ($(window).height() - iHeight) / 2
					}).appendTo(document.body).animate({
						opacity: 1
					},1000);
				});

				
				var oImg = new Image();
				// oImg.className = 'lightbox-img';
				oImg.onload = function(){
					
					$div.children('.loading').hide();
					this.width = iWidth;
					this.height = iHeight;
					$div.append(oImg);
				}
				oImg.src = this.getAttribute('data-src');
				// document.body.appendChild(oImg);


				
				$div.children('.lightbox-close').on('click', function(){
					$div.animate({
						opacity: 0
					},1000,function(){
						$(this).remove();
						$div.remove();
					});
					$overlay.animate({
						opacity: 0
					},1000,function(){
						$overlay.remove();
					});
					
				});
				$overlay.on('click', function(){
					$div.animate({
						opacity: 0
					},1000,function(){
						$div.remove();
					});
					$overlay.animate({
						opacity: 0
					},1000,function(){
						$(this).remove();
					});
						
				});
				
			});
			
		}
	});
})(jQuery);