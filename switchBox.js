/*jQuery(document).ready(function () {
    var container = document.querySelector('#sbWrapper');
    var msnry = new Masonry( container, {
        // options...
        itemSelector: '.switchBox',
        stamp: ".stamp",
        transitionDuration:'1s',
        visibleStyle:   { opacity: 1, transform: 'translateX(0px) scale(1)' },
        hiddenStyle:    { opacity: 0, transform: 'translateX(-800px) scale(0.10)' },
        //columnWidth: 300,     //columnWidth: 200
        gutter: 100,
        isAnimated: true,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });*/
jQuery(document).ready(function () {

    jQuery('#sbWrapper').masonry({

        // options
        itemSelector : '.switchBox',
        stamp: ".stamp",
        columnWidth : 240,
        transitionDuration:'1s',
        gutter:100,
        isAnimated: true,
        visibleStyle:   { opacity: 1, transform: 'translateX(0px) scale(1)' },
        hiddenStyle:    { opacity: 0, transform: 'translateX(-800px) scale(0.10)' },
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }

    });


//todo right:0 -> left:0 animieren
    //todo X zum schließen.

    jQuery('.switchBox').click(function() {
        console.log("toggle");
        jQuery(this).toggleClass("bigBox", 1000);
        jQuery('#sbWrapper').masonry();


    });

});

