
$(document).ready(function() {
    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
        localStorage.setItem('activeTab', currentAttrValue);
        // Show/Hide Tabs
        $(currentAttrValue).addClass('active').siblings().removeClass('active');
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });
    // on load of the page: switch to the currently selected tab
    var hash =localStorage.getItem('activeTab');
    if (hash != null) {
        $(hash).addClass('active').siblings().removeClass('active');
        // Change/remove current tab to active
        var selector = "a[href=" + hash + "]";
        $(selector).parent('li').addClass('active').siblings().removeClass('active');
    }
});
