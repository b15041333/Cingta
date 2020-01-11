
$(function(){
    $('#middleNav_0').click(function(){
        $('#latestNews').css('display','block').siblings('.newsList').css('display','none');
    });
    
    $('#middleNav_1').click(function(){
        $('#dynamicNews').css('display','block').siblings('.newsList').css('display','none');
    });
    
    $('#middleNav_2').click(function(){
        $('#rankingNews').css('display','block').siblings('.newsList').css('display','none');
    });
    
    $('#middleNav_3').click(function(){
        $('#geniusNews').css('display','block').siblings('.newsList').css('display','none');
    });

    $('#middleNav_4').click(function(){
        $('#projectNews').css('display','block').siblings('.newsList').css('display','none');
    });

    $('#middleNav_5').click(function(){
        $('#paperNews').css('display','block').siblings('.newsList').css('display','none');
    });

    $('#middleNav_6').click(function(){
        $('#globalNews').css('display','block').siblings('.newsList').css('display','none');
    });

});