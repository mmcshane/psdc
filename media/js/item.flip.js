jQuery(function($) {
    $('ul.thumbs > li').click(function(){
        var src = $(this)
        $('div#item-detail-container *').replaceWith(src.children('div.detail:first').clone());
        $(src.parent.current).removeClass('selected')
        src.parent.current = src.children('img.thumb:first').addClass('selected')
    }).eq(0).click();
});
