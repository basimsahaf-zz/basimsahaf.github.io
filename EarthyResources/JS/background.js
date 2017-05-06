$("title").hover(function(){
            $(this).find('.title').addClass('glow');
            },function(){
                $(this).find('.title').removeClass('glow');
            }
        );
});