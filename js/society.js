function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '500%',
        triggerElement:'.about-title',
        triggerHook:0
    })
    .setPin('.about-title')
    .addTo(controller);
}

splitScroll();

function splitScroll2(){
    const controller2 = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '400%',
        triggerElement:'.about-title2',
        triggerHook:0
    })
    .setPin('.about-title2')
    .addTo(controller2);
}

splitScroll2();