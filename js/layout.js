$(document).ready(function() {
var $container = $('.layout').isotope({
itemSelector:'.foto',
animationEngine: 'jquery',
transitionDuration: '.8s',
layoutMode: 'masonry',
masonry:{
  gutterWidth: 0,
  isFitWidth:true
}
});


var iso = $container.data('isotope');
$container.isotope( 'reveal', iso.items );
});

$(function() {
    $('.open-dialog').click(function() {
        $('#kotak-dialog').show().find('#iframeContainer').html('<iframe src="' + this.href + '"></iframe>');
        $('#dialog-overlay').fadeTo(400, 0.8);
        return false;
    });
    $('#kotak-dialog .close').click(function() {
        $('#kotak-dialog').fadeOut('normal', function() {
            $('iframe', this).remove();
        });
        $('#dialog-overlay').hide();
        return false;
    });
});

$(document).ready(function() {
    $('ul#ease ul li:odd').addClass('odd');
    $('ul#ease li').hover(function() {
        $('ul',this).stop(true, true).show(1000,"easeOutBounce");
    }, function() {
        $('ul',this).stop(true, true).hide(450,"easeOutBack");
    });
});

$('img.me').bind('contextmenu',function(e){return !1});