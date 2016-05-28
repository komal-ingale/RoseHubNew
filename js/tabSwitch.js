
$(document).ready(function() {
    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
        var date = new Date();
        var minutes = 30;
        date.setTime(date.getTime() + (minutes * 60 * 1000));
        $.cookie('activeTab', currentAttrValue,{ expires: date });

        // Show/Hide Tabs
        $(currentAttrValue).addClass('active').siblings().removeClass('active');
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });
    // on load of the page: switch to the currently selected tab
    var hash = $.cookie('activeTab');
    if(hash==null || hash==='#'){
        hash='#home';
    }
        $(hash).addClass('active').siblings().removeClass('active');
        // Change/remove current tab to active
        var selector = "a[href=" + hash + "]";
    if(hash==='#project' || hash ==='#faculty' || hash==='#year'){
        $('#about').parent('li').addClass('active').siblings().removeClass('active');
    }else {
        $(selector).parent('li').addClass('active').siblings().removeClass('active');
    }
});
