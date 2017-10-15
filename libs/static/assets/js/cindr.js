let lastTouchY = 0;
const showWrapper = () => {
    $('.wrapper').stop().animate({ top: '0' }, 300, () => {
        $('.side').fadeIn(300);
    });
}

const hideWrapper = () => {
    $('.side').hide();
    $('.wrapper').stop().animate({ top: '100vh' }, 300);
}

$('.chevron-down').on('click', () => {
    showWrapper();
});

$('.head').on('mousewheel', (e) => {
    const hd = $('.head');
    let isBottom = false;
    const vh = Math.floor(hd[0].scrollHeight - hd.scrollTop());
    const oh = Math.floor(hd.outerHeight());

    if (vh > oh - 5 && vh < oh + 5) {
        isBottom = true;
    }

    if (e.originalEvent.wheelDeltaY < 0 && isBottom) {
        showWrapper();
    }
});

$('.wrapper').on('mousewheel', (e) => {
    if (e.originalEvent.wheelDeltaY > 0 && $('.wrapper').offset().top === 0) {
        hideWrapper();
    }
});
